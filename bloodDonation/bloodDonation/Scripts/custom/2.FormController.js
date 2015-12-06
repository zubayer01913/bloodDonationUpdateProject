app.controller('FormController', function ($scope, $http, $window, angularService) {

    $scope.Name = '';
    $scope.IsUnderAge = false;
    $scope.edit = true;
    $scope.IsEmailExist = false;
    $scope.PasswordMismatch = false;
    var IsallInformationCorrect = true;



    function Clear() {
        $scope.Name = "",
         $scope.BloodGroup = $scope.BloodGroups[0],
         $scope.DateOfBirth = null,
         $scope.Phone = "",
         $scope.Email = "",
         $scope.LastDonationDate = null,
         $scope.Address = "",
         $scope.password1 = ""
        $scope.password2 = ""
    }



    $scope.BloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    $scope.BloodGroup = $scope.BloodGroups[0];

    //$http({ method: 'GET', url: 'Home/SignUp' + personIdFromQueryString }).success(function (data) {
    //    $scope.user = data;
    //});


    $scope.sendForm = function () {       
        var registrationModel = {
            Email:$scope.Email,
            Password:$scope.password1,
            ConfirmPassword:$scope.password1

        }
        var donarModel = {
            FullName:$scope.Name,
            BloodGrop:$scope.BloodGroup,
            DateOfBirth:$scope.DateOfBirth,
            PhoneNumber:$scope.Phone,
            Email:$scope.Email,
                LastDateOfDonation:$scope.LastDonationDate,
            PresentAddress:$scope.Address    


        }

        //var Age = angularService.CalculateAge($scope.DateOfBirth);
        //if (Age < 18) {
        //    $scope.IsUnderAge = true;
        //    return;
        //}
       
        //var email = $scope.Email;
        //var IsEmailAlreadyExist = angularService.IsEmailAlreadyExist(email);
        //IsEmailAlreadyExist.then(function (obj) {
        //    //$scope.IsEmailExist = obj.data;
        //    if (obj.data == "True") {
        //        $scope.IsEmailExist = true;
        //        //alert("Email Already exist")
        //        return;
        //    }
        //    else {
        //        angularService.AddDonar(Model);
        //        alert("Registration successfull")
        //        return $window.location.href = 'Index';
        //    }
        //}, function () {
        //    alert('Error in Email verification process');
        //});
        alert('ajaz will call now')

        $http({
            method: "post",
            url: "Register",
            data: JSON.stringify(registrationModel),
            dataType: "json"
        }).success(function (data, status, headers, config) {
            console.log('from success',data, status, headers, config);
        }).error(function (data, status, headers, config) {
            console.log('from failur',data, status, headers, config);
        });

        //$http({
        //    method: "post",
        //    url: "Blood/Create",
        //    data: JSON.stringify(donarModel),
        //    dataType: "json"
        //}).success(function (data, status, headers, config) {
        //    console.log('from success', data, status, headers, config);
        //}).error(function (data, status, headers, config) {
        //    console.log('from failur', data, status, headers, config);
        //});

    };

    // Date-Picker Js started


    $scope.validateAge = function () {
        var ageDifMs = Date.now() - $scope.DateOfBirth;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = Math.abs(ageDate.getUTCFullYear() - 1970);
        age<18 ? $scope.IsUnderAge=true
               : $scope.IsUnderAge=false;

    };

    $scope.emailValidation = function () {
        alert($scope.Email)
    }

    $scope.clear = function () {
        $scope.DateOfBirth = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $scope.status.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

    $scope.status = {
        opened: false
    };
    $scope.open1 = function ($event) {
        $scope.status.opened1 = true;
    };
    $scope.open2 = function ($event) {
        $scope.status.opened2 = true;
    };
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
      [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
      ];

    //$scope.getDayClass = function (date, mode) {
    //    if (mode === 'day') {
    //        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

    //        for (var i = 0; i < $scope.events.length; i++) {
    //            var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

    //            if (dayToCheck === currentDay) {
    //                return $scope.events[i].status;
    //            }
    //        }
    //    }

    //    return '';
    //};

    $scope.checkPasswordMismatch = function () {
        if ($scope.password1 != $scope.password2) 
            $scope.PasswordMismatch = true;
        else
             $scope.PasswordMismatch = false;
        
    }
});