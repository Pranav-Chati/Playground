from django.db import models


class Newsletter(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)


class Content(models.Model):
    newsletter = models.ForeignKey(Newsletter, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    createdAt = models.DateField(blank=True, null=True)
