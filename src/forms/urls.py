from re import template
from django.urls import path
from . import views

app_name = 'forms'

urlpatterns = [
    path('logout/', views.UserLogoutView.as_view() ,name='logout'),
    path('login/', views.UserLoginView.as_view(), name='login'),    
    path('sign/', views.UserRegistrationView.as_view() ,name='register'),
    path('change_password/', views.PasswordChangeView.as_view() ,name='password_change'),
    path('change_password/done/', views.PasswordChangeDoneView.as_view() ,name='password_change_done'),
    path('password_reset/', views.PasswordResetView.as_view() ,name='password_reset'),
    path("reset/<uidb64>/<token>/",views.PasswordResetConfirmView.as_view(),name="password_reset_confirm",),
    path("reset/done/",views.PasswordResetCompleteView.as_view(),name="password_reset_complete"),
]