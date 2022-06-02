import {navigatorSend} from './navigator'
import {xhr} from './xhr'
import {img} from './img'

export default function send(data) {
  if (navigator.sendBeacon) {
    navigatorSend(data)
    return
  }
  if (XMLHttpRequest) {
    xhr(data)
    return
  }
  img(data)
}
