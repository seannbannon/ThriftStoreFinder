# ThriftStoreFinder
**Project 1**

STRAIGHT VINTAGE
This application is a dynamic platform, designed to provide the user with the nearest thrift stores based on the users search criteria, as well as providing a Chuck Norris jokes- which will give the user a jovial experience, while fulfilling their need of finding the best thrift stores in the area. 

**Deployed Application**
Straight Vintage App! 
https://seannbannon.github.io/StraightVintage/




**Motivation:**
Our original motivation was to find Local Thrift Stores, comic book stores, and baseball card stores; allowing collectors and sellers of all vintage items to have a "one search app" where they could find all the stores they need, either locally, or remotely, allowing them to plan for a future trip. However, after some hurdles, we had to pivot and decided that an app that that supplies the nearest thrift stores as well as a raunchy Chuck Norris joke is actually a much more entertaining app anyway.

**Screenshots:**
Landing Page
<img src= "Screen Shot 2021-03-22 at 5.23.30 PM.png" width="600">

Results, example 1
<img src ="Screen Shot 2021-03-22 at 5.24.06 PM.png" width="600">

Results, example 2
<img src = "Screen Shot 2021-03-22 at 5.26.57 PM.png" width = "600">

**Features:**
The StraightVintage App allows users to search for thrift stores anywhere in the world, all while recieving a humorous Chuck Norris joke. The app displays a map- and pinpoints where these stores are located, allowing the user to trace their projected path along where they would like to go shopping, all while laughing merrily at silly Chuck Norris jokes. 

**Code Notes:**
Most of Straight Vintage’s functionality was made with Bootstrap Javascript and jQuery, the Google Places API, a Chuck Norris API and built-in browser functions.

The user types their desired location in which to find thrift stores, a random Chuck Norris joke fires and is displayed on the page from a command in the Chuck Norris API. The location address is then put through the Google Places API and the local thrift stores, along with their name, address, and rating are displayed along with a pinpoint on the map indicating where they are located. 

The future design of this application has a lot of options. Adding different features, such as: finding charities, adding comic book stores and antique stores are all possibilities, which would give the user the "one stop" application we had intended to create out of the gate. 



**Retrospective**

Challenges:

Our biggest challenge was communication. Being our first group assignment, there were a lot of things we didn't fully understand about how to function as a cohesive group. This lack of communication had a myriad of different effects. From the beginning, we had intended to use the Google Maps and the Yelp API. As we continued down the path- we found that these were not the best fit for our project. After being shown the Picnic application, we decided to use the same APIS as their project, as it's mission was similar to ours(Foursquare and Geoloaction). Over the next couple days, we were each working on our separate assignments, with little communication between group members. This caused some overlap in work, which caused some issues as well as unnecessary extra work. We eventually met again and had changed our APIs to Google Places, which gave us the information we would have had from both the Foursquare and the Geolocation app. At this point we encountered a problem which vexed us for hours-- the location information from one user was being given to all users as their location, which not only made our application basically useless, but also raised some privacy concerns. Another challenge with the Javascript was with the Google Maps API map structure. One issue, was that it was only giving us one result at a time, and the documentation didn't seem to provide a whole lot of information on how to quell this. This caused another pivot where we attempted to implement an API which would tell us if the given thrift stores were not-for-profit - allowing another avenue of uses for our app. However, nearing the deadline, we had to basically abandon that idea and use a simpler API which would meet the two API criteria provided in the directions for the assignment. From here, we chose the Chuck Norris API. With better group communication, we could have streamlined our project and probably made it go smoother, with less changes in ideas. 





Successes:


As a group, our team did have their successes. We we able to come up with a solution to every problem we encountered. We were adaptable and determined as a whole. We were able to outline our work and get done what needed to be done. We implemented new features and styles as we went. The query function we used to search for the stores allowed us to search for any type of store we wanted, basically turning it into its own google search from within the code. Google documentation was good at setting a marker, and thanks to MDN, we were able to piece together how to make a bubble pop up, containing the information about the stores. 

**API Reference**
This application uses the Google Places API to render the results based on the user location preferences; and the Chuck Norris API to render hilarious jokes for optimum entertainment value. 

**Credits**
This app was made possible with the use of jQuery, Bootstrap, Google Places, the Chuck Norris API, as well as the creators: Sean Bannon, Brian Sales, Cole Hillestad and Devante Hampton. 


[Brian Sales](https://github.com/BrianSales)
[Cole Hillestad](https://github.com/Chillestad)
[Sean Bannon](https://github.com/seannbannon)
