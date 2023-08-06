from .models import Recipe
# from rest_framework import viewsets
# from rest_framework import permissions

 
# class RecipeViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
#     permission_classes = [permissions.IsAuthenticated]

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Recipe
from .serializer import RecipeSerializer

# Create your views here.
@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postRecipe(request):
    serializer = RecipeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)