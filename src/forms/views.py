from re import template
from django.shortcuts import render
from django.views import generic
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.urls import reverse_lazy

# Create your views here.

class UserRegistrationView(generic.CreateView):
    form_class = UserCreationForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('home')


class UserLoginView(generic.CreateView):
    template_name = 'registration/login.html'
    success_url = reverse_lazy('home')

class UserLogoutView(generic.CreateView):
    template_name = 'registration/logged_out.html'

class PasswordChangeView(generic.CreateView):
    form_class = PasswordChangeForm
    template_name = 'registration/password_change.html'

class PasswordChangeDoneView(generic.CreateView):
    template_name = 'registration/password_change_done.html'

def password_changed(request):
    return render(request, 'password_change.html')

def reset_password(request, user_id):
    return render(request, 'reset_password.html')

# def sign_in(request):
#     return render(request, 'sign_in.html')