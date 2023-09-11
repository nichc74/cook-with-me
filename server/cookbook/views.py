from .models import Recipe
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Recipe, RecipeIngredient, Ingredient
from .serializers import RecipeWithDataSerializer, RecipeSerializer
from .utils.recipe_creation_module.helper.recipe_parser import parse_and_create_recipe

# Create your views here.
@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.filter(is_published=True)[:5]
    # recipes = Recipe.objects.all()  # You can filter this as needed
    return Response(RecipeSerializer(recipes, many = True).data)


@api_view(['GET'])
def getRecipe(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
        serializer = RecipeWithDataSerializer(recipe)
        return Response(serializer.data)
    except Recipe.DoesNotExist:
        return Response({"message": "Recipe not found"}, status=404)
    
@api_view(['GET'])
def getMetricsAndIngredients(request):
    try:
        metrics = RecipeIngredient.objects.values('metric').distinct()
        ingredients = Ingredient.objects.all()
        metric_array = [item['metric'] for item in metrics if item['metric']]
        ingredient_names_array = [ingredient.name for ingredient in ingredients]
        print(ingredient_names_array)
        return Response({"metrics": metric_array, "ingredients": ingredient_names_array})
    except Recipe.DoesNotExist:
        return Response({"message": "Metrics not found"}, status=404)

@api_view(['POST'])
def postRecipe(request):
    try:
        response = parse_and_create_recipe(request.data)
        return Response((response), status=200)
    except:
        return Response({"Message": "Error Occurred"}, status=500)

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
