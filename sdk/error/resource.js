/*
* 资源监控
* */
import send from '../send/index'

window.addEventListener('error', e => {
  const target = e.target;
  if (!target) return;

  if (target.src || target.href) {
    const url = target.src || target.href;
    const body = {
      url,
      type: 'error',
      subType: 'resource',
      startTime: e.timeStamp,
      html: target.outerHTML,
      resourceType: target.tagName,
      paths: e.path.map(item => item.tagName).filter(Boolean),
      pageURL: window.location.href
    }
    send(body)
  }
}, true);
