from django.db import models
from django.contrib.auth.models import User
import string, random

# Utilities
def create_id():
    pk = ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(24))
    return pk

class Colors():
    RED = 'Red'
    ORANGE = 'Orange'
    YELLOW = 'Yellow'
    GREEN = 'Green'
    BLUE = 'Blue'
    PURPLE = 'Purple'
    PINK = 'Pink'
    GRAY = 'Gray'

    COLORS = [(RED, RED),(ORANGE, ORANGE),(YELLOW, YELLOW),(GREEN, GREEN),
              (BLUE, BLUE),(PURPLE, PURPLE),(PINK, PINK),(GRAY, GRAY)]

# Actual models
class UserDetail(models.Model):
    """
    UserDetails is an extension of the django.contrib.auth.models.User model.\n
    Contains additional information for the User model
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField("profile picture")

class TaskList(models.Model):
    """
    A list is a group of tasks.
    This is how every Task will e organized.
    """

    id = models.CharField(max_length=30, default=create_id, unique=True, primary_key=True, editable=False)
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    color = models.CharField(max_length=20, choices=Colors.COLORS, blank=True, null=True, default='')

    def __str__(self):
        return self.name

class Task(models.Model):
    """ 
    All tasks will be represented by this class
    """
    id = models.CharField(max_length=30, default=create_id, unique=True, primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    text = models.TextField(max_length=250, blank=True, null=True)
    parent_list = models.ForeignKey(TaskList, on_delete=models.CASCADE, verbose_name='List')
    color = models.CharField(max_length=20, choices=Colors.COLORS, blank=True, null=True)
    creation_date = models.DateTimeField(auto_now=True, auto_created=True)
    updated_date = models.DateTimeField(auto_now=True)
    due = models.DateTimeField(default=None, blank=True, null=True)

    def __str__(self):
        return self.title