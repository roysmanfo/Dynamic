from django.urls import path, include
from . import views

app_name = 'forms'

urlpatterns = [
    path('login/', views.login ,name='login'),
    path('logout/', views.logout ,name='logout'),
    path('sign/', views.sign_in ,name='sign_in'),
    path('change_password/<str:user_id>/', views.password_change ,name='password_change'),
    path('password_changed/', views.password_changed ,name='password_changed'),
    path('reset_passord/<str:user_id>/', views.reset_password ,name='reset_passord'),
]