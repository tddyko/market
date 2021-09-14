module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:6666:6666/api",
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
