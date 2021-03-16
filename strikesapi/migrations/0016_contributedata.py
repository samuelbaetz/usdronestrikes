# Generated by Django 3.1.7 on 2021-03-16 00:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('strikesapi', '0015_strikesbyyear'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contributedata',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.TextField(blank=True, null=True)),
                ('village', models.TextField(blank=True, null=True)),
                ('region', models.TextField(blank=True, null=True)),
                ('country', models.TextField(blank=True, null=True)),
                ('militants_avg', models.FloatField(blank=True, null=True)),
                ('unknown_avg', models.FloatField(blank=True, null=True)),
                ('civilians_avg', models.FloatField(blank=True, null=True)),
                ('total_avg', models.FloatField(blank=True, null=True)),
                ('president_name', models.TextField(blank=True, null=True)),
                ('target_organization_name', models.TextField(blank=True, null=True)),
                ('geo_lat', models.FloatField(blank=True, null=True)),
                ('geo_lon', models.FloatField(blank=True, null=True)),
            ],
        ),
    ]
