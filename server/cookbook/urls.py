from django.urls import path
from . import views
from django.conf import settings

pre_api_path = 'api/v1/'

urlpatterns = [
    path(f'{pre_api_path}recipes', views.getRecipes),
    path(f'{pre_api_path}adminRecipes', views.getAllRecipes),
    path(f'{pre_api_path}recipe/<id>/', views.getRecipe),
    path(f'{pre_api_path}postRecipe', views.postRecipe),
    path(f'{pre_api_path}metrics', views.getMetrics),
    path(f'{pre_api_path}presets', views.getFormPresets),
    path(f'{pre_api_path}ingredients', views.getIngredients),
    path(f'{pre_api_path}categories', views.getCategories),
    path(f'{pre_api_path}updateRecipeStatus/<id>/', views.updateRecipeStatus),
]