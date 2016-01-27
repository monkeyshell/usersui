define(['durandal/app', 'knockout', 'plugins/router', 'model/session', 'model/data'], function (app, ko, router, session, datamodel) {
    var login = {
         username: ko.observable(),
	       password: ko.observable(),
         login: function() {
           var self = this;
           self.getCredentials(); 
         }
       };

    login.getCredentials = function(){
       var self = login;
       console.log(self.username());
       console.log(self.password());
       datamodel.authorizeUser(self.username(), self.password()).then(function(data){
          console.log(data);
          if(data.status != "OK"){
            $('.warning').html("Please check the credentials!");
            $('.warning').show();
          }else{
            session.username(self.username());
            session.password(self.password());
            router.navigate('#form');
          }
       });
    }

    return login;
});
