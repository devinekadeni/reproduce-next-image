const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextBuildId = require('next-build-id');

const BASE_URL = 'http://localhost:3000'
const BASE_PREFIX_FOR_APP = 'flight'

const REWRITE_CONFIG = {
  BASE_PREFIX: {
    source: `/${BASE_PREFIX_FOR_APP}/_next/:path*`,
    destination: BASE_URL + '/_next/:path*',
  },
  PUBLIC_ASSETS: {
    source: `/${BASE_PREFIX_FOR_APP}/_next/assets/:path*`,
    destination: '/assets/:path*',
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.jsx', 'page.js'],
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    localeDetection: false, // using middleware to determine locale
  },

  // TODO: Uncomment this to show the error
  assetPrefix: '/' + BASE_PREFIX_FOR_APP, // [1]
  images: {
    path: `/${BASE_PREFIX_FOR_APP}/_next/image`, // [1]
  },
  async rewrites() {
    return [
      REWRITE_CONFIG.BASE_PREFIX,
      REWRITE_CONFIG.PUBLIC_ASSETS,
    ];
  },
  generateBuildId: () => BASE_PREFIX_FOR_APP + '__' + nextBuildId.sync({ dir: __dirname }), // [2]
  [PHASE_DEVELOPMENT_SERVER]: {
    async rewrites() {
      return [
        REWRITE_CONFIG.BASE_PREFIX,
        REWRITE_CONFIG.PUBLIC_ASSETS,
      ];
    },
  },
}

module.exports = nextConfig
