const { defineConfig } = require("vite");
const { merge } = require("lodash");

module.exports = (config: any) => {
  let viteConfig = defineConfig({
    server: {
      fs: {
        allow: ["/opt/node_modules", "/opt/app"],
      },
    },
  });

  let mergedConfig = merge(config, viteConfig);

  return mergedConfig;
};
