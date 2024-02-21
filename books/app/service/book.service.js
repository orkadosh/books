// services/book.service.js

app.service('BookService', ['$http', function ($http) {
    
    let books = [];
    this.getBooksList = function (params) {
        
        return $http.get('https://www.googleapis.com/books/v1/volumes',{ params: params } )
            .then(function (response) {
                var data = response.data;
                books = data;
                return {
                    items: data.items || [],
                    totalItems: data.totalItems || 0
                };
            });
    };
 
    // this.getBookDetails = function (books, bookId) {
    //     
    //     // Find the book with the specified ID in the already fetched list
    //     var book = books.find(function (item) {
    //         return item.id === bookId;
    //     });
    //     // Return the book details or null if not found
    //     return book || null;
    // };
    this.getBookDetails = function (bookId) {
        
        // Find the book with the specified ID in the already fetched list
        var book = books.items.find(function (item) {
            return item.id === bookId;
        });
        return book || null;
    //    if(book&& book.volumeInfo?.infoLink){
    //     const config = {
    //         headers: {
    //           "Access-Control-Allow-Origin": "*",
    //           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //         }
    //       };
    //       return $http.get(book.volumeInfo.infoLink,config)
    //       .then(function (response) {
    //           
    //           var data = response.data;
    //           return {
    //               items: data.items || [],
    //               totalItems: data.totalItems || 0
    //           };
    //       });
    //    }
    //     // Return the book details or null if not found
    //     return  null;
    };
}]);
