window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Mostafa Anwar'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/black.png'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/sagor1.jpg'
    }
  }
}
