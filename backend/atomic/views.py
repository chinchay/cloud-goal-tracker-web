from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .Database import Database
from time import sleep

import pandas as pd

def index(request):
    # return HttpResponse("Hello world. You are at the app index, app.views.index")
    return render(request, "base.html")

def tracker(request):
    return HttpResponse("Hello from app.views.tracker")

def about(request):
    text  = "This web app will help you with maintaining good habits through gamification (turning goals into games)."
    # return HttpResponse(text)
    return render(request, "atomic/about.html", {"text":text})

def api(request):
    # tableName = "atomic_table"
    # database = Database(tableName)
    # df = database.BuildPandas()
    # data = df.to_dict()

    ############################################################################
    # you will need to remove this part later
    ############################################################################
    data = {"date": {"0": "2023-05-01T00:00:00", "1": "2023-05-02T00:00:00", "2": "2023-05-30T00:00:00", "3": "2023-05-31T00:00:00", "4": "2023-06-01T00:00:00"}, "write_journal": {"0": "1", "1": "1", "2": "0", "3": "1", "4": "1"}, "read_scriptures": {"0": "1", "1": "1", "2": "1", "3": "0", "4": "1"}}
    df = pd.DataFrame(data)
    df["date"] = pd.to_datetime(df.date)
    ############################################################################

    # convert to the required format string
    key = "date"
    df[key] = df.date.dt.strftime("%Y/%m/%d")

    listHabit = df.drop([key], axis=1).columns.to_list()
    listRecord = []
    for habit in listHabit:
        df_habit = pd.DataFrame()
        df_habit[key] = df[key]
        df_habit["count"] = df[habit]
        dict_habit = df_habit.to_dict("records")
        listRecord.append(dict_habit)
    #
    data = {"listHabit":listHabit, "listRecord":listRecord}

    # print(pd.to_datetime(df.date, format='%Y%m%d'))


    sleep(2)

    return JsonResponse(data, safe=False)



