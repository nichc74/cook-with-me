# Generated by Django 4.2 on 2023-08-21 23:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0008_alter_image_path'),
    ]

    operations = [
        migrations.AlterField(
            model_name='instruction',
            name='image',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='cookbook.image'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='author',
            field=models.CharField(max_length=128, null=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='category',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.PROTECT, to='cookbook.category'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='image',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='cookbook.image'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='url_slug',
            field=models.CharField(default='', max_length=128, null=True),
        ),
    ]
