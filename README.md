Before we can run the project we need to add an environment variable
containing the connection string for mongo database

You can either install MongoDB on your machine or create a cluster:
* [MongoDB](https://www.mongodb.com/download-center/community)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

Create a file named `.env` in the root of the project and add the following
line of configuration to set a required environment variable named CONNECTION_STRING

```
CONNECTION_STRING = mongodb+srv://<user>:<password>@<host>/<databaseb>?retryWrites=true&w=majority
JWT_SECRET = <supersecret>
```

If you are using an Atlas cluster you can get your connection string from your settings dashboard
