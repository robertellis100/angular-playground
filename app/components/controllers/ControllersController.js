var app = angular.module('angularPlayground');

app.controller('ControllersController', ControllersController);


function ControllersController(){
	this.controllersStatus = 'Working';
	this.friends = [];
	this.newFriend = '';
	this.addFriend=function(){
		this.friends.push(this.newFriend);
		this.newFriend = '';
	};
	}
// $(document).ready(function(){
//     $('#inputId').keypress(function(e){
//       if(e.keyCode==13){
//       	ControllersController.addFriend();
//     };
// });


