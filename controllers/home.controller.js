(function(){
  'use strict';

  angular.module('myMenuApp.controllers')

    .controller('HomeCtrl', [
      '$rootScope',
      '$log',
      '$state',
      '$timeout',
      '$location',
      'menu',
      function ($rootScope, $log, $state, $timeout, $location, menu) {

        var vm = this;
        var aboutMeArr = ['Family', 'Location', 'Lifestyle'];
        var budgetArr = ['Housing', 'LivingExpenses', 'Healthcare', 'Travel'];
        var incomeArr = ['SocialSecurity', 'Savings', 'Pension', 'PartTimeJob'];
        var advancedArr = ['Assumptions', 'BudgetGraph', 'AccountBalanceGraph', 'IncomeBalanceGraph'];

        //functions for menu-link and menu-toggle
        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.isSectionSelected = isSectionSelected;
        vm.autoFocusContent = false;
        vm.menu = menu;

        console.log('menu: ', vm.menu)

        vm.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };

        // toggleOnCategory();

        // $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        //   toggleOnCategory();
        // });

        // function toggleOnCategory() {

        //   if (_.includes(aboutMeArr, $state.params.category)) {

        //     if (!isOpen(vm.menu.sections[1])) {
        //       toggleOpen(vm.menu.sections[1]);
        //     }
        //   } else if (_.includes(budgetArr, $state.params.category)) {
        //     if (!isOpen(vm.menu.sections[2])) {
        //       toggleOpen(vm.menu.sections[2]);
        //     }
        //   } else if (_.includes(incomeArr, $state.params.category)) {
        //     if (!isOpen(vm.menu.sections[3])) {
        //       toggleOpen(vm.menu.sections[3]);
        //     }
        //   } else if (_.includes(advancedArr, $state.params.category)) {
        //     if (!isOpen(vm.menu.sections[4])) {
        //       toggleOpen(vm.menu.sections[4]);
        //     }
        //   }

        // }

        function isOpen(section) {
          return menu.isSectionSelected(section);
        }

        function toggleOpen(section) {
          menu.toggleSelectSection(section);
        }

        function isSectionSelected(section) {
          var selected = false;
          var openedSection = menu.openedSection;
          if(openedSection === section){
            selected = true;
          }
          else if(section.children) {
            section.children.forEach(function(childSection) {
              if(childSection === openedSection){
                selected = true;
              }
            });
          }
          return selected;
        }

      }])
})();