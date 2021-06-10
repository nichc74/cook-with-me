from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    total_time = models.IntegerField()
    meal_type = models.CharField(max_length=100)
    servings = models.IntegerField()

class Ingredient(models.Model):
    name = models.CharField(max_length=128)

class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.FloatField()

class Image(models.Model):
    path = models.CharField(max_length=128)
        
class Instruction(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    instr_order = models.IntegerField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE)

class Note(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)

