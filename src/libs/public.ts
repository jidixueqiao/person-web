// 判断是否为手机
function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

export { isMobile }
