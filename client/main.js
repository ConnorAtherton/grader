// Use mainPanel because most routes will use it...
Router.configure({
    layoutTemplate: 'layout',
});

var filters = {
    isLoggedIn: function() {
      if (!(Meteor.loggingIn() || Meteor.user())) {
        this.render('pageNotLoggedIn');
        this.stop();
      }
    }
}

Router.before(filters.isLoggedIn, {only: [
    'home',
    'showDashboard',
    'showPies',
    'showForce',
    'showScatter',
    'showListView',
    'showQuestions'
]});

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
    });

    this.route('showDashboard', {
        path: '/dashboard',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('tests', {
        path: '/tests'
    });

    this.route('showListView', {
        path: '/list',
        yieldTemplates: {
            sidePanel: {
                to: 'sidePanel'
            }
        }
    });

    this.route('showQuestions', {
        path: '/questions',
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
