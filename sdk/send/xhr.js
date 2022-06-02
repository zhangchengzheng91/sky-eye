export function xhr(data) {
  // 未兼容 ActiveXObject
  const xhr = new XMLHttpRequest();
  const url = 'http://127.0.0.1:7009/api/collect'
  xhr.open('post', url)
  xhr.send(data)
}
