# Generated by Django 4.1.7 on 2023-05-28 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mymap', '0004_rename_offices_office'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='latitude',
            field=models.DecimalField(decimal_places=15, max_digits=18),
        ),
        migrations.AlterField(
            model_name='location',
            name='longitude',
            field=models.DecimalField(decimal_places=15, max_digits=18),
        ),
        migrations.AlterField(
            model_name='office',
            name='latitude',
            field=models.DecimalField(decimal_places=15, max_digits=18),
        ),
        migrations.AlterField(
            model_name='office',
            name='longitude',
            field=models.DecimalField(decimal_places=15, max_digits=18),
        ),
    ]