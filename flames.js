  var app = angular.module('App', []);
        app.controller('appCtrl', function ($scope) {
            $scope.findR = function () {
                var i, j, k, l, flag = 0, count = 0, v, n, temp;
                var regex = /[a-zA-Z]+/;
                if (regex.test($scope.a) && regex.test($scope.b)) {
                    var n1 = $scope.a.split(''), n2 = $scope.b.split('');
                    for (i = 0; i < n1.length; i++) {
                        for (j = 0; j < n2.length; j++) {
                            if (n1[i] == n2[j]) {
                                temp = n1[i];
                                flag = 1;
                            }
                        }
                        if (flag == 1) {
                            for (k = 0; k < n1.length; k++) {
                                if (temp == n1[k])
                                    n1[k] = null;
                            }
                            for (l = 0; l < n2.length; l++) {
                                if (temp == n2[l])
                                    n2[l] = null;
                            }
                        }
                        flag = 0;
                    }
                    for (v = 0; v < n1.length; v++) {
                        if (n1[v] != null)
                            count++;
                    }
                    for (v = 0; v < n2.length; v++) {
                        if (n2[v] != null)
                            count++;
                    }
                   // $scope.rel = count;
                    switch (count) {
                        case 0: $scope.rel = "______________"; break;
                        case 1: $scope.rel = "Brother or sister"; break;
                        case 2: $scope.rel = "Enemy"; break;
                        case 3: $scope.rel = "Friend"; break;
                        case 4: $scope.rel = "Enemy"; break;
                        case 5: $scope.rel = "Friend"; break;
                        case 6: $scope.rel = "Marriage"; break;
                        case 7: $scope.rel = "Enemy"; break;
                        case 8: $scope.rel = "Affection"; break;
                        case 9: $scope.rel = "Enemy"; break;
                        case 10: $scope.rel = "Love"; break;
                        case 11: $scope.rel = "Marriage"; break;
                        case 12: $scope.rel = "Affection"; break;
                        case 13: $scope.rel = "Affection"; break;
                        case 14: $scope.rel = "Friend"; break;
                        case 15: $scope.rel = "Marriage"; break;
                        case 16: $scope.rel = "Friend"; break;
                        case 17: $scope.rel = "Affection"; break;
                        case 18: $scope.rel = "Friend"; break;
                        case 19: $scope.rel = "Love"; break;
                        case 20: $scope.rel = "Enemy"; break;
                        case 21: $scope.rel = "Friend"; break;
                        case 22: $scope.rel = "Enemy"; break;
                        case 23: $scope.rel = "Sister or Brother"; break;
                        case 24: $scope.rel = "Enemy"; break;
                        case 25: $scope.rel = "Enemy"; break;
                        case 26: $scope.rel = "Marriage"; break;
                    }
                } else {
                    alert('Input values are invalid')
                }
            };
        });
