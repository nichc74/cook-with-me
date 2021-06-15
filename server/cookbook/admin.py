from django.contrib import admin

from cookbook.models import *

admin.site.register(Recipe)
admin.site.register(Ingredient)
admin.site.register(RecipeIngredient)
admin.site.register(Image)
admin.site.register(Instruction)
admin.site.register(Note)
