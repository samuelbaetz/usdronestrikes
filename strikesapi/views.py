from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StrikeSerializer, PresidentSerializer, YearSerializer,ContribSerializer
from .models import Strikesdata, CommanderinChief, StrikesByYear,Contributedata

class StrikeViewSet(viewsets.ModelViewSet):
    queryset = Strikesdata.objects.all().order_by('date')
    serializer_class = StrikeSerializer

class PresidentViewSet(viewsets.ModelViewSet):
    queryset = CommanderinChief.objects.all().order_by('president')
    serializer_class = PresidentSerializer
class YearViewSet(viewsets.ModelViewSet):
    queryset = StrikesByYear.objects.all().order_by('year')
    serializer_class = YearSerializer
class ContribViewSet(viewsets.ModelViewSet):
    queryset = Contributedata.objects.all().order_by('date')
    serializer_class = ContribSerializer

