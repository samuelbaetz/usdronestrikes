# Generated by Django 3.1.7 on 2021-03-14 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('strikesapi', '0004_auto_20210311_1926'),
    ]

    operations = [
        migrations.CreateModel(
            name='Presdata',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('president', models.TextField()),
                ('numofstrikes', models.IntegerField()),
            ],
        ),
    ]