const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

/**
 * Redoc does not support webpack 5 so we need to add some polyfills
 *
 * https://github.com/Redocly/redoc/issues/1584#issuecomment-840559282
 */
module.exports = function (context, options) {
	return {
		name: "configure-webpack-with-redoc-plugin",
		configureWebpack(config, isServer, utils) {
			const { getCacheLoader } = utils;
			return {
				plugins: [
					new webpack.DefinePlugin({
						"process.versions.node": JSON.stringify(
							process.versions.node || "0.0.0"
						),
					}),
					new NodePolyfillPlugin({}),
				],
				resolve: {
					fallback: {
						fs: false,
					},
				},
			};
		},
	};
};
