from rest_framework import viewsets
from quiz.api import serializers
from quiz import models


class QuizViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.QuizSerializer
    queryset = models.Questions.objects.all()