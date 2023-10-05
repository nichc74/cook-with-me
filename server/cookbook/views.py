from .models import Recipe
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Recipe, Cuisine, Ingredient, Metric, Category
from .serializers import RecipeWithDataSerializer, RecipeSerializer, MetricSerializer, IngredientSerializer, CategorySerializer, CuisineSerializer
from .utils.recipe_creation_module.helper.recipe_parser import parse_and_create_recipe

# Create your views here.
@api_view(['GET'])
def getRecipes(request):
    recipes = Recipe.objects.filter(status='published')
    return Response(RecipeSerializer(recipes, many = True).data)

@api_view(['GET'])
def getAllRecipes(request):
    recipes = Recipe.objects.all()
    return Response(RecipeSerializer(recipes, many = True).data)

@api_view(['GET'])
def getRecipe(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
        serializer = RecipeWithDataSerializer(recipe)
        return Response(serializer.data)
    except Recipe.DoesNotExist:
        return Response({"message": "Recipe not found"}, status=404)
    

@api_view(['POST'])
def postRecipe(request):
    try:
        response = parse_and_create_recipe(request.data)
        return Response((response), status=200)
    except:
        return Response({"Message": "Error Occurred"}, status=500)

@api_view(['POST'])
def updateRecipeStatus(request, id):
    try:
        print(request.data)
        recipe = Recipe.objects.get(id=id)
        recipe.status = request.data['status']
        recipe.save()
        return Response({"success"}, status=200)
    except:
        return Response({"Message": "Error Occurred"}, status=500)

@api_view(['GET'])
def getFormPresets(request):
    metrics = Metric.objects.all()
    ingredients = Ingredient.objects.all()
    categories = Category.objects.all()
    cuisines = Cuisine.objects.all()
    data = {
        "cuisines": CuisineSerializer(cuisines, many=True).data,
        "categories": CategorySerializer(categories, many=True).data,
        "metrics": MetricSerializer(metrics, many=True).data,
        "ingredients": IngredientSerializer(ingredients, many=True).data,
    }
    return Response(data)

@api_view(['GET'])
def getMetrics(request):
    try:
        metrics = Metric.objects.all()
        return Response(MetricSerializer(metrics, many=True).data)
    except:
        return Response({"message": "Metrics not found"}, status=404)

@api_view(['GET'])
def getIngredients(request):
    try:
        ingredients = Ingredient.objects.all()
        return Response(IngredientSerializer(ingredients, many=True).data)
    except:
        return Response({"message": "ingredients not found"}, status=404)

@api_view(['GET'])
def getCategories(request):
    try:
        categories = Category.objects.all()
        return Response(CategorySerializer(categories, many=True).data)
    except:
        return Response({"message": "ingredients not found"}, status=404)



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
