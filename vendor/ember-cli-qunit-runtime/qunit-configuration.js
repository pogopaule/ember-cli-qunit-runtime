/* globals $,QUnit */

$(document).ready(function() {
  QUnit.config.urlConfig.push({ id: 'sortruntime', label: 'Sort by runtime'});

  QUnit.testDone(function() {
    if(QUnit.urlParams.sortruntime) {
      var extractRuntime = function(listItem) {
        return parseInt($($(listItem).find('.runtime')[0]).text().slice(0, -3));
      };

      var sortTests = function(a, b) {
        return extractRuntime(b) - extractRuntime(a);
      };

      var activeTests = $('#qunit-tests > .pass, #qunit-tests > .fail');
      var sortedListItems = activeTests.detach().sort(sortTests);

      $('#qunit-tests').prepend(sortedListItems);
    }
  });
});
