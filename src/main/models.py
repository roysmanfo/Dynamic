from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserDetails(models.Model):
    """
    UserDetails is an extension of the django.contrib.auth.models.User model.\n
    Contains additional information for the User model
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField("profile picture")
