module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    },
    outputDir: '../back/public',
    transpileDependencies: [
      'vuetify'
    ]
}
