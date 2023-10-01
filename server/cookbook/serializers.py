from rest_framework import serializers 
from .models import Recipe, RecipeSummary, RecipeIngredientComponent, RecipeInstructionalComponent, Ingredient, RecipeIngredient, Instruction, Note, Category, Image, Metric

class RecipeSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeSummary
        fields = ['summary']

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']

class ImageSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Image
        fields = '__all__'

class MetricSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Metric
        fields = '__all__'

class RecipeIngredientSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='ingredient.name', read_only=True)
    class Meta:
        model = RecipeIngredient
        fields = ['amount', 'metric', 'name']

class InstructionSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image.path', read_only=True)
    class Meta:
        model = Instruction
        fields = ['description', 'step_id', 'image']

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['description', 'step_id']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class RecipeIngredientComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredientComponent
        fields = ['component_name', 'ingredients']
        # fields = '__all__'

class RecipeInstructionalComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeInstructionalComponent
        fields = ['component_name', 'instructions']
        # fields = '__all__'


class RecipeSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image.path', read_only=True)
    category = serializers.CharField(source='category.category_name', read_only=True)

    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeWithDataSerializer(serializers.ModelSerializer):

    recipe_summary = RecipeSummarySerializer(many=True, read_only=True, source='recipesummary_set')
    recipe_ingredient_components = serializers.SerializerMethodField()
    recipe_instructional_components = serializers.SerializerMethodField()
    notes = NoteSerializer(many=True, read_only=True, source='note_set')
    metadata = serializers.SerializerMethodField()

    def get_recipe_ingredient_components(self, instance):
        # Filter Recipe Ingredients based on specific criteria
        # filtered_components = instance.recipecomponent_set.filter(type="ingredient")  # Add your filtering logic here
        return RecipeIngredientComponentSerializer(many=True).data
    
    def get_recipe_instructional_components(self, instance):
        # Filter Recipe Instructions based on specific criteria
        # filtered_components = instance.recipecomponent_set.filter(type="instruction")  # Add your filtering logic here
        return RecipeInstructionalComponentSerializer(many=True).data

    def get_metadata(self, instance):
        return RecipeSerializer(instance).data
    
    class Meta:
        model = Recipe
        fields = ['id', 'metadata', 'recipe_summary', 'recipe_ingredient_components', 'recipe_instructional_components', 'notes']
        # fields = '__all__'

