from django.contrib import admin

from cookbook.models import *

admin.site.register(Recipe)
admin.site.register(Category)
admin.site.register(Cuisine)
admin.site.register(RecipeSummary)
admin.site.register(RecipeIngredientComponent)
admin.site.register(RecipeInstructionalComponent)
admin.site.register(Ingredient)
admin.site.register(RecipeIngredient)
admin.site.register(Image)
admin.site.register(Metric)
admin.site.register(Instruction)
admin.site.register(Note)
