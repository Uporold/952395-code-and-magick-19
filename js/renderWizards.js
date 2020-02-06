'use strict';
(function () {
  var OBJECTS_AMOUNT = 4;
  var wizards = [];

  var createWizardsArray = function (amount) {
    for (var i = 0; i < amount; i++) {
      wizards.push(window.randomize.generateRandomWizard());
    }
  };

  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  createWizardsArray(OBJECTS_AMOUNT);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderSimilarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return similarListElement.appendChild(fragment);
  };

  renderSimilarWizards();
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
