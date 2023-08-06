from django.contrib import admin

from cookbook.models import *

admin.site.register(Recipe)
admin.site.register(Category)
admin.site.register(RecipeSummary)
admin.site.register(RecipeComponent)
admin.site.register(Ingredient)
admin.site.register(RecipeIngredient)
admin.site.register(Image)
admin.site.register(Instruction)
admin.site.register(Note)
