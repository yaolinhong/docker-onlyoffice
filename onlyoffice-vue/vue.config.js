/**
 * vue.config.js
 * https://cli.vuejs.org/zh/config/
 */

// 默认的接口前缀，在 .env 中设置
const apiPrefix = `^${process.env.VUE_APP_API_PREFIX}`
// Onlyoffice 接口前缀，在 .env 中设置
const onlyofficeApiPrefix = `^${process.env.VUE_APP_ONLYOFFICE_API_PREFIX}`

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  lintOnSave:false, //关闭eslint检查
  devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false	//不显示错误
    },
    port: process.env.VUE_APP_PORT,
    proxy: {
      [apiPrefix]: {
        target: 'http://127.0.0.1:3000',
        ws: false,
        changeOrigin: true,
        logLevel: 'debug'
      },
      [onlyofficeApiPrefix]: {
        target: 'http://127.0.0.1:8071',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          [onlyofficeApiPrefix]: ''
        }
      }
    }
  },
  chainWebpack: config => {}
}
