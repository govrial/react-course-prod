import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildDevServer from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths: {build, entry, html}, isDev} = options;

    return {
        mode: mode,
        entry: entry,
        module: {
            rules: buildLoaders(),
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}