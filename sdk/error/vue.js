/*
*
* */
import send from '../send/index'


window.onVueError = function(err, instance, info) {
  const {message, filename, lineno, colno, error} = err
  const {name, stack} = error || {}
  const stackS = err.stack.toString()
  const body = {
    message,
    source: filename,
    type: 'error',
    lineno,
    colno,
    name,
    stack: stackS,
  }
  send(body)
}
