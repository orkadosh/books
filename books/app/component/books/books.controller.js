// books.controller.js
app.controller('BooksController', ['$scope','BookService','$location', function ($scope, BookService, $location) {
        $scope.books = [];
        $scope.query = '';
        $scope.currentPage = 1;
        $scope.totalItems = 0;
        $scope.itemsPerPage = 10;

        $scope.searchBooks = function () {
            
            // Fetch books from Google Books API based on the search query
            const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
            const params = {
                q: $scope.query,
                startIndex: ($scope.currentPage - 1) * $scope.itemsPerPage,
                maxResults: $scope.itemsPerPage
            };

            BookService.getBooksList(params)
            .then(function (result) {
                
                // Store the list of books and totalItems in the scope
                $scope.books = result.items;
                $scope.totalItems = result.totalItems;
            })
            .catch(function (error) {
                // Handle error, e.g., log it or show an error message
                console.error('Error fetching books list:', error);
            });



            // $http.get(apiUrl, { params: params })
            //     .then(function (response) {
            //         
            //         $scope.books = response.data.items || [];
            //         $scope.totalItems = response.data.totalItems || 0;
            //     })
            //     .catch(function (error) {
            //         console.error('Error fetching books:', error);
            //     });
        };

        $scope.showMoreDetails = function (book) {
            
            // Implement logic to show more details of the selected book
            //alert('Showing more details for: ' + book.volumeInfo.title);
            $location.path('/books/' + book.id);

        };

        $scope.toggleFavorite = function (book) {
            // Implement logic to add/remove the book from favorites
            //alert('Toggling favorite for: ' + book.volumeInfo.title);
        };

        $scope.pageChanged = function (event) {
            
            // Fetch books for the new page
            $scope.searchBooks();
        };

        // Initial search for books
       // $scope.searchBooks();
    }]);
