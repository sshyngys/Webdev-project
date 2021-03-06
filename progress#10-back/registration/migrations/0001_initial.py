# Generated by Django 3.2 on 2021-04-27 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default=None, max_length=200)),
                ('email', models.EmailField(default=None, max_length=200)),
                ('username', models.CharField(default=None, max_length=200)),
                ('password', models.CharField(default=None, max_length=200)),
                ('confpass', models.CharField(default=None, max_length=200)),
            ],
            options={
                'verbose_name': 'Registration',
                'verbose_name_plural': 'Registrations',
            },
        ),
    ]
