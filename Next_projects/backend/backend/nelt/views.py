from django.shortcuts import render
from .models import Newsletter, Content
from .serializers import NewsletterSerializer, ContentSerializer
from rest_framework import viewsets


class NewsletterView(viewsets.ModelViewSet):
    serializer_class = NewsletterSerializer
    queryset = Newsletter.objects.all()

class ContentView(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    queryset = Content.objects.all()