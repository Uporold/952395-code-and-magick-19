'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var OBJECTS_AMOUNT = 4;

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

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

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserNameInput = document.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupUserNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var coatColorInput = document.querySelector('input[name=coat-color]');
var eyesColorInput = document.querySelector('input[name=eyes-color]');
var fireballColorInput = document.querySelector('input[name=fireball-color]');

var changeCoatColor = function () {
  wizardCoat.style.fill = generateRandomWizard().coatColor;
  coatColorInput.value = wizardCoat.style.fill;
};

var changeEyesColor = function () {
  wizardEyes.style.fill = generateRandomWizard().eyesColor;
  eyesColorInput.value = wizardEyes.style.fill;
};

var changeFireballColor = function () {
  fireballColorInput.value = setupFireball.style.backgroundColor = WIZARD_FIREBALL_COLORS[getRandomItem(WIZARD_FIREBALL_COLORS)];
};

wizardCoat.addEventListener('click', function () {
  changeCoatColor();
});

wizardEyes.addEventListener('click', function () {
  changeEyesColor();
});

setupFireball.addEventListener('click', function () {
  changeFireballColor();
});
