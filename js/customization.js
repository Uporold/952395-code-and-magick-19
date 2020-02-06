'use strict';
(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var coatColorInput = document.querySelector('input[name=coat-color]');
  var eyesColorInput = document.querySelector('input[name=eyes-color]');
  var fireballColorInput = document.querySelector('input[name=fireball-color]');

  var changeCoatColor = function () {
    wizardCoat.style.fill = window.randomize.generateRandomWizard().coatColor;
    coatColorInput.value = wizardCoat.style.fill;
  };

  var changeEyesColor = function () {
    wizardEyes.style.fill = window.randomize.generateRandomWizard().eyesColor;
    eyesColorInput.value = wizardEyes.style.fill;
  };

  var changeFireballColor = function () {
    fireballColorInput.value = setupFireball.style.backgroundColor = WIZARD_FIREBALL_COLORS[window.randomize.getRandomItem(WIZARD_FIREBALL_COLORS)];
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
})();
