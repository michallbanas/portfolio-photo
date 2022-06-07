const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      baseUrl: "http://localhost:3000",
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
