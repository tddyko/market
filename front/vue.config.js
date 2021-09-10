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
  },
  outputDir: "../back/public",
  transpileDependencies: ["vuetify"],
};
