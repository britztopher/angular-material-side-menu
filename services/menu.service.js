(function(){

  'use strict';

  angular.module('common.services')
    .factory('menu', [
      '$location',
      '$rootScope',
      function ($location) {

        var sections = [{
          name: 'Getting Started',
          state: 'home.gettingstarted',
          type: 'link'
        }];

        sections.push({
          name: 'Beers',
          type: 'toggle',
          pages: [{
            name: 'IPAs',
            type: 'link',
            state: 'home.beers.ipas',
            icon: 'fa fa-group'
          }, {
            name: 'Porters',
            state: 'home.beers.porters',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'Wheat',
              state: 'home.beers.wheat',
              type: 'link',
              icon: 'fa fa-plus'
            }]
        });

        sections.push({
          name: 'Munchies',
          type: 'toggle',
          pages: [{
            name: 'Cheetos',
            type: 'link',
            state: 'munchies.cheetos',
            icon: 'fa fa-group'
          }, {
            name: 'Banana Chips',
            state: 'munchies.bananachips',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'Donuts',
              state: 'munchies.donuts',
              type: 'link',
              icon: 'fa fa-map-marker'
            }]
        });

        var self;

        return self = {
          sections: sections,

          toggleSelectSection: function (section) {
            self.openedSection = (self.openedSection === section ? null : section);
          },
          isSectionSelected: function (section) {
            return self.openedSection === section;
          },

          selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
          }
        };

        function sortByHumanName(a, b) {
          return (a.humanName < b.humanName) ? -1 :
            (a.humanName > b.humanName) ? 1 : 0;
        }

      }])

})();