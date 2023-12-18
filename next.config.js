/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')

// Remove this if you're not using Fullcalendar features

module.exports = {
  compiler: {
    styledComponents: {
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,

      // Enable SSR support
      ssr: true,

      // Optional
      fileName: false
    }
  },
  distDir: 'build-portal-information',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false
  },

  // ... rest of the configuration.
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  },
  webpack: config => {
    config.plugins.push(new webpack.DefinePlugin(process.env))

    return config
  }
}
