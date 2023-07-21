from django.db import models

# Create your models here.
class Todo (models.Model):
    title = models.CharField(max_length=256)
    description = models.TextField(blank=True, null=True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title
