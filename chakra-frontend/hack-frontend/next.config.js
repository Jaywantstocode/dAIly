const nextConfig = {
  reactStrictMode: true,
  loaders: [
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    }
  ],
}

module.exports = nextConfig
