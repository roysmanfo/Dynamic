from django.contrib import admin
from .models import UserDetail, TaskList, Task
# Register your models here.
admin.site.register(UserDetail)
admin.site.register(TaskList)
admin.site.register(Task)