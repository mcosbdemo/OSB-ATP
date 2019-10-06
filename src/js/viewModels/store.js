/**
 * Application Name: CafeSupremo
 * ViewModel: Store
 * Author: Rayes Huang
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtabs', 'ojs/ojconveyorbelt'],
 function(oj, ko, $) {

    function StoreViewModel() {
      var self = this;
      self.stores = new ko.observable();

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
        // kenneth: replace map with
        // var map = new google.maps.Map(document.getElementById('googleMap'), {
        //    zoom: 18,
        //    center: {lat: 22.2797636, lng: 114.1834475}
        // });
        // kenneth: map definition
        var map = L.map(document.getElementById('googleMap')).setView([22.2797636,114.1834475],18);
        // $.getJSON("data/stores.json",
        //        function (data)
        //        {
                    //var label = 'Cafe Supremo';
        //            console.log("Loaded data: " + data);
        //            self.stores(new oj.ArrayTableDataSource(data, {idAttribute: "id"}));
        //            var markers = data.map(function (location, i) {
        //                return new google.maps.Marker({
        //                    position: location,
        //                    label: "Cafe Supremo"
        //                });
        //            });
        //            var markerCluster = new MarkerClusterer(map, markers,
        //                    {imagePath: 'img/cup-of-coffee-icon'});

        //        })
        // kenneth - this section define the 6 stores
        var markerA = L.marker([22.2797636,114.1834475]).addTo(map);
        var markerB = L.marker([22.2794423,114.182937]).addTo(map);
        var markerC = L.marker([22.28037511,114.185295]).addTo(map);
        var markerD = L.marker([22.2799102,114.1841145]).addTo(map);
        var markerE = L.marker([22.280582,114.1821902]).addTo(map);
        var markerF = L.marker([22.2805063,114.1822464]).addTo(map);
        // kenneth - this actually add the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { attribution:
               'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
              maxZoom:18}
          ).addTo(map);
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
    return new StoreViewModel();
  }
);
