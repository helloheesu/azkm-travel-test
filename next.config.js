/** @type {import('next').NextConfig} */

const oldCharacterNameMap = {
  hiff: 'hief',
  cinamon: 'cinnamong',
  coby: 'kobi',
};
const redirectList = Object.entries(oldCharacterNameMap).map(
  ([oldName, newName]) => ({
    source: `/${oldName}`,
    destination: `/${newName}`,
    permanent: true,
  })
);

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
  async redirects() {
    return redirectList;
  },
};

module.exports = nextConfig;
