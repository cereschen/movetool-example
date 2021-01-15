/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      '@vue/composition-api': 'VueCompositionAPI'
    }
  }
}