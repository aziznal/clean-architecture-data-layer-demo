# Clean Architecture Data Layer Setup

This is a sample project to show how to setup a data layer in a clean architecture project.

# Description

This is a simple app that lets the user browser available fruits and see their details. The user can also add a fruit.

# Core and Data

The relationship between core and data layers is always very simple: Core wants, Data gives.

How data manages to get data does NOT matter to core.

# Setting Up Core to Deal With Data Sources

Data will have to deal with many different sources. Each of those could have different models for how they accept and return data.

It's data's job tod deal with all that and return to core the data it needs in the type it needs. This is achieved in the following way:

## Setting Up Data Sources

Let's say we have been provided with an API and we know its models. When we create a data source, called say `RemoteDataSource`, we set it up to return the models we know the API will return, not core Entities. We call these models `Response` models

The same thing goes for the data sources inputs. We create models for the requests we need to make to the API, and we call them `Request` models.

## The Realtionship between Repository and Data Sources

Repo maps from data source using `Mappers` and returns the type that core needs

That's it!
