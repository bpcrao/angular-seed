/**
 * Created with IntelliJ IDEA.
 * User: purnaboyapati
 * Date: 31/8/13
 * Time: 9:14 PM
 * To change this template use File | Settings | File Templates.
 */


'use stict';
eventsApp.controller('EventController', function EventController($scope) {
    $scope.event = {
        name:"Angular js boot camp purna",
        date:"31-08-2013",
        time:"9:20 PM",
        logo:"./img/angular.png",
        languages:[
            {
                name:'java',
                votecount:0
            }
            ,
            {
                name:'JS',
                votecount:0
            }
            ,
            {
                name:'python',
                votecount:0
            }
        ]
    }
    $scope.thumsUp = function (langua) {
        langua.votecount++;

    }
})