module.exports = function(app) {
    app.directive('bandInfo', function(bandList) {
        return {
            template: '<h1 ng-repeat="band in bands">{{band.name}} - {{band.formed}}</h1>',
            restrice: 'E',
            controller: function($scope) {
                $scope.bands = bandList;
            }
        };
    });
};
