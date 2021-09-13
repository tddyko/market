module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:80",
        changeOrigin: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
      compress: true,
      disableHostCheck: true,
  },
  outputDir: "../back/public",
  transpileDependencies: ["vuetify"],
};
