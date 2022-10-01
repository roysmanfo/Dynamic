from django.views import generic
from django.contrib.auth import forms
from django.urls import reverse_lazy

# Create your views here.

class UserRegistrationView(generic.CreateView):
    form_class = forms.UserCreationForm
    template_name = 'registration/register.html'
    success_url = reverse_lazy('home')


class UserLoginView(generic.FormView):
    form_class = forms.AuthenticationForm
    template_name = 'registration/login.html'
    success_url = reverse_lazy('home')

class UserLogoutView(generic.CreateView):
    template_name = 'registration/logged_out.html'

class PasswordChangeView(generic.CreateView):
    form_class = forms.PasswordChangeForm
    template_name = 'registration/password_change.html'

class PasswordChangeDoneView(generic.CreateView):
    template_name = 'registration/password_change_done.html'

class PasswordResetView(generic.CreateView):
    form_class = forms.PasswordResetForm
    template_name = 'registration/password_reset_form.html'

class PasswordResetDoneView(generic.CreateView):
    template_name = 'registration/password_reset_done.html'

class PasswordResetConfirmView(generic.CreateView):
    form_class = forms.SetPasswordForm
    post_reset_login = False
    post_reset_login_backend = None
    reset_url_token = "set-password"
    success_url = reverse_lazy("password_reset_complete")
    template_name = 'registration/password_reset_confirm.html'

class PasswordResetCompleteView(generic.CreateView):
    template_name = 'registration/password_reset_complete.html'