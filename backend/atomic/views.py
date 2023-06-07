from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from .Database import Database
from time import sleep
import pandas as pd
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import json
import pandas as pd
from datetime import date

################################################################################
# As global variables:
# tableName = "atomic_table"
# database = Database(tableName)
# _df = database.BuildPandas()
# listHabit = _df.drop(["date"], axis=1).columns.to_list()
################################################################################

############################################################################
# you will need to remove this part later
############################################################################
data = {'date': {'0': '2023/05/06', '1': '2023/05/02', '2': '2023/06/06', '3': '2023/05/31', '4': '2023/06/01'}, 'Scriptures_Reading': {'0': '1', '1': '1', '2': '1', '3': '1', '4': '1'}, 'Exercising': {'0': '1', '1': '1', '2': '0', '3': '1', '4': '1'}, 'Journal_Writing': {'0': '1', '1': '1', '2': '1', '3': '0', '4': '1'}}
df = pd.DataFrame(data)
df["date"] = pd.to_datetime(df.date)
listHabit = df.drop(["date"], axis=1).columns.to_list()
############################################################################



def index(request):
    # return HttpResponse("Hello world. You are at the app index, app.views.index")
    return render(request, "base.html")

def tracker(request):
    return HttpResponse("Hello from app.views.tracker")

def about(request):
    text  = "This web app will help you with maintaining good habits through gamification (turning goals into games)."
    # return HttpResponse(text)
    return render(request, "atomic/about.html", {"text":text})

def getTodayPercentage(df, listHabit):
    todayString = pd.to_datetime("today").strftime("%Y/%m/%d")
    newDf = df[ df["date"] == todayString  ]
    if (len(newDf) != 0):
        todayCounts = df[ df["date"] == todayString  ].drop(["date"], axis=1).astype(int).sum(axis=1).tolist()[0]
        percentage  = 100 * todayCounts / len(listHabit)
    else:
        percentage = 0
    #
    return percentage

def api(request):
    ##### tableName = "atomic_table"
    ##### database = Database(tableName)
    # df = database.BuildPandas()
    # data = df.to_dict()

    ############################################################################
    # you will need to remove this part later
    ############################################################################
    # data = {'date': {'0': '2023/05/06', '1': '2023/05/02', '2': '2023/06/06', '3': '2023/05/31', '4': '2023/06/01'}, 'Scriptures_Reading': {'0': '1', '1': '1', '2': '1', '3': '1', '4': '1'}, 'Exercising': {'0': '1', '1': '1', '2': '0', '3': '1', '4': '1'}, 'Journal_Writing': {'0': '1', '1': '1', '2': '1', '3': '0', '4': '1'}}
    # df = pd.DataFrame(data)
    # df["date"] = pd.to_datetime(df.date)
    ############################################################################

    # # convert to the required format string
    # key = "date"
    # df[key] = df.date.dt.strftime("%Y/%m/%d")

    partitionKey = "date"
    # listHabit = df.drop([partitionKey], axis=1).columns.to_list()
    listRecord = []
    for habit in listHabit:
        df_habit = pd.DataFrame()
        df_habit[partitionKey] = df[partitionKey]
        df_habit["count"] = df[habit]
        dict_habit = df_habit.to_dict("records")
        listRecord.append(dict_habit)
        #
        
    #
    percentage = getTodayPercentage(df, listHabit)
    # percentage = 0
    data = {"listHabit":listHabit, "listRecord":listRecord, "percentage":percentage}

    # print(pd.to_datetime(df.date, format='%Y%m%d'))


    sleep(2)

    return JsonResponse(data, safe=False)

# @csrf_exempt
# @api_view(['GET', 'POST'])
@api_view( ['POST'] )
def updateDB(request):
    if (request.method == "POST"):
        jsonData = json.loads(request.body)
        habitNumber = jsonData["habitNumber"]
        print("habitNumber", habitNumber)
        print("listHabit[habitNumber]", listHabit[habitNumber])

        # todayString = pd.to_datetime("today").strftime("%Y/%m/%d")
        # todayString = pd.to_datetime("today").strftime("%Y-%m-%d")
        todayString = date.today().strftime("%Y/%m/%d")

        item = {
            "date"                 : todayString,
            listHabit[habitNumber] : 1,
        }


        
        # database.PutItem(item)

        ########################################################################
        # you will need to remove this part later
        ########################################################################
        print(pd.DataFrame(data))
        n = len(data["date"])
        if ( len( df[ df["date"] == todayString ]) == 0 ):
            data["date"][n] = todayString
            data[ listHabit[habitNumber] ][n] = 1
            print("again A:")
            print(pd.DataFrame(data))
        else:
            row = int( df[df["date"] == todayString].index[0]  )
            col = listHabit[habitNumber]

            df_slice = df.iloc[row].copy()
            df_slice[col] = 1
            df.iloc[row] = df_slice

            # df.iloc[row][col] = 1
            print("again B:")
            print(df)
        ########################################################################



        return JsonResponse( {"_success" : True} )
    else:
        return JsonResponse( {"_error" : "_request method got wrong"} )
    #
#

