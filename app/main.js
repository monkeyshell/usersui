requirejs.config({
    paths: {
        'text'			: '../lib/require/text',
        'async'			: '../lib/require/async',
        'goog'			: '../lib/require/goog',
        'propertyParser': '../lib/require/propertyParser',
        'durandal'		: '../lib/durandal/js',
        'plugins' 		: '../lib/durandal/js/plugins',
        'transitions'	: '../lib/durandal/js/transitions',
        'knockout'		: '../lib/knockout/knockout-3.3.0',
        'bootstrap'		: '../lib/bootstrap/js/bootstrap.min',
        'bootstrapSwitch' : 'js/bootstrap-switch',
        'jqplugin'  	: '../lib/jqplugin',
        'jquery'		: '../lib/jquery/jquery-2.1.4.min',
        'select2'		: '../lib/select2/js/select2',
        'highcharts' : 'js/highcharts',
        'jqueryOld' : 'js/jquery-1.9.1.min',
        'datatables'    : '../lib/datatables/datatables.min',
        'app'			: '.'
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  
		function (system, app, viewLocator) {
    system.debug(true);

    app.title = 'Users';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        history: true
    });
    
    app.start().then(function () {
        viewLocator.useConvention();
        //Show the app by setting the root view model for our application.
        app.setRoot('shell');    		
    });
});
