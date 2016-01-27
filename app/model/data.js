define(['durandal/app', 'jquery', 'knockout', 'model/server'],function(app, $, ko, server){
	var data = {
    authorizeUser: function(username, password){
             return server.get('/auth', username, password);
        },
	getUsers: function(username, password) {
             return server.get('/user', username, password);
        },
    createUser: function(username, password, data){
             return server.create('/user', username, password, data);
        }
	};

	return data;
});
