from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    # return HttpResponse("Hello world. You are at the app index, app.views.index")
    return render(request, "base.html")

def tracker(request):
    return HttpResponse("Hello from app.views.tracker")

def about(request):
    text  = "This web app will help you with maintaining good habits through gamification (turning goals into games)."
    # return HttpResponse(text)
    return render(request, "atomic/about.html", {"text":text})

