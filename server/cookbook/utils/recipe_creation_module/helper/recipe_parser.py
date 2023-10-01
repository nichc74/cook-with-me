from cookbook.models import Recipe, Category, Image, RecipeSummary, Note, RecipeIngredientComponent, RecipeComponent, RecipeInstructionalComponent, RecipeIngredient, Instruction, Ingredient
import re
import json
from types import SimpleNamespace
from django.db import transaction
from cookbook.api.Cloudinary.Cloudinary import upload

@transaction.atomic
def parse_and_create_recipe(data):
    try:
        print(data)
        metadata = data['metadata']

        recipe = parse_and_create_recipe_metadata(metadata)
        
        summary = data['summary']
        parse_and_create_summary(summary, recipe)
        
        # # recipe_ingredient_component_data = data.pop("recipe_ingredient_components", [])
        recipe_ingredient_components = data['recipeIngredientComponents'] 
        parse_and_create_recipe_ingredient_components(recipe_ingredient_components, recipe)

        # # # recipe_instructional_component_data = data.pop("recipe_instructional_components", [])
        recipe_instructional_components = data['recipeInstructionalComponents']
        parse_and_create_recipe_instructional_components(recipe_instructional_components, recipe)

        # # # note_data = data.pop("notes", [])
        notes = data['notes']
        parse_and_create_notes(notes, recipe)

        return data
    
    except Exception as error: 
        print(error)

def parse_and_create_recipe_metadata(data):
    try:
        data = json.loads(data, object_hook=lambda d: SimpleNamespace(**d))
        category=Category.objects.get_or_create(category_name=data.category)
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
            cuisine=data.cuisine,
            serves=data.serves,
            source_link=data.sourceLink,
            category=category[0],
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
    print(recipe_ingredient_component_data)
    try:
        recipe_ingredient_component_data = json.loads(recipe_ingredient_component_data, object_hook=lambda d: SimpleNamespace(**d))
        for recipe_componet in recipe_ingredient_component_data:
            name = recipe_componet.componentName
            component = RecipeIngredientComponent.objects.create(recipe=recipe, component_name=name)
            recipe_ingredient_data = recipe_componet.recipe_ingredients
            parse_and_create_recipe_ingredient(recipe_ingredient_data, component)
        return
    except Exception as error: 
        print(error)

def parse_and_create_recipe_ingredient(recipe_ingredient_data, component):
    try:
        for recipe_ingredient in recipe_ingredient_data:
            if recipe_ingredient.ingredient == "":
                continue
            name = recipe_ingredient.ingredient.lower()
            ingredient = Ingredient.objects.get_or_create(name=name)
            RecipeIngredient.objects.create(recipe_component=component, ingredient=ingredient[0], amount=recipe_ingredient.amount, metric=recipe_ingredient.metric )
        return 
    except Exception as error: 
        print(error)

def parse_and_create_recipe_instructional_components(recipe_instructional_component_data, recipe):
    try:
        recipe_instructional_component_data = json.loads(recipe_instructional_component_data, object_hook=lambda d: SimpleNamespace(**d))
        # print(recipe_instructional_component_data)
        for recipe_componet in recipe_instructional_component_data:
            name = recipe_componet.component_name
            component = RecipeInstructionalComponent.objects.create(recipe=recipe, component_name=name)
            recipe_instructional_data = recipe_componet.recipe_instructions
            parse_and_create_instructions(recipe_instructional_data, component)
        return
    except Exception as error: 
        print(error)


def parse_and_create_instructions(recipe_instructional_data, component):
    # print(recipe_instructional_data)
    try:
        for step in range(0, len(recipe_instructional_data)):
            instruction = recipe_instructional_data[step]
            if instruction.description == "":
                continue
            if instruction.image:
                image = upload_image(instruction.image)
                if image:
                    Instruction.objects.create(recipe_component=component, description=instruction.description, step_id=step+1, image=image)
                    
            else:
                Instruction.objects.create(recipe_component=component, description=instruction.description, step_id=step+1, image=None)
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
    title = re.sub('[^0-9a-zA-Z]+', ' ', title)
    title = title.lower()
    title_array = title.split()
    for idx in range(0, len(title_array)):
        if idx == len(title_array)-1:
            url_slug += title_array[idx]
        else:
            url_slug += title_array[idx] + "_"
    return "/" + url_slug
