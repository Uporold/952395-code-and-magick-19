'use strict';
window.randomize = (function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  return {
    shuffleArray: function (array) {
      var j;
      var temp;
      for (var i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      return array;
    },

    getRandomItem: function (array) {
      return Math.floor(Math.random() * array.length);
    },

    generateRandomWizard: function () {
      return {
        coatColor: WIZARD_COAT_COLORS[this.getRandomItem(WIZARD_COAT_COLORS)],
        eyesColor: WIZARD_EYES_COLORS[this.getRandomItem(WIZARD_EYES_COLORS)]
      };
    }
  };
})();
