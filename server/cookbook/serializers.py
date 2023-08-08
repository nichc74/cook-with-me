from rest_framework import serializers 
from .models import Recipe, RecipeSummary, RecipeComponent, Ingredient, RecipeIngredient, Instruction, Note, Category

class RecipeSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeSummary
        fields = '__all__'

class RecipeComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeComponent
        fields = '__all__'

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class RecipeIngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = '__all__'

class InstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instruction
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):
    RecipeSummary = RecipeSummarySerializer(many=False, required=False)
    class Meta:
        model = Recipe
        fields = '__all__'


