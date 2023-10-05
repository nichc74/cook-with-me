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

        # # # note_data = data.pop("notes", [])
        notes = data['notes']
        parse_and_create_notes(notes, recipe)

        return data
    
    except Exception as error: 
        print(error)

def parse_and_create_recipe_metadata(data, status):
    try:
        data = json.loads(data, object_hook=lambda d: SimpleNamespace(**d))
        category=Category.objects.get_or_create(category_name=data.category)
        cuisine=Cuisine.objects.get_or_create(category_name=data.cuisine)

        image = None
        if data.image:
            image = upload_image(data.image)

        return Recipe.objects.create(
            image=image,
            title=data.title,
            author=data.author,
            url_slug=create_url_slug(data.title),
            prep_time=data.prepTime,
            cook_time=data.cookTime,
            total_time=data.totalTime,
            cuisine=cuisine[0],
            serves=data.serves,
            source_link=data.sourceLink,
            category=category[0],
            status=status
            
        )
    except Exception as error:
        print(error)


def parse_and_create_summary(summary_data, recipe):
    try:
        if summary_data == "":
            return
        return RecipeSummary.objects.create(recipe=recipe, summary=summary_data)
    except Exception as error:
        print(error)

def parse_and_create_recipe_ingredient_components(recipe_ingredient_component_data, recipe):
    try:
        recipe_ingredient_component_data = json.loads(recipe_ingredient_component_data, object_hook=lambda d: SimpleNamespace(**d))
        for recipe_componet in recipe_ingredient_component_data:
            name = recipe_componet.componentName.upper()
            component = RecipeIngredientComponent.objects.create(recipe=recipe, component_name=name)
            recipe_ingredient_data = recipe_componet.ingredients
            parse_and_create_recipe_ingredient(recipe_ingredient_data, component)
        return
    except Exception as error: 
        print(error)

def parse_and_create_recipe_ingredient(recipe_ingredient_data, component):
    try:
        for recipe_ingredient in recipe_ingredient_data:
            if recipe_ingredient == None or recipe_ingredient.name == "":
                continue
            ingredient_name = recipe_ingredient.name.lower()
            metric_name = recipe_ingredient.metric.lower()
            ingredient = Ingredient.objects.get_or_create(name=ingredient_name)
            metric = Metric.objects.get_or_create(name=metric_name)
            RecipeIngredient.objects.create(recipe_ingredient_component=component, ingredient=ingredient[0], amount=recipe_ingredient.amount, metric=metric[0] )
        return 
    except Exception as error: 
        print(error)

def parse_and_create_recipe_instructional_components(recipe_instructional_component_data, recipe):
    try:
        recipe_instructional_component_data = json.loads(recipe_instructional_component_data, object_hook=lambda d: SimpleNamespace(**d))
        for recipe_componet in recipe_instructional_component_data:
            name = recipe_componet.componentName.upper()
            component = RecipeInstructionalComponent.objects.create(recipe=recipe, component_name=name)
            recipe_instructional_data = recipe_componet.instructions
            parse_and_create_instructions(recipe_instructional_data, component)
        return
    except Exception as error: 
        print(error)


def parse_and_create_instructions(recipe_instructional_data, component):
    try:
        for step in range(0, len(recipe_instructional_data)):
            instruction = recipe_instructional_data[step]
            if instruction.description == "":
                continue
            if instruction.image:
                image = upload_image(instruction.image)
                if image:
                    Instruction.objects.create(recipe_instructional_component=component, description=instruction.description, step_id=step+1, image=image)
                    
            else:
                Instruction.objects.create(recipe_instructional_component=component, description=instruction.description, step_id=step+1, image=None)
        return 
    except Exception as error: 
        print(error)

def parse_and_create_notes(notes, recipe):
    notes = json.loads(notes, object_hook=lambda d: SimpleNamespace(**d))
    for step in range(0, len(notes)):
        note=notes[step]
        if note.description == "":
            continue
        Note.objects.create(recipe=recipe, description=note.description, step_id=step+1)
    return

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
