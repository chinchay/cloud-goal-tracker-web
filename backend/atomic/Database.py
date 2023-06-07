import boto3
import pandas as pd

class Database:
    """
    The Database class retrieves and updates a table in the cloud database. It
    checks for local DynamoDB AWS credentials through the use of the "boto3" 
    package.
    """
    def __init__(self, tableName):
        """
        Makes a connection with the cloud database

        Parameters
        ----------
        tableName : string
            Name of the table in the cloud database
        """
        self._table = self._ConnectWithTable(tableName)
    #

    def _ConnectWithTable(self, tableName):
        """
        The connection is performed using the "boto3" package which will
        automatically check for local credentials

        Parameters
        ----------
        tableName : string
            Name of the table in the cloud database

        Returns
        -------
        table
            A connection to the table 
        """
        dynamodb = boto3.resource("dynamodb", region_name="us-east-2")
        table = dynamodb.Table(tableName)
        return table
    #

    def _Retrieve(self):
        """
        Uses a connection to scan for the content

        Returns
        -------
        response (dictionary)
            A Python dictionary with all information and elements to rebuild
            locally the table in the cloud database
        """
        # dynamodb = boto3.client("dynamodb", region_name="us-east-2")
        # self.response = dynamodb.scan(TableName="sample_table_1")

        response = self._table.scan()
        return response
    #

    def BuildPandas(self):
        """
        Uses a dictionary to build a Pandas Dataframe

        Returns
        -------
        df (pandas dataframe)
            The dataframe contains all columns and rows from the cloud database
        """
        # list_date = []
        # list_read_scriptures = []
        # list_wrote_journal = []
        # for i in range(4):
        #     date = self.response["Items"][i]["date"]["S"]
        #     read_scriptures = self.response["Items"][i]["read_scriptures"]["BOOL"]
        #     wrote_journal = self.response["Items"][i]["wrote_journal"]["BOOL"]
        #     # print(date, read_scriptures, wrote_journal)
        #     list_date.append(date)
        #     list_read_scriptures.append(read_scriptures)
        #     list_wrote_journal.append(wrote_journal)
        # #
        # df = pd.DataFrame( list(zip( list_date, list_read_scriptures, list_wrote_journal )), columns=["date", "read_scriptures", "wrote_journal"] )
        # return df
        #
        response = self._Retrieve()

        print("response['Items']: ")
        print(response['Items'])

        df = pd.DataFrame( response['Items'] )

        partitionKey = "date"

        df[partitionKey] = pd.to_datetime(df.date)
        df = df.sort_values(by=[partitionKey]).reset_index(drop=True)

        # convert to the required format string for calendar chart in frontend
        df[partitionKey] = df.date.dt.strftime("%Y/%m/%d")

        df.fillna(0, inplace=True)

        # df.replace("True", True,  inplace=True)
        # df.replace("False", False, inplace=True)

        return df
    #

    def PutItem(self, item):
        """
        Use "boto3" commands to add an item into the remote database

        Parameters
        ----------
        item : A Python dictionary in the following format:
        
        `item = {
        "date"            : "2023-04-11",
        "read_scriptures" : True,
        "wrote_journal"   : False
        }`
        """

        response = self._table.put_item(Item=item)
        if response["ResponseMetadata"]["HTTPStatusCode"] == 200:
            print("put item OK")
        #
    #

    def DeleteItem(self, columnName, primaryKey):
        """
        This method will delete a row from the remote database

        Parameters
        ----------
        columnName : string
            A column name in the database
        primaryKey : string
            A row in the database
        """
        key = {columnName: primaryKey}
        response = self._table.delete_item(Key=key)
        if response["ResponseMetadata"]["HTTPStatusCode"] == 200:
            print("delete item OK")
        #        
    #
#
