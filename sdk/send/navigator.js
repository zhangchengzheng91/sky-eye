export function navigatorSend(data) {
  const url = 'http://127.0.0.1:7009/api/collect'
  const headers = {
    type: 'application/json',
  }
  const blob = new Blob([JSON.stringify(data)], headers);
  navigator.sendBeacon(url, JSON.stringify(blob));
}
