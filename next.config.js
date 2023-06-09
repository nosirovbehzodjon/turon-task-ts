/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "files.cinerama.uz",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
    webpack: (config, { isServer }) => {
        const prefix = config.assetPrefix ?? config.basePath ?? "";
        config.module.rules.push({
            test: /\.mp4$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        publicPath: `${prefix}/_next/static/media/`,
                        outputPath: `${isServer ? "../" : ""}static/media/`,
                        name: "[name].[hash].[ext]",
                    },
                },
            ],
        });

        return config;
    },
    videos: withVideos(),
};

module.exports = nextConfig;
