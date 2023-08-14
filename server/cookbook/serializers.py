from rest_framework import serializers 
from .models import Recipe, RecipeSummary, RecipeComponent, Ingredient, RecipeIngredient, Instruction, Note, Category

class RecipeSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeSummary
        fields = ['summary']
        # fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']

class RecipeIngredientSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='ingredient.name', read_only=True)
    class Meta:
        model = RecipeIngredient
        fields = ['amount', 'metric', 'name']

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = ['description', 'step_id', 'is_image']

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['description', 'step_id', 'is_image']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class RecipeIngredientComponentSerializer(serializers.ModelSerializer):
    ingredients = RecipeIngredientSerializer(many=True, read_only=True, source='recipeingredient_set')
    class Meta:
        model = RecipeComponent
        fields = ['component_name', 'ingredients']
        # fields = '__all__'

class RecipeInstructionalComponentSerializer(serializers.ModelSerializer):
    instructions = InstructionSerializer(many=True, read_only=True, source='instruction_set')
    class Meta:
        model = RecipeComponent
        fields = ['component_name', 'instructions']
        # fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    recipe_summary = RecipeSummarySerializer(many=True, read_only=True, source='recipesummary_set')
    recipe_ingredient_components = serializers.SerializerMethodField()
    recipe_instructional_components = serializers.SerializerMethodField()
    notes = NoteSerializer(many=True, read_only=True, source='note_set')

    def get_recipe_ingredient_components(self, instance):
        # Filter RecipeSummaries based on specific criteria
        filtered_components = instance.recipecomponent_set.filter(type="ingredient")  # Add your filtering logic here
        return RecipeIngredientComponentSerializer(filtered_components, many=True).data
    
    def get_recipe_instructional_components(self, instance):
        # Filter RecipeSummaries based on specific criteria
        filtered_components = instance.recipecomponent_set.filter(type="instruction")  # Add your filtering logic here
        return RecipeInstructionalComponentSerializer(filtered_components, many=True).data

    class Meta:
        model = Recipe
        fields = '__all__'