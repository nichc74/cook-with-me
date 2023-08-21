from .models import Recipe
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Recipe, RecipeSummary, RecipeComponent, Note
from .serializers import RecipeSerializer
from .utils.recipe_creation_module.helper.recipe_parser import parse_and_create_recipe

# Create your views here.
@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.all()
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRecipe(request, id):
    # recipe_id = request.data.pop("recipe_id", "")
    try:
        recipe = Recipe.objects.get(id=id)
        serializer = RecipeSerializer(recipe)
        return Response(serializer.data)
    except Recipe.DoesNotExist:
        return Response({"message": "Recipe not found"}, status=404)


@api_view(['POST'])
def postRecipe(request):
    # data = request.data.pop("recipe_data", {})
    response = parse_and_create_recipe(request.data)
    return Response(response)

# def createRecipe(request):
#     print("==============================================")
#     print(request)
#     recipe_summary_data = request.pop("summary", {})
#     recipe = Recipe.objects.create(**request)
#     serializer = RecipeSerializer(data=request.data)
#     RecipeSummary.objects.create(recipe=recipe, **recipe_summary_data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)
