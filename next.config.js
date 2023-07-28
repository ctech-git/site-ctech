import { i18n } from 'next-i18next';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'pt', // Idioma padrão (default)
    locales: ['en', 'pt', 'es'], // Lista dos idiomas que deseja suportar
  },
};

module.exports = nextConfig;
