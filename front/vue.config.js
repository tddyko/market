module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  outputDir: "../back/public",
  transpileDependencies: ["vuetify"],
};
