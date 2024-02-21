// login.controller.js
app.controller('LoginController', function ($scope, $location) {
        $scope.username = 'user';
        $scope.password = 'password';

        $scope.login = function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Add your login logic here (fake login for demonstration)
            if ($scope.username === 'user' && $scope.password === 'password') {
                //alert('Login successful!');
                
                // Redirect to the "books" component or any other route
                $location.path('/books');
            } else {
            //    alert('Invalid credentials. Please try again.');
            }
        };
    });
