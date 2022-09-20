from django import forms
from django.forms import ModelForm
from .models import Task, TaskList

class CreateTask(ModelForm):
    class Meta():
        model = Task
        fields = ('user','title', 'text', 'parent_list', 'due', 'color')
        widgets = {
            'user': forms.Select(),
            'title': forms.TextInput({'placeholder':'Title'}),
            'text' : forms.Textarea({'placeholder':'Notes'}),
            'due': forms.DateTimeInput({'type':'date'}),
            'color' : forms.Select({'id':'id_task_color'}),
        }

class CreateList(ModelForm):
    class Meta():
        model = TaskList
        fields = ('name', 'color', 'user')
        widgets = {
            'name' : forms.TextInput({'placeholder':'Name'}),
            'user': forms.Select(),
        }        