# Generated by Django 4.2 on 2023-10-05 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0017_recipe_total_time_alter_recipeingredient_amount'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cuisine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=128)),
            ],
        ),
    ]
