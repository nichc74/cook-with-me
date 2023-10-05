from rest_framework import serializers 
from .models import Recipe, RecipeSummary, RecipeIngredientComponent, RecipeInstructionalComponent, RecipeIngredient, Ingredient, Instruction, Note, Category, Image, Metric, Cuisine

class RecipeSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeSummary
        fields = ['summary']

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['name']

    def to_representation(self, instance):
        return instance.name  

class ImageSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Image
        fields = '__all__'

class MetricSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Metric
        fields = ['name']
        
    def to_representation(self, instance):
        return instance.name  

class RecipeIngredientSerializer(serializers.ModelSerializer):
    metric = serializers.CharField(source='metric.name', read_only=True)
    name = serializers.CharField(source='ingredient.name', read_only=True)

    class Meta:
        model = RecipeIngredient
        fields = ['amount', 'metric', 'name']

class InstructionSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image.path', read_only=True)

    class Meta:
        model = Instruction
        fields = ['id', 'description', 'step_id', 'image']

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['description', 'step_id']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
    
    def to_representation(self, instance):
        return instance.category_name  
    
class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = '__all__'
    
    def to_representation(self, instance):
        return instance.name  


class RecipeIngredientComponentSerializer(serializers.ModelSerializer):
    ingredients = RecipeIngredientSerializer(many=True, read_only=True, source='recipeingredient_set')

    class Meta:
        model = RecipeIngredientComponent
        fields = ['id', 'component_name', 'ingredients']

class RecipeInstructionalComponentSerializer(serializers.ModelSerializer):
    instructions = InstructionSerializer(many=True, read_only=True, source='instruction_set')
    class Meta:
        model = RecipeInstructionalComponent
        fields = ['id', 'component_name', 'instructions']


class RecipeSerializer(serializers.ModelSerializer):
    image = serializers.CharField(source='image.path', read_only=True)
    category = serializers.CharField(source='category.category_name', read_only=True)
    cuisine = serializers.CharField(source='cuisine.name', read_only=True)
    
    class Meta:
        model = Recipe
        fields = '__all__'

class RecipeWithDataSerializer(serializers.ModelSerializer):
    metadata = serializers.SerializerMethodField()
    recipe_summary = RecipeSummarySerializer(many=True, read_only=True, source='recipesummary_set')
    recipe_ingredient_components = RecipeIngredientComponentSerializer(many=True, source='recipeingredientcomponent_set')
    recipe_instructional_components = RecipeInstructionalComponentSerializer(many=True, source='recipeinstructionalcomponent_set')
    notes = NoteSerializer(many=True, read_only=True, source='note_set')

    def get_metadata(self, instance):
        return RecipeSerializer(instance).data
    

    class Meta:
        model = Recipe
        fields = ['id', 'metadata', 'recipe_summary', 'recipe_ingredient_components', 'recipe_instructional_components', 'notes']
        # fields = '__all__'

