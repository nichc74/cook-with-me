from cookbook.models import Recipe, Category, Image, RecipeSummary, Note, RecipeIngredientComponent, RecipeInstructionalComponent, RecipeIngredient, Instruction, Ingredient, Metric, Cuisine
import re
import json
from types import SimpleNamespace
from django.db import transaction
from cookbook.api.Cloudinary.Cloudinary import upload

@transaction.atomic
def parse_and_create_recipe(data):
    try:
        metadata = data['metadata']
        status = data['status']
        recipe = parse_and_create_recipe_metadata(metadata, status)
        
        summary = data['summary']
        parse_and_create_summary(summary, recipe)
        
        recipe_ingredient_components = data['recipeIngredientComponents'] 
        parse_and_create_recipe_ingredient_components(recipe_ingredient_components, recipe)

        recipe_instructional_components = data['recipeInstructionalComponents']
        parse_and_create_recipe_instructional_components(recipe_instructional_components, recipe)

        notes = data['notes']
        parse_and_create_notes(notes, recipe)

        return {'url_slug': recipe.url_slug, 'id': recipe.id}
    
    except Exception as error: 
        print(error)


def parse_and_create_recipe_metadata(data, status):
    try:
        parsed_data = json.loads(data, object_hook=lambda d: SimpleNamespace(**d))
        
        category, _ = Category.objects.get_or_create(category_name=parsed_data.category)
        cuisine, _ = Cuisine.objects.get_or_create(name=parsed_data.cuisine)

        try:
            image = Image.objects.get(path=parsed_data.image)
        except Image.DoesNotExist:
            image = upload_image(parsed_data.image)

        if hasattr(parsed_data, 'id'):
            recipe, _ = Recipe.objects.get_or_create(pk=parsed_data.id)
        else:
            recipe = Recipe()

        recipe.image = image
        recipe.title = parsed_data.title
        recipe.author = parsed_data.author
        recipe.url_slug = create_url_slug(parsed_data.title)
        recipe.prep_time = parsed_data.prepTime
        recipe.cook_time = parsed_data.cookTime
        recipe.total_time = parsed_data.totalTime
        recipe.cuisine = cuisine
        recipe.serves = parsed_data.serves
        recipe.source_link = parsed_data.sourceLink
        recipe.category = category
        recipe.status = status
        recipe.save()

        return recipe
    
    except (json.JSONDecodeError, Exception) as error:
        print(error)
        return {"recipe_error": error }
        # return None  # Handle the exception gracefully and return None or another suitable value
    
def parse_and_create_summary(summary_data, recipe):
    try:
        parsed_data = json.loads(summary_data, object_hook=lambda d: SimpleNamespace(**d))

        if parsed_data.summary == "":
            return
        
        if hasattr(parsed_data, 'id'):
            recipe_summary, _ = RecipeSummary.objects.get_or_create(pk=parsed_data.id)
        else:
            recipe_summary = RecipeSummary()

        if recipe:
            recipe_summary.recipe = recipe
        
        if recipe_summary.summary != parsed_data.summary:
            recipe_summary.summary = parsed_data.summary
        
        recipe_summary.save()

    except Exception as error:
        return {"summary_error": error }

def parse_and_create_recipe_ingredient_components(recipe_ingredient_component_data, recipe):
    try:
        recipe_ingredient_component_ids = list(RecipeIngredientComponent.objects.filter(recipe_id=recipe.id).values_list('id', flat=True))

        recipe_ingredient_component_data = json.loads(recipe_ingredient_component_data, object_hook=lambda d: SimpleNamespace(**d))
        
        for recipe_componet in recipe_ingredient_component_data:
            if hasattr(recipe_componet, 'id'):
                recipe_ingredient_component, _ = RecipeIngredientComponent.objects.get_or_create(pk=recipe_componet.id)
                recipe_ingredient_component_ids.remove(recipe_componet.id)
            else:
                recipe_ingredient_component = RecipeIngredientComponent()
            
            if hasattr(recipe_componet, 'componentName'):
                name = recipe_componet.componentName.upper()
                if recipe_ingredient_component.component_name != name:
                    recipe_ingredient_component.component_name = name
            
            recipe_ingredient_component.recipe_id = recipe.id
            recipe_ingredient_component.save()

            recipe_ingredient_data = recipe_componet.ingredients
            parse_and_create_recipe_ingredient(recipe_ingredient_data, recipe_ingredient_component)
        
        RecipeIngredientComponent.objects.filter(pk__in=recipe_ingredient_component_ids).delete()
        return
    
    except Exception as error: 
        return {"Message": f"recipe_ingredient_component_error: {error}"}

