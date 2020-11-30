from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def timetable(request):
    return render(request, 'timetable.html')
