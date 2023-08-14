from django.db import models

class Category(models.Model):
    category_name = models.CharField(max_length=128)

    def __str__(self):
        return "%s: %s" % (self.id, self.category_name)

class Image(models.Model):
    path = models.CharField(max_length=128)

    def __str__(self):
        return "%s" % (self.path)
     

class Recipe(models.Model):
    title = models.CharField(max_length=128)
    author = models.CharField(max_length=128)
    url_slug = models.CharField(max_length=128, default="")
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.PROTECT, default="")
    cuisine = models.CharField(max_length=128, default="")
    serves = models.IntegerField()
    banner_image_id = models.ForeignKey(Image, on_delete=models.PROTECT, default="")
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return "%s: %s" % (self.id, self.title)

class RecipeSummary(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    summary = models.TextField()

    def __str__(self):
        return "%s: %s" % (self.id, self.summary)

class RecipeComponent(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    component_name = models.CharField(max_length=128)
    type = models.CharField(max_length=128, default="")

    def __str__(self):
        return "%s: %s" % (self.id, self.component_name)


class Ingredient(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return "%s: %s" % (self.id, self.name)

class RecipeIngredient(models.Model):
    recipe_component = models.ForeignKey(RecipeComponent, on_delete=models.CASCADE, default=None)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    amount = models.FloatField(default=0)
    metric = models.CharField(max_length=64, default="")

    def __str__(self):
        return "%s: %s" % (self.recipe_component, self.ingredient.name)   
    
class Instruction(models.Model):
    recipe_component = models.ForeignKey(RecipeComponent, on_delete=models.CASCADE, default=None)
    description = models.TextField(default="")
    step_id = models.IntegerField(default=None)
    is_image =  models.BooleanField(default=False)

    def __str__(self):
        return "%s: %s" % (self.id, self.description)

class Note(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    description = models.TextField(default="")
    step_id = models.IntegerField(default=None)
    is_image = models.BooleanField(default=False)

    def __str__(self):
        return "%s: %s" % (self.id, self.description)