def parse_and_create_recipe_ingredient(recipe_ingredient_data, component):
    try:
        ingredient_ids = list(RecipeIngredient.objects.filter(recipe_ingredient_component_id=component.id).values_list('id', flat=True))
        for recipe_ingredient in recipe_ingredient_data:
            if recipe_ingredient == None or recipe_ingredient.name == "":
                continue
            
            ingredientObj = None
            if hasattr(recipe_ingredient, 'id') and recipe_ingredient.id != '':
                ingredientObj, _ = RecipeIngredient.objects.get_or_create(pk=recipe_ingredient.id)
                ingredient_ids.remove(recipe_ingredient.id)
            else:
                ingredientObj = RecipeIngredient()

            ingredient_name = recipe_ingredient.name.lower()
            
            if hasattr(recipe_ingredient, 'metric') and recipe_ingredient.metric != None:
                metric_name = recipe_ingredient.metric.lower()
                metric = Metric.objects.get_or_create(name=metric_name)
                ingredientObj.metric = metric[0]


            ingredient = Ingredient.objects.get_or_create(name=ingredient_name)
           
            ingredientObj.recipe_ingredient_component_id = component.id
            ingredientObj.amount = recipe_ingredient.amount
            ingredientObj.ingredient = ingredient[0]
            ingredientObj.save()

        RecipeIngredient.objects.filter(pk__in=ingredient_ids).delete()
        return 
    
    except Exception as error: 
        print(error)
        return {"Message": f"recipe_ingredients_error: {error}"}

def parse_and_create_recipe_instructional_components(recipe_instructional_component_data, recipe):
    try:
        recipe_instructional_component_ids = list(RecipeInstructionalComponent.objects.filter(recipe_id=recipe.id).values_list('id', flat=True))
        recipe_instructional_component_data = json.loads(recipe_instructional_component_data, object_hook=lambda d: SimpleNamespace(**d))
        
        for recipe_componet in recipe_instructional_component_data:   
            if hasattr(recipe_componet, 'id') :
                recipe_instructional_component, _ = RecipeInstructionalComponent.objects.get_or_create(pk=recipe_componet.id)
                recipe_instructional_component_ids.remove(recipe_componet.id)
            else:
                recipe_instructional_component = RecipeInstructionalComponent()
            
            if hasattr(recipe_componet, 'componentName'):
                name = recipe_componet.componentName.upper()
                if recipe_instructional_component.component_name != name:
                    recipe_instructional_component.component_name = name
            
            recipe_instructional_component.recipe_id = recipe.id
            recipe_instructional_component.save()

            recipe_instructional_data = recipe_componet.instructions
            parse_and_create_instructions(recipe_instructional_data, recipe_instructional_component)

        RecipeInstructionalComponent.objects.filter(pk__in=recipe_instructional_component_ids).delete()
        return
    
    except Exception as error: 
        print(error)
        return {"Message": f"instructional_component_error: {error}"}

def parse_and_create_instructions(recipe_instructional_data, component):
    try:
        instructional_ids = list(Instruction.objects.filter(recipe_instructional_component_id=component.id).values_list('id', flat=True))
        for step in range(0, len(recipe_instructional_data)):
            instruction = recipe_instructional_data[step]

            if hasattr(instruction, 'id') and instruction.id != '':
                recipe_instruction, _ = Instruction.objects.get_or_create(pk=instruction.id)
                instructional_ids.remove(recipe_instruction.id)
            else:
                recipe_instruction = Instruction()
           
            if instruction.description == "" and instruction.image == "":
                continue
        
            recipe_instruction.step_id = step + 1
            if recipe_instruction.description != instruction.description:
                recipe_instruction.description = instruction.description
            recipe_instruction.recipe_instructional_component_id = component.id
            recipe_instruction.save()
        
        Instruction.objects.filter(pk__in=instructional_ids).delete()
        return 
    
    except Exception as error: 
        print(error)
        return {"Message": f"instructions_error: {error}"}

def parse_and_create_notes(notes, recipe):
    try:
        notes = json.loads(notes, object_hook=lambda d: SimpleNamespace(**d))
        notes_ids = list(Note.objects.filter(recipe_id=recipe.id).values_list('id', flat=True))

        for step in range(0, len(notes)):
            note=notes[step]

            if hasattr(note, 'id') and note.id != '':
                recipe_note, _ = Note.objects.get_or_create(pk=note.id)
                notes_ids.remove(recipe_note.id)
            else:
                recipe_note = Note()

            if note.description == "":
                continue

            recipe_note.step_id = step + 1
            recipe_note.description = note.description
            recipe_note.recipe_id = recipe.id
            recipe_note.save()

        Note.objects.filter(pk__in=notes_ids).delete()
        return
    except Exception as error: 
        print(error)
        return {"Message": f"notes_error: {error}"}
   

# HELPER FUNCTIONS

def upload_image(file):
    response = upload(file)
    image = Image.objects.create(path=response)
    return image


def create_url_slug(title):
    url_slug = ""
    title = title.lower()
    title = re.sub('[^0-9a-zA-Z]+', ' ', title)
    title_array = title.split()
    for idx in range(0, len(title_array)):
        if idx == len(title_array)-1:
            url_slug += title_array[idx]
        else:
            url_slug += title_array[idx] + "_"
    return "/" + url_slug
