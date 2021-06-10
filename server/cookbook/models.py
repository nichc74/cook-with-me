from django.db import models

# Create your models here.
class Recipe(models.Model):
    # id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    total_time = models.IntegerField()
    meal_type = models.CharField(max_length=100)
    servings = models.IntegerField()

    def __str__(self):
        return  "recipe_title: " + self.title  + "\n" +  "recipe_author: " + self.author + "\n" + "recipe_prep_time: " +  str(self.prep_time) + "\n" + "recipe_cook_time: " +  str(self.cook_time) + "\n" + "recipe_total_time: " +  str(self.total_time) + "\n" + "recipe_meal_type: " +  self.meal_type + "\n" + "recipe_servings: " +  str(self.servings) + "\n"

                


    

