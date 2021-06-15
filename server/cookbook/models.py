from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    total_time = models.IntegerField()
    meal_type = models.CharField(max_length=100)
    servings = models.IntegerField()

    def __str__(self):
        return "%s: %s" % (self.id, self.title)

class Ingredient(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return "%s: %s" % (self.id, self.name)

class RecipeIngredient(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.FloatField()

    def __str__(self):
        return "%s: %s" % (self.recipe.title, self.ingredient.name)

class Image(models.Model):
    path = models.CharField(max_length=128)

    def __str__(self):
        return "%s" % (self.path)
        
class Instruction(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)
    instr_order = models.IntegerField()
    image = models.ForeignKey(Image, on_delete=models.CASCADE)

    def __str__(self):
        return "%s: %s" % (self.id, self.description)

class Note(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)

    def __str__(self):
        return "%s: %s" % (self.id, self.description)

