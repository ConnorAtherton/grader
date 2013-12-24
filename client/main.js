Meteor.startup(function() {
    //register handlebars helpers
    Handlebars.registerHelper('workData', function(context, options) {
        var keys = _.keys(this.work.workData),
            data = _.toArray(this.work.workData);

        for(var i = 0; i < data.length; i++) {
            data[i].name = keys[i];
        }

      return data;
    });

});


// Use mainPanel because most routes will use it...
Router.configure({
    layoutTemplate: 'layout',
    yieldTemplates: {
        header: {
            to: 'header'
        }
    },
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
            header: {
                to: 'header'
            },
            sidePanel: {
                to: 'sidePanel'
            },
            mainPanel: {
                to: 'mainPanel'
            }
        },
        before: function() {
            if(Meteor.user()) {
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
            header: {
                to: 'header'
            },
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showPies', {
        path: '/pie',
        yieldTemplates: {
            header: {
                to: 'header'
            },
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showForce', {
        path: '/force',
        yieldTemplates: {
            header: {
                to: 'header'
            },
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showScatter', {
        path: '/scatter',
        yieldTemplates: {
            header: {
                to: 'header'
            },
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

});
