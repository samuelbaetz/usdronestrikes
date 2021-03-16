from django.db import models
from django.db.models.expressions import F

# Create your models here.
class Strikesdata(models.Model):
    date = models.TextField(blank=True, null=True)
    village = models.TextField(blank=True, null=True)
    region = models.TextField(blank=True, null=True)
    country = models.TextField(blank=True, null=True)
    militants_avg = models.FloatField(blank=True, null=True)
    unknown_avg = models.FloatField(blank=True, null=True)
    civilians_avg = models.FloatField(blank=True, null=True)
    total_avg = models.FloatField(blank=True, null=True)
    president_name = models.TextField(blank=True, null=True)
    target_organization_name = models.TextField(blank=True, null=True)
    geo_lat = models.FloatField(blank=True, null=True)
    geo_lon = models.FloatField(blank=True, null=True)
    

    class Meta:
        db_table = 'strikesdata'


    def __str__(self):
        return self.date

class CommanderinChief(models.Model):
    president = models.TextField(null=False)
    numofstrikes = models.IntegerField(null=False)
    yearsinoffice = models.IntegerField()
    def __str__(self):
        return self.president

class StrikesByYear(models.Model):
    year = models.TextField(max_length=4)
    numofstrikes = models.IntegerField()
    def __str__(self):
        return self.year


class Contributedata(models.Model):
    date = models.TextField()
    village = models.TextField()
    region = models.TextField()
    country = models.TextField()
    militants_avg = models.FloatField(null=True)
    unknown_avg = models.FloatField(null=True)
    civilians_avg = models.FloatField(null=True)
    president_name = models.TextField()
    target_organization_name = models.TextField()
    
    def __str__(self):
        return self.date