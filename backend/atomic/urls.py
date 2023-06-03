from django.urls import path
from . import views

################################################################################
# Registering the app namespace...
# this will allow you to create dynamic Django hyperlinks in html files
# when using the django tag: {% url atomic:tracker ... %} for example.
app_name = "atomic"
################################################################################

urlpatterns = [
    path("", views.index, name="index"),
    path("tracker/", views.tracker, name="tracker"),
    path("about/", views.about, name="about")
]