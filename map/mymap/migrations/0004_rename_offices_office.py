# Generated by Django 4.1.7 on 2023-05-27 14:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mymap', '0003_offices'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Offices',
            new_name='Office',
        ),
    ]
