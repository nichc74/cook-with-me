from rest_framework import serializers 
from .models import Recipe 

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        # fields = ('title')
        fields = '__all__'
        # fields = ['title', 'author', 'url_slug', 'prep_time', 'cook_time', 'category', 'cuisine', 'servers', 'banner_image_id', 'is_published']