'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  var xhrHandler = function (onLoad, onError) {
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  window.load = function (onLoad, onError) {
    xhrHandler(onLoad, onError);

    xhr.timeout = TIMEOUT_IN_MS; // 10s

    xhr.open('GET', URL);
    xhr.send();
  };
  var DESTINATION = 'https://js.dump.academy/code-and-magick/';
  window.save = function (data, onLoad, onError) {
    xhrHandler(onLoad, onError);
    xhr.open('POST', DESTINATION);
    xhr.send(data);
  };
})();
