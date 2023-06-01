const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  assetsDir: './',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/usagimemo' : '/',
  outputDir: 'docs',

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
