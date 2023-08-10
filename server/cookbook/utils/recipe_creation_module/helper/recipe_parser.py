from cookbook.models import Recipe, Category, Image, RecipeSummary, Note, RecipeComponent, RecipeIngredient, Instruction, Ingredient

def parse_and_create_recipe(data):
    # print("========================== DATA ========================")
    # print(data)
    metadata = data.pop("metadata", {})
    recipe = parse_and_create_recipe_metadata(metadata)
    
    summary_data = data.pop("summary", {})
    parse_and_create_summary(summary_data, recipe)
    
    recipe_ingredient_component_data = data.pop("recipe_ingredient_components", [])
    parse_and_create_recipe_ingredient_components(recipe_ingredient_component_data, recipe)

    recipe_instructional_component_data = data.pop("recipe_instructional_components", [])
    parse_and_create_recipe_instructional_components(recipe_instructional_component_data, recipe)

    note_data = data.pop("notes", [])
    parse_and_create_notes(note_data, recipe)

    return data

def parse_and_create_recipe_metadata(data):
    category=Category.objects.get_or_create(category_name=data['category'])
    image=Image.objects.get_or_create(path="")

    return Recipe.objects.create(
        title=data['title'],
        author=data['author'],
        url_slug=data['urlSlug'],
        prep_time=data['prepTime'],
        cook_time=data['cookTime'],
        cuisine=data['cuisine'],
        serves=data['serves'],
        is_published=data['isPublished'],
        banner_image_id=image[0],
        category=category[0],
    )

def parse_and_create_summary(summary_data, recipe):
    return RecipeSummary.objects.create(recipe=recipe, summary=summary_data)

def parse_and_create_recipe_ingredient_components(recipe_ingredient_component_data, recipe):
    for recipe_componet in recipe_ingredient_component_data:
        name = recipe_componet['component_name']
        component = RecipeComponent.objects.create(recipe=recipe, component_name=name)
        recipe_ingredient_data = recipe_componet.pop("recipe_ingredients", [])
        parse_and_create_recipe_ingredient(recipe_ingredient_data, component)
    return

def parse_and_create_recipe_ingredient(recipe_ingredient_data, component):
    for recipe_ingredient in recipe_ingredient_data:
        ingredient = Ingredient.objects.get_or_create(name=recipe_ingredient['ingredient'])
        RecipeIngredient.objects.create(recipe_component=component, ingredient=ingredient[0], amount=recipe_ingredient['amount'], metric=recipe_ingredient['metric'] )
    return 


def parse_and_create_recipe_instructional_components(recipe_instructional_component_data, recipe):
    for recipe_componet in recipe_instructional_component_data:
        name = recipe_componet['component_name']
        component = RecipeComponent.objects.create(recipe=recipe, component_name=name)
        recipe_instructional_data = recipe_componet.pop("instructions", [])
        parse_and_create_instructions(recipe_instructional_data, component)
    return


def parse_and_create_instructions(recipe_instructional_data, component):
    for step in range(0, len(recipe_instructional_data)):
        instruction = recipe_instructional_data[step]
        Instruction.objects.create(recipe_component=component, description=instruction['description'], step_id=step+1, is_image=instruction['is_image'] )
    return 

def parse_and_create_notes(notes, recipe):
    for step in range(0, len(notes)):
        note=notes[step]
        Note.objects.create(recipe=recipe, description=note['description'], step_id=step+1, is_image=note['is_image'])
    return

