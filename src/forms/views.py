from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'login.html')

def logout(request):
    return render(request, 'logout.html')

def password_change(request, user_id):
    return render(request, 'password_change.html')

def password_changed(request):
    return render(request, 'password_change.html')

def reset_password(request, user_id):
    return render(request, 'reset_password.html')

def sign_in(request):
    return render(request, 'sign_in.html')