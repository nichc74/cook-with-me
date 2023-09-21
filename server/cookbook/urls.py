from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('recipes', views.getRecipes),
    path('adminRecipes', views.getAllRecipes),
    path('recipe/<id>/', views.getRecipe),
    path('postRecipe', views.postRecipe),
    path('metrics', views.getMetricsAndIngredients),
    path('updateRecipeStatus/<id>/', views.updateRecipeStatus),
]