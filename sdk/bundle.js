function navigatorSend(data) {
  const url = 'http://127.0.0.1:7009/api/collect';
  const headers = {
    type: 'application/json',
  };
  const blob = new Blob([JSON.stringify(data)], headers);
  navigator.sendBeacon(url, JSON.stringify(blob));
}

function send(data) {
  navigatorSend(data);
}

/*
* 上报 url 变化
* */

(function(history){
  var pushState = history.pushState;
  history.pushState = function() {
    if (typeof history.onpushstate == "function") {
      history.onpushstate(arguments);
    }
    return pushState.apply(history, arguments);
  };

  var replaceState = history.replaceState;
  history.replaceState = function() {
    if (typeof history.onreplaceState == "function") {
      history.onreplaceState(arguments);
    }
    return replaceState.apply(history, arguments);
  };
})(window.history);

function generateUUID() {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var time = new Date().getTime();
    var r = Math.random() * 16;
    r = (time+r)%16 | 0;
    return  (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  localStorage.uuid = uuid;
  return uuid
}
function sendPv() {
  const uuid = localStorage.uuid || generateUUID();
  const body = {
    type: 'pv',
    href: window.location.href,
    uuid,
  };
  send(body);
}

history.onpushstate = sendPv;

history.onreplaceState = sendPv;

function performanceObserver(list, observer) {
  console.log('list=', list);
  console.log('observer=', observer);
}

var po = new PerformanceObserver(performanceObserver);

po.observe({
  entryTypes: ['resource', 'navigation']
});

console.log('hello world');
