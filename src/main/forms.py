from django import forms
from django.forms import ModelForm
from .models import Task, TaskList
class CreateTask(ModelForm):
    class Meta():
        model = Task
        fields = ('title', 'text', 'parent_list', 'due')

class CreateList(ModelForm):
    class Meta():
        model = TaskList
        fields = ('name', 'color')
        widgets = {
            'name' : forms.TextInput({'placeholder':'Name'})
        }        