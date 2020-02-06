'use strict';
window.randomize = (function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  return {
    getRandomItem: function (array) {
      return Math.floor(Math.random() * array.length);
    },
    getRandomNameOrder: function () {
      return Math.floor(Math.random() * 2) ? WIZARD_NAMES[this.getRandomItem(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[this.getRandomItem(WIZARD_SURNAMES)]
        : WIZARD_SURNAMES[this.getRandomItem(WIZARD_SURNAMES)] + ' ' + WIZARD_NAMES[this.getRandomItem(WIZARD_NAMES)];
    },

    generateRandomWizard: function () {
      return {
        name: this.getRandomNameOrder(),
        coatColor: WIZARD_COAT_COLORS[this.getRandomItem(WIZARD_COAT_COLORS)],
        eyesColor: WIZARD_EYES_COLORS[this.getRandomItem(WIZARD_EYES_COLORS)]
      };
    }
  };
})();
