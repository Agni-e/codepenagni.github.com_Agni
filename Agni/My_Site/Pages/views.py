from django.shortcuts import render, get_object_or_404
# from django.core.mail import send_mail, get_connection
from .models import Contact
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'index.html')


def Contact(request):
    if request.method=="POST":
        contact=Contact()
        name=request.POST.get('Name')
        email=request.POST.get('Email')
        subject=request.POST.get('Subject')
        message=request.POST.get('Message')
        contact.Name=name
        contact.Email=email
        contact.Subject=subject
        contact.Message=message
        Contact.save()
        return render, HttpResponse("<h1>Thank you. Your contact information and message was successfully submitted!</h1>")
    return render(request,'index.html')

# def Contact(request):
#     submitted=False
#     if request.method=="POST":
#         models=Contact(request.POST)
#         if models.is_valid( ):
#             cd=Contact.cleaned_data
#             con = get_connection ('django.core.mail.backends. console.EmailBackends')
#             send_mail(
#                 cd['subjects'],
#                 cd['message'],
#                 cd.get('email', 'noreplay@example.com'),
#                 ['sitowner@example.com'],
#                 connection=con )
#             return HttpResponse("<h1>Thank you. Your contact information and message was successfully submitted!</h1>")
#         else:
#             models=Contact()
#             if 'Submitted' in request.GET:
#                 submitted = True
#         return render(request, 'Contact.html', {'contact': Contact, 'submitted': submitted})