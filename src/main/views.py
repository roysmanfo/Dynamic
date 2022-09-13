from django.shortcuts import render
from django.http import HttpResponse
from .models import TaskList, Task
from django.contrib.auth.models import AnonymousUser
from .forms import CreateTask, CreateList
# Create your views here.

def home(request):
    if not isinstance(request.user, AnonymousUser):
        context = {
            'Lists':TaskList.objects.filter(user=request.user),
            'Tasks':Task.objects.filter(user=request.user),
            'ListsForm': CreateList,
            'TasksForm': CreateTask,
            }
        return render(request, 'dashboard.html', context)
    else:
        return render(request, 'landing.html')
