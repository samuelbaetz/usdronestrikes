# Generated by Django 3.1.7 on 2021-03-16 05:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('strikesapi', '0019_contributedata'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contributedata',
            name='geo_lat',
        ),
        migrations.RemoveField(
            model_name='contributedata',
            name='geo_lon',
        ),
        migrations.RemoveField(
            model_name='contributedata',
            name='total_avg',
        ),
    ]
