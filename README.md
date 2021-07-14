# Google Books API Consumer

The main objective of this project is consume "Google Books API". This API let me implement Google Books features like: 

- Search and browse through the list of books that match a given query.
- View information about a book, including metadata, availability and price, links to the preview page.
- Manage your own bookshelves.

Also, to complement this project I'm using "Youtube API" that gives links to implement youtube videos directly in the project.

## Before you start

### Dependencies

These are the dependencies used in this project:

1. **Material-UI:** To create and manage style of application
2. **axios:** To abstract the HTTP requests in API
3. **react-dom:** To create SPA navigation
4. **slick-carousel:** To create the carousel of home page

### Environment variables

In this project I'm using one environment variable named "REACT_APP_API_YOUTUBE". Create a file named ".env" with this variable to run project. The value of this variable must be generated in [Google Developers Portal](https://cloud.google.com/docs/authentication/api-keys?visit_id=637618613380047962-2768321852&rd=1).

## Command lines the run project

In the project directory, you can run:

1. `npm install`
2. `npm start`

## :warning: Important warnings

1. As this project was made for a Front-End job position, I opted to use the limited hours to develop the features and don't implemented responsive logic. So use a desktop to build and test application.
2. If you're using "adblock". make sure to disable it before running the application. Keep it able will show errors in console because the Youtube videos implemented.
