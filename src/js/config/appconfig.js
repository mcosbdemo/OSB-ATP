/**
 * Application Name: CafeSupremo
 * App Config javascript
 * Author: Rayes Huang
 */
define(['knockout', 'jquery', 'module', 'utils/json!../config/config.json'
], function (ko, $, module, config) {
    'use strict';

    function AppConfig() {
        var self = this;
        self.config = config;

        function init() {

        }

        self.getConfigurations = function() {
            return self.config;
        };

        self.get = function(key) {
            return self.config[key];
        };

        self.set = function(key, value) {
            self.config[key] = value;
        };

        init();
    }

    return new AppConfig();
});

