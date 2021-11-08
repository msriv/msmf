module.exports = {
  images: {
    domains: ["", "secure.gravatar.com", "ui-avatars.com", "api.ms-mf.org"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
