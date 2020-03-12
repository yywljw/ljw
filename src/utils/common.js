//从地址栏获取参数
export function getUrlParam (key) {
  // 获取参数
  var url = window.location.search
  // 正则筛选地址栏
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  // 匹配目标参数
  var result = url.substr(1).match(reg)
  // 返回参数值
  return result ? decodeURIComponent(result[2]) : null
}
