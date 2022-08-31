from re import template
from django.urls import path
from . import views
from django.contrib.auth.views import PasswordChangeView

app_name = 'forms'

urlpatterns = [
    path('logout/', views.UserLogoutView.as_view() ,name='logout'),
    path('login/', views.UserLoginView.as_view(), name='login'),    
    path('sign/', views.UserRegistrationView.as_view() ,name='register'),
    path('change_password/', views.PasswordChangeView.as_view() ,name='password_change'),
    path('change_password/done/', views.PasswordChangeDoneView.as_view() ,name='password_change_done'),
    path('password_changed/', views.password_changed ,name='password_changed'),
    path('reset_passord/<str:user_id>/', views.reset_password ,name='reset_passord'),
]