$( document ).ready(function() {
	$('#login').click(function(){
	if($('#username').val()=='manager' && $('#pwd').val()=='123456')
		console.log('successed');
	});
	
	(function myMap() {
	  var mapCanvas = document.getElementById("map");
	  var mapOptions = {
		center: new google.maps.LatLng(32.23638, -110.93365),
		  //32.23638	-110.93365
		zoom: 19
	  }
	  var map = new google.maps.Map(mapCanvas, mapOptions);
	})();
	(function() { 
		var s = document.createElement("script");
		s.async = true;
		s.onload = s.onreadystatechange = function(){
			getYelpWidget("szechuan-omei-tucson-2","600","RED","y","y","1");
		};
		s.src='http://chrisawren.com/widgets/yelp/yelpv2.js';
		var x = document.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s, x);
	})();
});


var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http,$location){
	$scope.login = function(){
		window.open("/order",'_self',false);
	};
});