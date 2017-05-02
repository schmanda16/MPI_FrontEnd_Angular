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
                // 'testimonial@home': {
                //     templateUrl: 'app/components/testimonial.html'
                // },
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
            url: '/chapters',
            views: {
                'main@': {
                    templateUrl: 'app/components/directory.html',
                    controller: 'DirectoryController',
                    controllerAs: 'vm'
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
            url: '/research-tools',
            views: {
                'content@': {
                    templateUrl: 'app/components/academy.html'
                }
            }
        }).state('user', {
            abstract: true,
            parent: 'app',
            url: '/user'
        }).state('user.profile', {
            url: '/profile',
            views: {
                'main@': {
                    templateUrl: 'app/pages/main/dashboard.html'
                },
                'content@user.profile': {
                    templateUrl: 'app/components/dashboard.html'
                },
                'renewal@user.profile': {
                    templateUrl: 'app/components/renewal.html'
                }
            }
        }).state('user.settings', {
            url: '/settings',
            views: {
                'main@': {
                    templateUrl: 'app/components/settings.html',
                    controller: 'SettingsController',
                    controllerAs: 'vm'
                },
                'personal-info@user.settings': {
                    templateUrl: 'app/components/settings-info.html'
                },
                'contact@user.settings': {
                    templateUrl: 'app/components/settings-contact.html'
                },
                'email-preferences@user.settings': {
                    templateUrl: 'app/components/settings-email-preferences.html'
                }
            },
            resolve: {
                profile: ['$q', 'SettingsService', 'DataRetrievalService', function($q, SettingsService, DataRetrievalService) {
                    // Web User ID will be provided by the cookie, but right now I'm using a hardcoded value for test
                    // var webUserId = 921, 236, 4871;
                    var webUserId = 236;
                    
                    var profileObj = {
                        person: {},
                        companies: []
                    };
                    var promises = [];

                    var personPromise =  SettingsService.getPersonByUserId(webUserId);
                    promises.push(personPromise);
                    personPromise = personPromise.then(function(person) {
                        profileObj.person = person;
                    });

                    var functionsPromise = DataRetrievalService.findAll('FunctionRole');
                    promises.push(functionsPromise);
                    functionsPromise = functionsPromise.then(function(functionList) {
                        profileObj.functionRoles = functionList;
                    });

                    var companiesPromise =  DataRetrievalService.findAll('Company');
                    promises.push(companiesPromise);
                    companiesPromise = companiesPromise.then(function(companyList) {
                        profileObj.companies = companyList;
                    });

                    var industriesPromise =  DataRetrievalService.findAll('MpidemographicsPrimaryIndustry');
                    promises.push(industriesPromise);
                    industriesPromise = industriesPromise.then(function(industryList) {
                        profileObj.industries = industryList;
                    });

                    var countriesPromise = DataRetrievalService.findAll('Country');
                    promises.push(countriesPromise);
                    countriesPromise = countriesPromise.then(function(countryList) {
                        profileObj.countries = countryList;
                    });

                    return $q.all(promises).then(function() {
                        return profileObj;
                    });
                }]
            }
        }).state('sign-up', {
            parent: 'app',
            url: '/sign-up',
            views: {
                'main@': {
                    templateUrl: 'app/components/sign-up.html',
                    controller: 'SignUpController',
                    controllerAs: 'vm'
                }
            },
            params: {
                selectedPlan: null
            },
            resolve: {
                membershipParams: ['$stateParams', function ($stateParams) {
                    return $stateParams.selectedPlan;
                }]
            }
        }).state('login', {
            parent: 'app',
            url: '/login',
            views: {
                'main@': {
                    templateUrl: 'app/components/login.html'
                }
            }
        }).state('event-history', {
            parent: 'app',
            url: '/event-history',
            views: {
                'main@': {
                    templateUrl: 'app/components/event-history.html'
                }
            }
        });
    }
})();
