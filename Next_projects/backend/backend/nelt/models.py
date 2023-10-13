from django.db import models

class Newsletter (models.Model):
    image = models.ImageField()
    title = models.CharField(max_length=255)
    createdAt = models.DateField()