# Generated by Django 3.1.7 on 2021-03-14 22:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('strikesapi', '0009_presidentdata'),
    ]

    operations = [
        migrations.CreateModel(
            name='Presidentsdata',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('president', models.TextField()),
                ('numofstrikes', models.IntegerField()),
                ('yearsinoffice', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Presidentdata',
        ),
    ]