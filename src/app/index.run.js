(function() {
  'use strict';

  angular
    .module('fileTree')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
