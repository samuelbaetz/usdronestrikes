# Generated by Django 3.1.7 on 2021-03-08 19:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('strikesapi', '0002_auto_20210308_1921'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='strikesdata',
            name='unnamed_12',
        ),
    ]
