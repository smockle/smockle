/*jshint browser: true, asi: true */
/*global angular: true, $http: true */

var NG_SMOCKLE = angular.module("NG_SMOCKLE", [])

NG_SMOCKLE.controller("feeds", ["$scope", "$http", function ($scope, $http) {
    "use strict";
    
    $http({
        url: "/home/feeds",
        method: "GET",
        headers: { "X-Requested-With": "XMLHttpRequest" }
    }).success(function (data, status, headers, config) {
        $scope.twitter = data.twitter
        $scope.stackoverflow = data.stackoverflow
        $scope.github = data.github
        $scope.instagram = data.instagram
    })
}])