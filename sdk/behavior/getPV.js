/*
* 上报 url 变化
* */
import send from '../send/index'

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
  }
})(window.history);

function generateUUID() {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var time = new Date().getTime()
    var r = Math.random() * 16;
    r = (time+r)%16 | 0
    return  (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  localStorage.uuid = uuid
  return uuid
}
function sendPv() {
  const uuid = localStorage.uuid || generateUUID()
  const body = {
    type: 'pv',
    href: window.location.href,
    uuid,
  }
  send(body)
}

history.onpushstate = sendPv

history.onreplaceState = sendPv
