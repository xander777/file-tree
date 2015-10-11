(function() {
  'use strict';

  angular
    .module('fileTree')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($localStorage, $log) {
    var vm = this;

      /* Delete node */
      vm.delete = function(data) {
        data.nodes = [];
      }

      /* Add new node */
      vm.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
        $localStorage.tree = vm.tree;
      }

      /* Open/Close node */
      vm.triggerPanel = function(data) {
        data.open = !data.open;
      }

      /* Enable Edit mode */
      vm.edit = function(data) {
        data.edit = !data.edit;
        data.new_node_name = data.name;
      }

      /* Save new name of node */
      vm.save = function(data, event) {
        if(event.keyCode === 13) {
          data.edit = !data.edit;
          data.name = data.new_node_name;
        }
      }

      vm.tree = $localStorage.tree || [{name: "Node", nodes: []}];

  }
})();
