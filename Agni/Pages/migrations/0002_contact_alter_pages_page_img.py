# Generated by Django 4.1.7 on 2023-03-15 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Email', models.EmailField(max_length=254)),
                ('Subject', models.CharField(max_length=200)),
                ('Message', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='pages',
            name='page_img',
            field=models.ImageField(upload_to='Pages/'),
        ),
    ]