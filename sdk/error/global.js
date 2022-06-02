/*
*  全局的 error 时间不能捕获资源错误，只能捕获 js 运行错误
* */
import send from '../send/index'

if (window.addEventListener) {
  window.addEventListener('error', function(e) {
    console.log('addEventListener.error=', error)
    const {message, filename, lineno, colno, error} = e
    const {name, stack} = error
    const body = {
      message,
      source: filename,
      type: 'error',
      lineno,
      colno,
      name,
      stack,
    }
  })
  send(body)
} else {
  window.onerror = function(message, source, lineno, colno, error) {
    const body = {
      type: 'error',
      message,
      source,
      lineno,
      colno,
      name: error.name,
      stack: error.stack,
    }
    send(body)
  }
}
