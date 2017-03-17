const path = require('path');

module.exports = {
  entry: "./app/entry",
  // entry: ["./app/entry1", "./app/entry2"],
  /*entry: {
    a: './app/entry-a',
    b: ["./app/entry-bl", "./app/entry-b2"]
  }*/

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "bundle.js",
    // filename: "[name].js",
    // filename: "[chunkhash].js",

    publicPath: "/assets",
    // publicPath: "",
    // publicPath: "https://cdn.example.com/",

    library: "MyLibrary",

    libraryTarget: "umd",
    // libraryTarget: "umd2",
    // libraryTarget: "commonjs2",
    // libraryTarget: "commonjs-module",
    // libraryTarget: "commonjs",
    // libraryTarget: "amd",
    // libraryTarget: "this",
    // libraryTarget: "var",
    // libraryTarget: "assign",
    // libraryTarget: "window",
    // libraryTarget: "global",
    // libraryTarget: "jsonp",

    // pathinfo: true,

    // chunkFilename: "[id].js",
    // chunkFilename: "[chunkhash].js",

    // jsonpFunction: "myWebpackJsonp",

    // sourceMapFilename: "[file].map",
    // sourceMapFilename: "sourcemaps/[file].map",

    // devtoolModuleFilenameTemplate: "webpack:///[resource-path]?[hash]",

    // undNamedDefine: true,

    // crossOriginLoading: "use-credentials",
    // crossOriginLoading: "anonymous",
    // crossOriginLoading: false,

    // devtoolLineToLine: {
    //   test: /\.jsx$/
    // },

    // hotUpdateMainFilename: "[hash].hot-update.json",

    // hotUpdateChunkFilename: "[id].[hash].hot-update.js",

    // sourcePrefix: "\t",
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],

        issuer: {test, include, exclude},

        enforce: "pre",
        enforce: "post",

        loader: "babel-loader",

        options: {
          presets: ["es2015"]
        },
      },

      {
        test: "\.html$",

        use: [
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {

            }
          }
        ]
      },

      {oneOf: [/*rules*/]},

      {rules: [/*rules*/]},

      {resource: {and: [/*conditions*/]}},

      {resource: {or: [/*conditions*/]}},
      {resource: [/*conditions*/]},

      {resource: {not: /*condition*/}}
    ],

    // noParse: [
    //   /special-library\.js$/
    // ],

    // unknownContextRequest: ".",
    // unknownContextRecursive: true,
    // unknownContextRegExp: /^\.\/.*$/,
    // unknownContextCritical: true,
    // exprContextRequest: ".",
    // exprContextRegExp: /^\.\/.*$/,
    // exprContextRecursive: true,
    // exprContextCritical: true,
    // wrappedContextRegExp: /.*/,
    // wrappedContextRecursive: true,
    // wrappedContextCirtical: false,
  },

  resolve: {

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],

    extensions: [".js", ".json", ".jsx", ".css"],

    alias: {

      "module": "new-module",

      "only-module$": "new-module",

      "module": path.resolve(__dirname, "app/third/module.js"),
    },

    // alias: [
    //   {
    //     name: "module",

    //     alias: "new-module",

    //     onlyModule: true
    //   }
    // ],

    // symlinks: true,

    // descriptionFiles: ["package.json"],

    // mainFields: ["main"],

    // aliasFields: ["browser"],

    // enforceExtension: false,

    // moduleExtensions: ["-module"],
    // enforceModuleExtension: false,

    // unsafeCache: true,
    // unsafeCache: {},

    // cachePredicate: (path, request) => true,

    // plugins: []
  },

  performance: {
    hints: "warning",
    // hints: "error",
    // hints: false,
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith(".css") || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map",
  // devtool: "inline-source-map",
  // devtool: "eval-source-map",
  // devtool: "hidden-source-map",
  // devtool: "cheap-source-map",
  // devtool: "cheap-module-source-map",
  // devtool: "eval",

  context: __dirname,

  target: "web",
  // target: "webworker",
  // target: "node",
  // target: "async-node",
  // target: "node-webkit",
  // target: "electron-main",
  // target: "electron-renderer",
  // target: (compiler) => {},

  externals: ["react", /^@angular\//],
  // externals: "react",
  // externals: /^[a-z\-]+($|\/)/,
  // externals: {
  //   angular: "this angular",
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "react",
  //     root: "React"
  //   }
  // },
  // externals: (request) => {return "commonjs " + request}

  stats: "errors-only",
  // stats: {
  //   assets: true,
  //   colors: true,
  //   errors: true,
  //   errorDetails: true,
  //   hash: true,
  // },

  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },

  plugins: [],

  resolveLoader: {/*same as resolve*/},

  profile: true,

  bail: true,

  cache: false,

  watch: true,

  watchOptions: {
    aggregateTimeout: 1000,
    poll: true,
    poll: 500,
  },

  node: {},

  recordsPath: path.resolve(__dirname, "build/records.json"),
  recordsInputPath: path.resolve(__dirname, "build/records.json"),
  recordsQutputPath: path.resolve(__dirname, "build/records.json"),
}