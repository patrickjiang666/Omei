$(document).ready(function() {
	$('#orderReview').click(function(){
		$('#wrapper').hide();
		$('#order').fadeIn(2000);
	});
	$('#backToMenu').click(function(){
		$('#order').hide();
		$('#wrapper').fadeIn(2000);
	});
});
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
	$http.get("dishes.json").then(function(response){
		
		$scope.dishlist = response.data;
		//console.log($scope.dishlist);
	});
	$scope.orderlist = [];
	$scope.menuType="signature";
	//custom filter
	$scope.serchType = function(item){
		return item.dishType === $scope.menuType;
	};
	$scope.total = 0;
	$scope.cal = function(){
		var temp = 0;
		$scope.orderlist.forEach(function(e){
			temp += e.unitPrice * e.quantity;
		});
		$scope.total = temp;
	};
	$scope.orderOne = function($event){
		var addable = true;
		$scope.orderlist.forEach(function(e){
			if(e.dishId==$($event.target)[0].previousElementSibling.children[2].innerHTML)
				addable = false;
		});
		if(addable){
			$scope.orderlist.push(
				{	
					"dishId":parseInt($($event.target)[0].previousElementSibling.children[2].innerHTML),
					"dishName":$($event.target)[0].previousElementSibling.previousElementSibling.children[1].innerHTML,
					"unitPrice":parseFloat($($event.target)[0].previousElementSibling.children[1].innerHTML),
					"quantity":1
				}
			);
			$scope.cal();
		};
	};
	$scope.addOne = function($event){
		var id = $($event.target)[0].parentElement.previousElementSibling.previousElementSibling.innerHTML;
		var amount = $event.currentTarget.previousElementSibling;
		$scope.orderlist.forEach(function(e){
			if(e.dishId==id)e.quantity += 1;
		});
		$scope.cal();
	};
	$scope.subOne = function($event){
		var id = $($event.target)[0].parentElement.previousElementSibling.previousElementSibling.innerHTML;
		var amount = $event.currentTarget.previousElementSibling;
		var indexx = 0;
		$scope.orderlist.forEach(function(e){
			if(e.dishId==id && e.quantity>1) e.quantity -= 1;
			else if(e.dishId==id && e.quantity==1) $scope.orderlist.splice(indexx,1);
			indexx++;
		});
		$scope.cal();
	};
});









