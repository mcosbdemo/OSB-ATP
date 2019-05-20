/**
 * Application Name: CafeSupremo
 * Application Controller javascript
 * Author: Rayes Huang
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojmodule-element-utils', 'config/appconfig', 'ojs/ojmodule-element', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
  'ojs/ojoffcanvas'],
  function(oj, ko, moduleUtils, appConfig) {
     function ControllerViewModel() {
       var self = this;
       self.userid = new ko.observable();
       // to enable disable reward
       // edit kenneth.heung 20190509
       self.logg   = new ko.observable();
       var rewardsEnabled = appConfig.get("rewardsEnabled");
       // assume not logged in
       self.logg(false);
       console.log('try to setup login in appController: ' + self.logg());
      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
          'welcome': {label: 'Cafe Supremo', isDefault: true},
          'discover': {label: 'DISCOVER COFFEE'},
          'store': {label: 'STORES'},
          'reward': {label: 'REWARDS'},
          'unavailable': {label: 'UNAVAILABLE'},
          'logout': {label: 'LOGOUT'}
      });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      self.moduleConfig = ko.observable({'view':[], 'viewModel':null});

      self.loadModule = function() {
        ko.computed(function() {
          var name = self.router.moduleConfig.name();
          var viewPath = 'views/' + name + '.html';
          var modelPath = 'viewModels/' + name;
          var masterPromise = Promise.all([
            moduleUtils.createView({'viewPath':viewPath}),
            moduleUtils.createViewModel({'viewModelPath':modelPath})
          ]);
          masterPromise.then(
            function(values){
              self.moduleConfig({'view':values[0],'viewModel':values[1]});
            }
          );
        });
      };

      console.log("disabled: " + !rewardsEnabled);

      // Navigation setup
      self.navDataSourceX = new ko.observableArray(
        [
             {name: 'Welcome', id: 'welcome', disabled: false}
            ,{name: 'Discover', id: 'discover', disabled: false}
            ,{name: 'Stores', id: 'store', disabled: false}
            ,{name: 'Rewards', id: 'reward', disabled: ""+!(rewardsEnabled&&self.logg())}
            ,{name: 'Logout',  id: 'logout', disabled: ""+!self.logg() }
        ]
      );
      self.navDataSource = new oj.ArrayTableDataSource(self.navDataSourceX(), {idAttribute: 'id'});

      // Drawer
      // Close offcanvas on medium and larger screens
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.drawerParams = {
        displayMode: 'push',
        selector: '#navDrawer',
        content: '#pageContent'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        console.log('drawer toggle');
                return oj.OffcanvasUtils.toggle(self.drawerParams);
      }
      $("#navDrawer").on("ojopen", function() {
         console.log('drawer open');
         // document.getElementById('nLis').refresh();
       });
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });

      // Application Name used in Branding Area
      self.title = ko.pureComputed(function () {
        return self.router.currentState().label;
      }, this);

      // Header
      // Application Name used in Branding Area
      // self.appName = ko.observable("App Name");
      // // User Info used in Global Navigation area
      // self.userLogin = ko.observable("john.hancock@oracle.com");

      // Footer
      // function footerLink(name, id, linkTarget) {
      //   this.name = name;
      //   this.linkId = id;
      //   this.linkTarget = linkTarget;
      // }
      // self.footerLinks = ko.observableArray([
      //   new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
      //   new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
      //   new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
      //   new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
      //   new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      // ]);
     }

     return new ControllerViewModel();
  }
);
