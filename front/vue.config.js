module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "https://nowait.pw",
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
