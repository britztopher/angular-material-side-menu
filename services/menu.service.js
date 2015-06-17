(function(){

  'use strict';

  angular.module('common.services')
    .factory('menu', [
      '$location',
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
            state: 'beers.ipas',
            icon: 'fa fa-group'
          }, {
            name: 'Porters',
            state: 'home.toollist',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'Wheat',
              state: 'home.createTool',
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
            state: 'home.findwood',
            icon: 'fa fa-group'
          }, {
            name: 'Banana Chips',
            state: 'home.woodlist',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'Donuts',
              state: 'home.woodlow',
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
      }])

})();