from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('recipes', views.getRecipes),
    path('postRecipe/', views.postRecipe),
]