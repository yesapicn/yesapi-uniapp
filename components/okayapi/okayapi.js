let util = require('./md5.js')  

function enryptData (params) {
  const app = getApp()
  
  const OKAYAPI_APP_KEY = "填写您的appkey"
  const OKAYAPI_APP_SECRECT = "填写您的appsecret" // TODO：请勿对外暴露！！

  params['app_key'] = OKAYAPI_APP_KEY
  params['sign'] = '' // 屏蔽sign参数

  var sdic = Object.keys(params).sort();
  var paramsStrExceptSign = "";
  for (let ki in sdic) {
    paramsStrExceptSign += params[sdic[ki]];
  }

  var sign = util.hexMD5(paramsStrExceptSign + OKAYAPI_APP_SECRECT).toUpperCase();
  params['sign'] = sign;

  return params;
}

module.exports = {
  enryptData: enryptData
}  