/**
 * Application Name: CafeSupremo
 * ViewModel: Discover
 * Author: Rayes Huang
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojlistview', 'ojs/ojjsontreedatasource', 'ojs/ojbutton'],
 function(oj, ko, $) {

    function DiscoverViewModel() {
      var self = this;
      self.products = new ko.observable();
      self.itemOnly = function(context)
        {
          return context['leaf'];
        };
      self.selectTemplate = function(file, bindingContext)
      {
        return bindingContext.$itemContext.leaf ? 'item_template' : 'group_template';
      };
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
        $.getJSON("data/products.json",
        function(data)
        {
          self.products(new oj.JsonTreeDataSource(data));

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
    return new DiscoverViewModel();
  }
);
