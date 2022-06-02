/*
* 获取不到 source、lineno、colno， 需要再调研
* */
import send from '../send/index'

window.addEventListener('unhandledrejection', e => {
  const {reason, filename, lineno, colno, error, type} = e
  const {stack} = error || {}
  const body = {
    message: reason,
    source: filename,
    lineno,
    colno,
    name: type,
    stack,
  }
  send(body)
})
