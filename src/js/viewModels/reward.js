/**
 * Application Name: CafeSupremo
 * ViewModel: Reward
 * Author: Rayes Huang
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'config/appconfig','ojs/ojknockout', 'ojs/ojgauge', 'ojs/ojtabs', 'ojs/ojconveyorbelt'],
 function(oj, ko, $, app, appConfig) {

    function RewardViewModel() {
      var self = this;
      var baseURL = appConfig.get("baseURL");
      var pointsEndpoint = appConfig.get("pointsEndpoint");
      var couponEndpoint = appConfig.get("couponEndpoint");
      var userid = app.userid();
      // bind points to knockout which get from server
      self.points = new ko.observable(0);
      // bind reward to knockout which get from server
      self.coupon = new ko.observable(0);
      self.selectedItem = new ko.observable();
      self.currentItem = new ko.observable(null);
      self.distance = ko.pureComputed(function () {
          return 'Collect ' + (3 - this.points()) + ' more Stars for another Reward';
      }, this);
      self.target = ko.pureComputed(function () {
          return this.points() + ' / 3';
      }, this);
      self.rewards = new ko.observable();
      self.rewardsHistory = new ko.observable();
      self.credit = function () {
          self.currentItem(null);
          $.post(baseURL + pointsEndpoint + "/" + userid, null,
                  function (data, status) {
                      // self.points(data.points % 3);
                      self.points(data.points);
                      console.log("after credit new point we have: " + self.points());
                      if (self.points() === 0) {
                          console.log("we have zero points means add one coupon we now have " + self.coupon());
                          var rewardData = self.rewards();
                          var i = rewardData.totalSize() + 1;
                          console.log("adding coupon number: " + i);
                          rewardData.add({"id": i, "name": "Free Coffee"});
                          // self.rewards.reset();
                          self.rewards(rewardData);
                          var cntcoupon = self.coupon();
                          cntcoupon++;
                          self.coupon(cntcoupon);
                          console.log("after adding one we now have " + self.coupon());
                      }
                  })
      }

      self.freecoffee = function () {
          var i = self.selectedItem();
          console.log("using coupon number: " + i);
          self.currentItem(null);
          $.post(baseURL + couponEndpoint + "/" + userid, null,
                  function (data, status) {
                      self.coupon(data.coupon);
                      console.log("after using coupon we now have " + self.coupon());
                      var rewardData = self.rewards();
                      var j = self.coupon() +1;
                      rewardData.remove({"id": j});
                      // rewardData.reset();
                      // for (var j=1;j<=self.coupon();j++) {
                      //    rewardData.add({"id": j, "name": "Free Coffee"});
                      // }
                      self.rewards(rewardData);
                  })
      }

      self.logSelected = function (event, ui)
      {
          console.log("selected item " + self.selectedItem());
          if (ui.option === "selection" && ui.value != null && ui.value[0] != null) {
              console.log("currentItem=" + self.currentItem());
              if (self.currentItem() != null && self.currentItem()[0] == self.selectedItem()[0]) {
                  self.currentItem(null);
                  console.log("Reset currentItem to " + self.currentItem());
              } else {
                  self.currentItem(self.selectedItem());
              }
          }

      }

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function() {
        // Implement if needed
        $.get(baseURL + pointsEndpoint + "/" + userid,
            function (data, status) {
                self.points(data.points);
                console.log("points = " + self.points());
            }
        );
        // $.getJSON("data/rewards.json",
        //     function (data)
        //     {
        //         self.rewards(new oj.ArrayTableDataSource(data, {idAttribute: "id"}));
        //         var rewardData = self.rewards();
        //         console.log("removing dummy coupon");
        //         rewardData.remove({"id":1});

        //         self.rewards(rewardData);
        //     })
        $.get(baseURL + couponEndpoint + "/" + userid,
            function (data,status) {
                self.coupon(data.coupon);
                console.log("coupon = " + self.coupon());
                var rewardData = new oj.ArrayTableDataSource([], {idAttribute: "id"});
                console.log("initialize coupon, total: " + self.coupon());
                for (var i=1;i<=self.coupon();i++) {
                        rewardData.add({"id": i, "name": "Free Coffee"});
                }
                self.rewards(rewardData);
            }
        );
        $.getJSON("data/rewards_history.json",
            function (data)
            {
                self.rewardsHistory(new oj.ArrayTableDataSource(data, {idAttribute: "id"}));

            })
        };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function() {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function() {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new RewardViewModel();
  }
);
