define(['jquery', 'knockout', 'common/constants'],function($, ko, constants){
	return {
        getUrl: function(urlPart) {
            return constants.baseUrl + urlPart; 
        },
        get: function(url, username, password) {
            return $.ajax({
                method: "GET",
                async: true,
                xhrFields: {withCredentials: true},
                username: username, // Most SAP web services require credentials
                password: password,
                crossDomain: true,
                url: this.getUrl(url)
            });
        },
        create: function(url, username, password, data) {
            return $.ajax({
                method: "POST",
                async: true,
                xhrFields: {withCredentials: true},
                username: username, // Most SAP web services require credentials
                password: password,
                dataType: 'json',
                crossDomain: true,
                url: this.getUrl(url),
                data: data
            });
        }
    };
});
