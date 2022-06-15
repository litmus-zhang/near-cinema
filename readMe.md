Near Cinema

This is a decentralized platform where movie lovers buy ticket, the movies are uploaded by an admin(Contract owner), who set the properties of the movie.

The properties of each movie include;
- ID
- Title
- Year of Release
- Genre which the movie belong to.
- Movie Banner
- Rating
- Director of the movie
- Description of the movie
- Price of the Movie Ticket

As a user, You can buy the Movie Ticket on the home page.
As the you can upload a new movie to the list using the protected route of *("/admin")*

# Getting the list of All available movies
- near view dev.litmus.testnet  getMovies


# Adding a Movie to the Movies Page
-  near call dev.litmus.testnet setMovie '{"movie" :{"id":"4", "title": "Lord of the Flies", "year":"2023","genre": "Drama", "rating": "9", "director": "Olasunkanmi Will Smith", "description": "politics ya weyrey gan oo", "price": "100000030040000000000000", "image":"https://images.unsplash.com/photo-1542451313056-b7c8e626645f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"}}' --accountId=litmus.testnet

# Create a new buyer account to buy the new movie 
- near create-account movie.litmus.testnet --masterAccount litmus.testnet --initialBalance 10


# Buying a movie Ticket

- near call dev.litmus.testnet buyTicket '{"movieId": "4"}'
- near call dev.litmus.testnet buyTicket '{"movieId": "2"}' --depositYocto=10000000000000000000000000 --accountId=litmus.testnet


# Getting the list of All available movies once again
- near view dev.litmus.testnet  getMovies


# Link to Video Presentation
https://www.loom.com/share/884dce6a4fe24b97b80b94f00f502bba
