// app/app.module.js
var app=angular.module('myApp',['ngRoute','ui.bootstrap']);
// app.routes.js


app.config(function ($routeProvider) {
        
        $routeProvider
            .when('/login', {
                templateUrl: './app/component/login/login.component.html',
                controller: 'LoginController'
            })
            .when('/books', {
                templateUrl: './app/component/books/books.component.html',
                controller: 'BooksController'
            })
            .when('/books/:id', {
                templateUrl: './app/component/books/book-details.component.html',
                controller: 'BookDetailsController',
                // resolve: {
                //     bookData: ['$route', 'BookService', function ($route, BookService) {
                //         // Accessing route parameters
                //         var bookId = $route.current.params.id;
    
                //         // Using BookService to fetch book details
                //         return BookService.getBookDetails(bookId);
                //     }]
                // }
            })
            .when('/favorites', {
                templateUrl: './app/component/favorites/favorites.component.html',
                controller: 'FavoritesController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });