(function () {
    'use-strict';

    angular
        .module('app')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function stateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix('');

        $stateProvider.state('app', {
            abstract: true,
            views: {
                'header@': {
                    templateUrl: 'app/pages/nav/navbar.html',
                    controller: 'NavbarController',
                    controllerAs: 'vm'
                },
                'footer@': {
                    templateUrl: 'app/pages/nav/footer.html'
                }
            }
        }).state('home', {
            parent: 'app',
            url: '/',
            views: {
                'main@': {
                    templateUrl: 'app/pages/main/home.html'
                },
                'renewal@home': {
                    templateUrl: 'app/components/renewal.html'
                },
                'hero@home': {
                    templateUrl: 'app/components/hero.html'
                },
                'about@home': {
                    templateUrl: 'app/components/about.html'
                },
                'partners@home': {
                    templateUrl: 'app/components/partners.html'
                },
                'latest@home': {
                    templateUrl: 'app/components/latest.html'
                },
                'academy@home': {
                    templateUrl: 'app/components/academy.html'
                },
                'testimonial@home': {
                    templateUrl: 'app/components/testimonial.html'
                },
                'call-to-action@home': {
                    templateUrl: 'app/components/call-to-action.html'
                }
            }
        }).state('learn', {
            abstract: true,
            parent: 'app',
            url: '/learn'
        }).state('learn.articles', {
            url: '/articles',
            views: {
                'main@': {
                    templateUrl: 'app/pages/main/learn.html'
                },
                'content@learn.articles': {
                    templateUrl: 'app/components/general-content.html'
                },
                'call-to-action@learn.articles': {
                    templateUrl: 'app/components/call-to-action.html'
                }
            }
        }).state('learn.academy', {
            url: '/mpi-academy',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('learn.certifications', {
            url: '/certifications',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('learn.magazine', {
            url: '/the-meeting-professional',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('learn.tools', {
            url: '/research-and-tools',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('connect', {
            abstract: true,
            parent: 'app',
            url: '/connect'
        }).state('connect.membership', {
            url: '/membership',
            views: {
                'main@': {
                    templateUrl: 'app/pages/main/membership.html'
                },
                'content@connect.membership': {
                    templateUrl: 'app/components/membership.html',
                    controller: 'MembershipController',
                    controllerAs: 'vm'
                }
            }
        }).state('connect.chapters', {
            url: '/academy',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('connect.events', {
            url: '/certifications',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('connect.my-mpi', {
            url: '/tools',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('profile', {
            parent: 'app',
            url: '/profile',
            views: {
                'main@': {
                    templateUrl: 'app/pages/main/dashboard.html'
                },
                'content@profile': {
                    templateUrl: 'app/components/dashboard.html'
                }
            }
        });
    }
})();
