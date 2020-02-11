'use strict';

window.backend = (function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var DESTINATION = 'https://js.dump.academy/code-and-magick/';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  var xhrHandler = function (onLoad, onError, xhrObject) {
    xhrObject.responseType = 'json';
    xhrObject.addEventListener('load', function () {
      if (xhrObject.status === StatusCode.OK) {
        onLoad(xhrObject.response);
      } else {
        onError('Статус ответа: ' + xhrObject.status + ' ' + xhrObject.statusText);
      }
    });
    xhrObject.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhrObject.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhrObject.timeout + 'мс');
    });
  };

  return {
    load: function (onLoad, onError, xhrLoad) {
      xhrLoad = xhrLoad || new XMLHttpRequest();
      xhrHandler(onLoad, onError, xhrLoad);

      xhrLoad.timeout = TIMEOUT_IN_MS; // 10s

      xhrLoad.open('GET', URL);
      xhrLoad.send();
    },
    save: function (data, onLoad, onError, xhrSave) {
      xhrSave = xhrSave || new XMLHttpRequest();
      xhrHandler(onLoad, onError, xhrSave);
      xhrSave.open('POST', DESTINATION);
      xhrSave.send(data);
    }
  };
})();
