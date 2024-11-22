# School System Backend

## Introduction

The **School System** backend provides a simple API for managing and retrieving school data. Built using **Node.js**, **Express.js**, and **MySQL** with **Prisma** ORM, this backend allows you to create and fetch school information based on geographical coordinates.

### Technologies Used:
- **Node.js**: A JavaScript runtime for building scalable server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework for building RESTful APIs.
- **MySQL**: A relational database management system for storing and querying school data.
- **Prisma ORM**: A modern database toolkit that simplifies database access and management with auto-generated queries and migrations.


# API Documentation

## Endpoints

### 1. Create School

- **Endpoint**: `/api/v1/school`
- **Method**: `POST`
- **Description**: This endpoint is used to create a new school record in the database.

### Request Body (JSON):

```json

{ 
  "name": "Vidyavardhin's college of Engineering and technology", 
  "address": "KT Road Vasai West", 
  "latitude": 19.2167, 
  "longitude": 72.9167 
}

```



### Response Data (JSON):

```json
{
    "statusCode": 201,
    "data": {
        "id": 6,
        "name": "Vidyavardhin's college of Engineering and technology",
        "address": " KT Road Vasai West ",
        "latitude": 41.9522,
        "longitude": 75.2332
    },
    "message": "school created successfully",
    "success": true
}

```


## 2. Get All Schools

**Endpoint**: `/api/v1/getAllSchools?latitude=19.4342&longitude=72.8500`  
**Method**: `GET`  
**Description**: This endpoint allows you to fetch a list of schools based on the provided latitude and longitude. The response will include the distance of each school from the provided coordinates.

### Request Parameters:

- **latitude**: Latitude of the user's location (required).
- **longitude**: Longitude of the user's location (required).

---

### Response Body (JSON):

```json
{
    "statusCode": 200,
    "data": [
        {
            "id": 3,
            "name": "St. Lukes High School",
            "address": "Bilal pada Nallaspara",
            "latitude": 19.4292,
            "longitude": 72.8465,
            "distance": 0.6661884259667112
        },
        {
            "id": 4,
            "name": "St. Lukes High School",
            "address": "Bilal pada Nallaspara",
            "latitude": 29.4292,
            "longitude": 80.8465,
            "distance": 1373.931436787821
        },
        {
            "id": 6,
            "name": "Vidyavardhin's college of Engineering and technology",
            "address": " KT Road Vasai West ",
            "latitude": 41.9522,
            "longitude": 75.2332,
            "distance": 2513.959387814889
        },
        {
            "id": 5,
            "name": "St. Lukes High School",
            "address": "Bilal pada Nallaspara",
            "latitude": 31.9522,
            "longitude": 35.2332,
            "distance": 3993.587889455592
        }
    ],
    "message": "All schools found Successfully",
    "success": true
}

```

### Notes:

  -  Latitude and Longitude: These are required parameters and must be provided in the query string.

    
  -  Distance: The distance field in the response indicates the distance (in kilometers) from the provided latitude and longitude to each school.










