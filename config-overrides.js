const path = require("path");

module.exports = {
  paths: (paths, _) => {
    paths.appIndexJs = path.resolve(__dirname, "client/index.tsx");
    paths.appSrc = path.resolve(__dirname, "client");
    paths.appBuild = path.resolve(__dirname, "dist");
    paths.appTypeDeclarations = path.resolve(
      __dirname,
      "client/react-app-env.d.ts"
    );

    return paths;
  },
};
