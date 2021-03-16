from rest_framework import serializers
from .models import CommanderinChief, Strikesdata, StrikesByYear, Contributedata

class StrikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Strikesdata
        fields = ('date','village', 'region', 'country', 'militants_avg', 'unknown_avg', 'civilians_avg', 'total_avg', 'president_name', 'target_organization_name', 'geo_lat', 'geo_lon')

class PresidentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CommanderinChief
        fields = ('president', 'numofstrikes', 'yearsinoffice')

class YearSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StrikesByYear
        fields = ('year', 'numofstrikes')

class ContribSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contributedata
        fields = ('date','village', 'region', 'country', 'militants_avg', 'unknown_avg', 'civilians_avg','president_name', 'target_organization_name')
