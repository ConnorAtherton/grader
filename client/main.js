// Use mainPanel because most routes will use it...
Router.configure({
    layoutTemplate: 'layout',
    before: function() {
        var user = Meteor.user();
        if (!user) {
            this.render('pageNotLoggedIn');
            return this.stop();
        }
    }
});

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'pageLoggedIn',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            },
            mainPanel: {
                to: 'mainPanel'
            }
        },
        before: function() {
            if (Meteor.user()) {
                // redirect to the dashboard page
                Router.go('showDashboard');
                this.stop();
            }
        }
        // before: function () {
        //   if (Meteor.user()) {
        //     this.redirect('showDashboard');
        //     this.stop();
        //   }
        // }
    });

    this.route('showDashboard', {
        path: '/dashboard',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showPies', {
        path: '/pie',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showForce', {
        path: '/force',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showScatter', {
        path: '/scatter',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

});
