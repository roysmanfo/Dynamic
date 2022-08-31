from re import template
from django.urls import path
from . import views

app_name = 'forms'

urlpatterns = [
    path('logout/', views.LogoutView.as_view() ,name='logout'),
    path('login/', views.UserLoginView.as_view(), name='login'),    
    path('sign/', views.UserRegistrationView.as_view() ,name='register'),
    path('change_password/<str:user_id>/', views.password_change ,name='password_change'),
    path('password_changed/', views.password_changed ,name='password_changed'),
    path('reset_passord/<str:user_id>/', views.reset_password ,name='reset_passord'),
]