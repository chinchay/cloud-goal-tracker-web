from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello world. You are at the app index, app.views.index")

def tracker(request):
    return HttpResponse("Hello from app.views.tracker")

def about(request):
    text  = "The purpose of this Habit Tracker Web application is to help you to maintain good habits to reach your goals through gamification (turning your goals into a game)."
    return HttpResponse(text)

