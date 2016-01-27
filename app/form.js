define(['plugins/router', 'jquery', 'knockout', 'model/data', 'model/session', 'bootstrapSwitch'], function(router, $, ko, datamodel, session) {
	var profile = {
        username: ko.observable(session.username()),
        password: ko.observable(session.password()),
        firstName: ko.observable(),
        lastName: ko.observable(),
        phoneNumber: ko.observable(),
        alternatePhoneNumber: ko.observable(),
        email: ko.observable(),
        city: ko.observable(),
        address: ko.observable(),
        state: ko.observable(),
        street: ko.observable(),
        seeProfile: ko.observable(false),
        user: {
            firstName: self.firstName(),
            lastName: self.lastName(),
            email: self.email(),
            phoneNumber: self.phoneNumber(),
            alternatePhoneNumber: self.alternatePhoneNumber(),
            state: self.state(),
            city: self.city(),
            street: self.street(),
            address: self.address()
        }
        form: function(){
            router.navigate('#form');
        },
        users: function(){
            router.navigate('#users');
        },
        userDropdown: function(){
            var self = this;
            if(self.seeProfile()){
                self.seeProfile(false);
                $("#userDropdown").hide();
            }
            else{
                self.seeProfile(true);
                $("#userDropdown").show();
            } 
        },
        createUser: function(){
            var self = this;
            if(this.user.firstName == null){
                $('.notify').html("First name is compulsory");
                return;
            }else if(this.user.email == null){
                $('.notify').html("Email is compulsory");
                return;
            }else if(this.user.phoneNumber == null){
                $('.notify').html("Phone Number is compulsory");
                return;
            }                
            datamodel.createUser(self.username(), self.npassword(), this.user).then(function(data){
                if(data.anyError)
                    $('.notify').html(data.errorMessage);
                else
                    $('.notify').html("Successfully entered the user details");
            });
        },
        canActivate: function(){
            console.log(session.username());
            if(session.username() == undefined)
                return false;
            else
                return true;
        },
        activate: function(){}
	};

    return profile;
});