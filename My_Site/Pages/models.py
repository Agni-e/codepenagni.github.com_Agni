from django.db import models

# Create your models here.
class Pages(models.Model):
    title = models.CharField(max_length=100)
    permalink = models.CharField(max_length=12, unique=True)
    update_date = models.DateTimeField('Last Updated')
    bodytext=models.TextField('Pages content', blank=True)
    page_img = models.ImageField(upload_to='Pages/')
    page_order = models.IntegerField(default=0)

    def __str__(self):
        return self.title
    
class Contact(models.Model):
    Name=models.CharField(max_length=100)
    Email=models.EmailField()
    Subject=models.CharField(max_length=200)
    Message=models.TextField(max_length=500)   

    def _str_(self):
        return self.Name
    