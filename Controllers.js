var oOrchidsApp = angular.module('OrchidsApp', []);

oOrchidsApp.controller('OrchidsCtl', ['$scope', '$http', '$log', function ($scope, $http, $log) {

    $scope.angularClass = "angular";
    $scope.OrchidsList = [];
    $scope.pageSize = 2;
    var iCurrentPage = -1;

    $scope.fnShowOrchids = function (direction) {

        iCurrentPage = iCurrentPage + direction;
        iCurrentPage = iCurrentPage >= 0 ? iCurrentPage : 0;
        
        //  TODO: Change this URL to point it to the OData RESTful service that you need:
        var sURL = "http://carmelwebapi.somee.com/WebAPI/OrchidsWebAPI/" +
            "?$skip=" +
            iCurrentPage * $scope.pageSize
            + "&$top=" + 
            $scope.pageSize;


        $http.get(sURL).success(function (response) {

            $scope.OrchidsList = response;
            $log.info("Data retrieval was successful!!!");

        },

         function (err) { $log.error(err) })
    }
}
]);
