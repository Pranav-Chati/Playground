# Generated by Django 4.2.3 on 2023-07-16 05:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bookTracker', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Books',
            new_name='Book',
        ),
    ]