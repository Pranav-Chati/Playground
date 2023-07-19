from django.db import models

# Create your models here.
class Book (models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    author = models.CharField(max_length=120)
    toRead = models.BooleanField(default=True)
    activelyReading = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)