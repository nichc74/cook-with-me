from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('recipes', views.getRecipes),
    path('adminRecipes', views.getAllRecipes),
    path('recipe/<id>/', views.getRecipe),
    path('postRecipe', views.postRecipe),
    path('metrics', views.getMetrics),
    path('presets', views.getFormPresets),
    path('ingredients', views.getIngredients),
    path('categories', views.getCategories),
    path('updateRecipeStatus/<id>/', views.updateRecipeStatus),

]