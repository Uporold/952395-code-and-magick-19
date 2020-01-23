'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_DISTANCE = 50;
var FONT_GAP = 16;
var GAP = 10;
var BAR_START_Y = 240;
var MESSAGE_GAP_Y = 30;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomSaturation = function () {
  return 'hsl(240, ' + 100 * Math.random() + '%, 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var maxTime = getMaxElement(times);
  ctx.font = '16px PT Mono';

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomSaturation();
    }

    ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH + BAR_DISTANCE) * i, BAR_START_Y, BAR_WIDTH, -((BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_DISTANCE + BAR_WIDTH) * i, BAR_START_Y + FONT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_WIDTH + (BAR_DISTANCE + BAR_WIDTH) * i, (BAR_START_Y - GAP - (BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillText('Ура вы победили!', CLOUD_X + 0.5 * BAR_WIDTH, CLOUD_Y + MESSAGE_GAP_Y);
    ctx.fillText('Список результатов:', CLOUD_X + 0.5 * BAR_WIDTH, CLOUD_Y + MESSAGE_GAP_Y + FONT_GAP);
  }
};
