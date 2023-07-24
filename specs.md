# Software Engineer Assessment Spec

## Detailed spec
Given a schema that represents “Farmer” entities with the following attribute: ` id, first_name, last_name, phone_number, age, address, crops `

``` 
Example: {3, “Adis”, “Musa”, “08123456789”, 44, “3, Anaygun str, Ibadan”, “maize, rice,
cassava”}
```

Implement a back-end with a SINGLE insertion endpoint and a SINGLE retrieval
endpoint that follows the following specifications:

A. The insertion endpoint should enable a client to create a new farmer object.

B. The retrieval endpoint should implement a filter functionality for the client to achieve the following:

1. Get only the needed attribute(s) of a farmer. For instance, if a client
wishes to get the first names of farmers, the endpoint SHOULD ONLY
return the first names and NO OTHER INFORMATION about the other
attributes. Likewise, if a client wishes only to get the last names and
phone numbers of farmers, the endpoint SHOULD ONLY return the last
names and phone numbers of farmers and NO OTHER INFORMATION
about the other attributes.

2. Filter for the exact matches of the values of the attribute(s) specified
in (1). For instance, if a client wishes to get the first names and phone
numbers of farmers, they SHOULD BE ALBE TO specify to only get the
records where the first names ARE “Titilayo”. This filter DOES NOT apply
to the address attribute.

3. If the client wishes to get the ages of farmers (among other attributes),
they SHOULD BE ABLE TO filter by a range OR by exact equality. For
instance, a client may wish to get farmers whose ages are between 20
and 50 OR are exactly 50.

4. If a client wishes to get the crops of farmers (among other attributes),
they should be able to specify AT LEAST one crop to narrow the result.

## Tools used
>+ __Server Side Framework:__ Node/Express
>+ __Database:__ MySQL
>+ __Version Control:__ Git
>+ __Linting Library:__ Eslint
>+ __Style Guide:__ Airbnb
>+ __Error Handling Library:__ Winston

## Attributes
| Filter Attribute | Attribute Type | Description       |
| ---------------- | -------------- | ----------------- |
| id               | number         | Unique. Required. |
| first_name       | string         | Required.         |
| last_name        | string         | Required.         |
| phone_number     | string         | Required.         |
| age              | number         | Required.         |
| address          | string         | Required.         |
| crops            | string         | Required.         |

## API Endpoints
```
POST    /api/v1/register                                                                    Create new farmer object
GET     /api/v1/farmers?filter_attr=ATTRIBUTE                                               Fetch farmers based on the filter attribute(s) provided
GET     /api/v1/farmers?filter_attr=ATTRIBUTE&attribute=ATTRIBUTE_VALUE                     Fetch farmers based on the filter attribute(s) and attribute value(s) provided
GET     /api/v1/farmers?filter_attr=ATTRIBUTE&filter_attr=age&age=ATTRIBUTE_VALUE           Fetch farmers based on the age filter attribute (among other attributes) provided
GET     /api/v1/farmers?filter_attr=ATTRIBUTE&filter_attr=crops&crops=ATTRIBUTE_VALUE       Fetch farmers based on the crops filter attribute (among other attributes) provided
```
