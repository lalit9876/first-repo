var mainApp=angular.module('mainApp', []);
mainApp.controller('mainController', function($scope, $window, $parse){
	 $scope.list={
		 'json' :
		 [{
               'name' :'Hari',
			   'fullName' : 'Hari Nallan',
               'image' : 'images/hari.jpg',
			   'imageL' : 'images/hari.jpg',
			   'homePhone' : '(123) 334-1389',
			   'workPhone' : '(345) 575-8972',
			   'email' : 'Hari@microsoft.ru',
			   'site' : 'thinkdesign.in',
			   'skypeName' : 'Hari_Nallan'
             },
             {
				'name' : 'Deepali',
				'fullName' : 'Deepali Saini',
				'image' : 'images/deepali.jpg',
				'imageL' : 'images/deepali.jpg',
				'homePhone' : '(123) 334-1389',
				'workPhone' : '(345) 575-8972',
				'email' : 'Deepali@facebook.com',
				'site' : 'thinkdesign.in',
				'skypeName' : 'Deepali_Saini'
               },
               {
				'name' :'Rama',
				'fullName' : 'Rama Aleti',
			   'image' : 'images/rama-aleti.jpg',
			   'imageL' : 'images/rama-aleti.jpg',
			   'homePhone' : '(123) 334-1389',
			   'workPhone' : '(345) 575-8972',
			   'email' : 'Rama@microsoft.ru',
			   'site' : 'thinkdesign.in',
			   'skypeName' : 'Rama_Aleti'
                 },
                 {
				 'name' :'Srinivas',
				 'fullName' : 'Srinivas Alanki',
				 'image' : 'images/alanki-srinivas.jpg',
				 'imageL' : 'images/alanki-srinivas.jpg',
				 'homePhone' : '(123) 334-1389',
				 'workPhone' : '(345) 575-8972',
				 'email' : 'Srinivas@gmail.com',
				 'site' : 'thinkdesign.in',
				 'skypeName' : 'Srinivas_Alanki'
                   },
                   {
				 'name' :'Amitabh',
				  'fullName' : 'Amitabh Nasu',
				 'image' : 'images/amitabhbasu.jpg',
				 'imageL' : 'images/amitabhbasu.jpg',
				 'homePhone' : '(123) 334-1389',
				 'workPhone' : '(345) 575-8972',
				 'email' : 'Amitabhbasu@yahoo.co',
				 'site' : 'thinkdesign.in',
				 'skypeName' : 'Amitabh_Basu'
                     },
					   {
				 'name' :'Preeti',
				  'fullName' : 'Preeti Narsimhan',
				 'image' : 'images/preeti.jpg',
				 'imageL' : 'images/preeti.jpg',
				 'homePhone' : '(123) 334-1389',
				 'workPhone' : '(345) 575-8972',
				 'email' : 'Preeti@gmail.com',
				 'site' : 'thinkdesign.in',
				 'skypeName' : 'Preeti_Narsimhan'
                     }]
};
/*This function is to show 
remaining two icons those were initially hide.*/
$scope.showIcon = function(item){
	var firstIcon = 'icon1'+item;
	var socondIcon = 'icon2'+item;
	var parseVal1 = $parse(firstIcon);
	parseVal1.assign($scope, true);
	var parseVal2 = $parse(socondIcon);
	parseVal2.assign($scope, true);
};
//This function is used for navigation.
  $scope.gotoNext = function(nam){
		var sortedArr = JSON.stringify(nam);
		$window.location.href = 'ProfileDetails.html';
		localStorage.setItem("names", sortedArr);
	 };
	 
});
