# Indian Cities API (reconstructed)

##### This is a JSON API with full CRUD functionality that allows users to access a database of Indian cities as well as search all cities by district or state.

## Features:

###### You can either request an array of all cities or search by city, state or district using a query string. 

### Technologies Used

###### Express, Mongoose, Node, Mongodb, Javascript.

### URL endpoint for all cities:

###### /cities

## CRUD

### CREATE

#### POST Method

###### endpoint: /cities

### READ

#### GET Query Request:

###### endpoint: /cities/search

##### Example Requests:
###### By City: /cities/search?City=Ganganagar
###### Example Response:

```
{
  "_id": "5f218f90eac1922a081ccf1e",
    "City": "Ganganagar",
    "State": "Rajasthan",
    "District": "Ganganagar",
    "__v": 0
}

```

###### By State: /cities/search?State=Rajasthan

###### By District: /cities/search?District=Porbandar

### UPDATE 

#### PUT Method

###### endpoint: /cities/:id

##### Example Requests:
###### By City: /cities/5f218f90eac1922a081cc953

### DELETE 

#### DELETE Method

###### endpoint: /cities/:id

##### Example Requests:
###### By City: /cities/5f218f90eac1922a081cc953

#### Contribution Guidelines:

###### Should you identify any bugs or have any ideas for how to make code more scaleable (especially with regards to automating creation & importing of individual JSON files for each data entry), kindly submit an issue on this project’s GitHub repo.

##### Link to repo: https://github.com/AnthonyMaddox/sei38-project6
