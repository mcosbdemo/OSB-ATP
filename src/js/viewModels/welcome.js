/**
 * Application Name: CafeSupremo
 * ViewModel: Welcome
 * Author: Rayes Huang
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'config/appconfig', 'ojs/ojdialog'
        , 'ojs/ojformlayout', 'ojs/ojinputtext'],
        function (oj, ko, $, app, appConfig) {

            function WelcomeViewModel() {
                var self = this;
                var router = oj.Router.rootInstance;

                var baseURL = appConfig.get("baseURL");
                var loginEndpoint = appConfig.get("loginEndpoint");
                var loginEnabled = appConfig.get("loginEnabled");
                var rewardsEnabled = appConfig.get("rewardsEnabled");
                if(!loginEnabled){
                    app.userid(appConfig.get("defaultUser"));
                }

                self.username = new ko.observable("user@email.com");
                self.password = new ko.observable("");
                self.signUpMe = function () {
                    // EDIT the IP address
                    window.location="http://127.0.0.1:9001/index.php";
                    console.log("sign up");
                }

                self.signInMe  = function () {
                    document.querySelector("#loginDialog").open();
                }

                self.login  = function () {
                    if(loginEnabled){
                      // console.log("password: " + self.password);
                      if (self.password()=="" || self.password()==null) {
                        alert("Password cannot be empty. Please try again.");
                      } else {
                        $.post(baseURL + loginEndpoint, {'username':self.username,'password':self.password},
                            function (data, status) {
                                if(status == "success" && data.result=="success"){
                                    app.userid(data.memberno);
                                    console.log('get userid from backend api: ' + app.userid());
                                    // logged in
                                    // edit kenneth.heung 20190509
                                    app.logg(true);
                                    console.log('after setup logged in: ' + app.logg());
                                    self.loginComplete();
                                } else {
                                    console.log("status: " + status + " result: " + data.result);
                                    alert("Incorrect username/password. Please try again.");
                                }
                            })
                      }
                    }
                    else{
                        alert("Login unavailable! This feature is coming soon.");
                    }
                }

                self.loginComplete = function() {
                    document.querySelector("#loginDialog").close();

                    if(rewardsEnabled){
                        app.navDataSource.change(
                          [{name: 'Rewards', id: 'reward', disabled: false }
                          ,{name: 'Logout', id: 'logout', disabled: false }]
                        );
                        router.go('reward');
                    }
                    else{
                        router.go('unavailable');
                    }
                };

                self.startAnimationListener= function(event) {
                    var ui = event.detail;
                    if (!$(event.target).is(".oj-dialog")) return;

                    if ("open" === ui.action) {
                        event.preventDefault();
                        oj.AnimationUtils["zoomIn"](ui.element, {"duration": "400ms"}).then(ui.endCallback);
                    }
                    else if ("close" === ui.action) {
                        event.preventDefault();
                        ui.endCallback();
                    }
                }

                self.connected = function () {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is disconnected from the DOM.
                 */
                self.disconnected = function () {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after transition to the new View is complete.
                 * That includes any possible animation between the old and the new View.
                 */
                self.transitionCompleted = function () {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new WelcomeViewModel();
        }
);
