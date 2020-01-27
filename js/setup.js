'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var OBJECTS_AMOUNT = 4;

var wizards = [];

var getRandomItem = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomNameOrder = function () {
  return Math.floor(Math.random() * 2) ? WIZARD_NAMES[getRandomItem(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomItem(WIZARD_SURNAMES)]
    : WIZARD_SURNAMES[getRandomItem(WIZARD_SURNAMES)] + ' ' + WIZARD_NAMES[getRandomItem(WIZARD_NAMES)];
};

var generateRandomWizard = function () {
  return {
    name: getRandomNameOrder(),
    coatColor: WIZARD_COAT_COLORS[getRandomItem(WIZARD_COAT_COLORS)],
    eyesColor: WIZARD_EYES_COLORS[getRandomItem(WIZARD_EYES_COLORS)]
  };
};

var createWizardsArray = function (amount) {
  for (var i = 0; i < amount; i++) {
    wizards.push(generateRandomWizard());
  }
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
