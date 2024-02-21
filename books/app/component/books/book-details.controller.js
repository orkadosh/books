// controllers/book-details.controller.js

app.controller('BookDetailsController', ['$scope','$sce','$http','$routeParams','BookService', function ($scope,$sce,$http, $routeParams, BookService) {
    debugger
    // var bookId = $routeParams.id;
     $scope.bookId= $routeParams.id;
    debugger
   //const bookDetails =$routeParams.bookData;
    // Fetch book details based on bookId
     // Use the list of books stored in the scope
     debugger
    //  var bookDetails = BookService.getBookDetails($scope.books, bookId);
    //  if (bookDetails) {
        debugger

          // Assuming bookDetails.bookId is a trusted value
        const url = 'https://books.google.co.il/books?id=' + $scope.bookId + '&dq=eq&hl=iw&source=gbs_api&redir_esc=y';

        getHtmlContent(url)
    .then(htmlContent => {
        debugger
        console.log('HTML Content:', htmlContent);
        // Now you can use or process the HTML content as needed
        debugger
        const trustedHtmlContent = $sce.trustAsHtml(htmlContent);

        $scope.trustedHtmlContent = trustedHtmlContent;
    });
        // Mark the URL as safe
       // book.volumeInfo?.infoLink
         // Successfully fetched book details
         //$scope.bookDetails = bookDetails;
    //  } else {
    //      // Handle case where book details are not found
    //      console.error('Book details not found for ID:', bookId);
    //  }

    function getHtmlContent(url) {
        return $http.get(url, { responseType: 'text' })
            .then(function (response) {
                // Return the HTML content
                return response.data;
            })
            .catch(function (error) {
                // Handle errors
                console.error('Error fetching HTML:', error);
                alert(error);
                throw error;
            });
    }
}]);
