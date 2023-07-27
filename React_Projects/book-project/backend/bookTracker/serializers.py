# Serializers file is meant to convert model instances to JSON so that the frontend can work with the received data

from rest_framework import serializers
from .models import Book

class BookSerializer (serializers.ModelSerializer):
    # the fields must be valid model names, but does not include all
    class Meta:
        model = Book
        fields = ('id', 'title', 'author')