# IDEA BEHIND THE APP
Using customer location json file and plantation projects json file display three closest projects to customer location. Also allows user to search for customer location.

# FRAMEWORK + LANGUAGE USED
REACT.JS + Typescript

# INTRODUCTION TO THE CODEBASE STRUCTURE
A very modular folder structure has been used. The structure is as follows

1) /src/components - Holds all reusable components which are organised based on the features they provide.
2) /src/pages - This folder contains the different pages of this app
3) /src/tests - Holds all the react tests created using jest 
4) /src/utils - Holds util functions , type definitions, enums etc
4) /src/helpers - Holds the helper functions


# IMPORTANT DECISIONS TAKEN TO IMPLEMENT THIS APP
1) React Context is used to store the three closest projects based on customer location. 
2) Three unqiue project names are displayed since there are duplicate project names in the plantation projects json file.

# WEB APP 
The app has been deployed on vercel and can be tested using this following link https://planted-tech-challenge.vercel.app/
