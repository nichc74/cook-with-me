# Generated by Django 4.2 on 2023-10-01 05:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0014_rename_metric_recipeingredient_metric_back_up_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipeingredient',
            name='metric',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='cookbook.metric'),
        ),
    ]
