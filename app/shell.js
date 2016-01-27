define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: '', moduleId: 'root', title: 'Login', nav: true },
                { route: 'form', moduleId: 'form', title: 'Form', nav: true },
                { route: 'users', moduleId: 'users', title: 'Users', nav: true }
            ]).buildNavigationModel()
              .activate();
        }
    };
});