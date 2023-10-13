from .models import Newsletter, Content
from rest_framework import serializers


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = ("id", "title", "email")


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ("id", "image", "title", "createdAt", "newsletter")
