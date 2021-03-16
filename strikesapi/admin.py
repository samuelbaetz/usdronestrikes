from django.contrib import admin

# Register your models here.
from .models import Strikesdata, CommanderinChief,StrikesByYear, Contributedata

admin.site.site_header = "Strikes"
admin.site.register(Strikesdata)
admin.site.register(CommanderinChief)
admin.site.register(StrikesByYear)
admin.site.register(Contributedata)