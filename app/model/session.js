define(['durandal/app', 'jquery', 'knockout'],function(app, $, ko){
	return {
        username: ko.observable(),
        password: ko.observable()
    };
});