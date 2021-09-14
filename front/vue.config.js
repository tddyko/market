module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:6666",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    compress: true,
    disableHostCheck: true,
  },
  outputDir: "../back/public",
  transpileDependencies: ["vuetify"],
};
