// controllers/book-details.controller.js

app.controller('BookDetailsController', ['$scope','$sce','$http','$routeParams','BookService', function ($scope,$sce,$http, $routeParams, BookService) {
    
     $scope.bookId= $routeParams.id;
        const url = 'https://books.google.co.il/books?id=' + $scope.bookId + '&dq=eq&hl=iw&source=gbs_api&redir_esc=y';

        getHtmlContent(url)
    .then(htmlContent => {
        
        console.log('HTML Content:', htmlContent);
        // Now you can use or process the HTML content as needed
        
        const trustedHtmlContent = $sce.trustAsHtml(htmlContent);
        $scope.trustedHtmlContent = trustedHtmlContent;
    });
     

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
