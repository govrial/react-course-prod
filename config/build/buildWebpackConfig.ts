import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths: {build, entry, html}} = options;

    return {
        mode: mode,
        entry: entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: build,
            clean: true,
        },
        plugins: buildPlugins(options)
    }
}