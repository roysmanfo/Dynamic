from django.shortcuts import render
from django.http import HttpResponseRedirect
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
        if request.method == 'POST':
            list_form = CreateList(request.POST)
            task_form = CreateTask(request.POST)

            if list_form.is_valid():
                list_form.save(commit=False)
                list_form.user = request.user
                list_form.save()
            
            if task_form.is_valid():
                task_form.save(commit=False)
                task_form.user = request.user
                task_form.save()

            if any([list_form.is_valid(), task_form.is_valid()]):
                return HttpResponseRedirect('/')

        return render(request, 'dashboard.html', context)
    else:
        return render(request, 'landing.html')
