from django.shortcuts import render
from django.http import HttpResponse
from .models import TaskList, Task
# Create your views here.

def home(request):
    context = {
        'Lists':TaskList.objects.filter(user=request.user),
        'Tasks':Task.objects.filter(user=request.user),
        }
    return render(request, 'index.html', context)