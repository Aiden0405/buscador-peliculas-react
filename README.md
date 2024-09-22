BuscadorPeliculas README

Overview
BuscadorPeliculas is a React application that allows users to search for movies using the The Movie Database (TMDB) API. This application demonstrates the use of React hooks, API integration, and state management.

Components
BuscadorPeliculas
The main component of the application, responsible for rendering the search form and displaying the search results.

Features

Search Form
Allows users to input a movie title and submit the form to search for movies
Uses the useState hook to store the search query and update it on input change
Uses the handleSubmit function to prevent the default form submission behavior and call the fetchPeliculas function

Movie List
Displays a list of movies matching the search query
Uses the map function to iterate over the peliculas state array and render a movie card for each item
Each movie card displays the movie title, poster image, and overview

API Integration
The Movie Database (TMDB) API
Uses the TMDB API to fetch movie data based on the search query
API key: (replace with your own API key)
API endpoint: https://api.themoviedb.org/3/search/movie

Development

Setting up the Project
Clone the repository using git clone <repository-url>
Install dependencies using npm install or yarn install
Create a new file called .env and add your TMDB API key as an environment variable: REACT_APP_API_KEY=your-api-key

Running the Application
Start the application using npm start or yarn start
Open the application in your web browser at http://localhost:3000

Understanding the Code
handleInputChange function
This function updates the busqueda state with the current input value
It is called whenever the user types something in the search input field

handleSubmit function
This function prevents the default form submission behavior and calls the fetchPeliculas function
It is called when the user submits the search form

fetchPeliculas function
This function fetches movie data from the TMDB API using the fetch API
It takes the search query as a parameter and appends it to the API endpoint URL
It sets the peliculas state with the fetched movie data

useState hook
This hook is used to store the search query and movie data in the component's state
It returns an array with the current state value and a function to update it

Troubleshooting
Common Issues
Make sure to replace the API key with your own in the .env file
Check the console for any error messages related to the API request or state updates

Authors
Aiden

License
This project is licensed under the MIT License. See the LICENSE file for details.

Let me know if you'd like me to add or modify anything!
