from django.contrib import admin
from .models import Pages
from .models import Contact


class PageAdmin(admin.ModelAdmin):
    list_display = ('title', 'update_date')
    ordering= ('title')
    search_fields = ('title', 'content',)

# Register your models here.
admin.site.register(Pages)
admin.site.register(Contact)

