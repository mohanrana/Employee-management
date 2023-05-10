
# Employee-management 

This project helps you to create REST APIs on the Node.Js Express server. This project has MVC architecture for creating REST APIs. This project has mainly three components Controller, services, and repository. The controller layer only takes care of API endpoints, the Service layer drives your business logic and the repository layer helps to interact with your database. Mongoosee ORM is used to interact with MongoDB.

MongoDB is used as a database for storing employee and respective departements.


## Installation

Clone the repository and set up MongoDB first. In this project, MongoDB docker-compose.yml is present.  You can setup docker on Ubuntu by simply running a shell script as mentioned below.

```bash
  # To setup docker and docker-compose on Ubuntu.

  cd wallet/mongodb
  bash setup-docker-ubuntu.sh

  # To Run MongoDB 
  docker-compose --compatibility up -d
```
Once your MongoDB will setup, you can run the wallet project and test APIs.

```bash
# To Run project.
cd Employee-management
npm i
npm run prod
```
You can check the logs once the project will start.
```bash
> test@1.0.0 prod
> node index.js

2023-05-10T11:40:41.110Z [service] [null] [Employee-management] [INFO] [index.js] App started on port 3000
2023-05-10T11:40:41.136Z [service] [null] [Employee-management] [INFO] [mongodb-connection.js] Mongoose default connection is open to mongodb://localhost:24000/employee?authsource=admin
```
<span style="color:red">NOTE: If MongoDB is already setup you can change the password inside 'wallet/config/default.json'</span>

https://github.com/mohanrana/Employee-management/blob/master/config/default.json

## API Reference

<span style="color:red">NOTE: Swagger has build for API documentation and API testing.</span>

http://localhost:3000/swagger


## Authors

- [@mohanrana](https://github.com/mohanrana)

