module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:6666",
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
