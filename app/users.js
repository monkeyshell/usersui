define(['plugins/router', 'jquery', 'knockout', 'model/data', 'model/session', 'datatables'], function(router, $, ko, datamodel, session) {
	var users = {
        username: ko.observable(session.username()),
        password: ko.observable(session.password()),
		displayList: ko.observableArray(),
        seeProfile: ko.observable(false),
        users: function(){
            router.navigate('#users');
        },
        form: function(){
            router.navigate('#form');
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
        canActivate: function(){
            console.log(session.username());
            if(session.username() == undefined)
                return false;
            else
                return true;
        },
        activate: function(){
            var self = this;
            self.getData();
        }
	};


    users.changeTable = function(){
            var self = report;
            self.table.destroy();
            self.getData();
    },

    users.getData = function(){
            var self = report;
            self.displayList.removeAll();
            var range = self.range();
            datamodel.getUsers(self.username(), self.password()).then(function(data){
                ko.utils.arrayPushAll(self.displayList(), data.users);
                self.displayList(data.users);
                console.log("displayList changed " + self.displayList());
                self.displayList.valueHasMutated();
                self.table = self.drawTable();
            });
    },

    users.drawTable = function(){
        console.log("drawing table");
        var table = $('#users').DataTable({
                    paging:true,
                    info: false,
                    lengthChange:false,
                    stateSave: true,
                    dom: 'lrtip',
                    bAutoWidth: false, 
                    aoColumns : [ { sWidth: "20%" }, { sWidth: "30%" }, { sWidth: "30%" }, { sWidth: "20%" } ]
                 });
        return table;
    }

	return users;
});