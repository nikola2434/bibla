/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: true,
  experimental: { esmExternals: true },

  images: {
    domains: [
      "knijky.ru",
      "static.insales-cdn.com",
      "img4.labirint.ru",
      "s1.livelib.ru",
      "cdn1.ozone.ru",
      "img3.labirint.ru",
      "m.media-amazon.com",
      "fantlab.ru",
      "smallweb.ru",
      "avatars.mds.yandex.net",
      "habrastorage.org",
      "images.gr-assets.com",
      "i.pinimg.com",
      "booksbonesbuffy.com",
      "cdn1.ozone.ru",
      "horrorzone.ru",
      "ic.pics.livejournal.com",
      "static01.nyt.com",
      "upload.wikimedia.org",
      "anylang.net",
      "images-na.ssl-images-amazon.com",
      "img-gorod.ru",
      "m.media-amazon.com",
      "pictures.abebooks.com",
      "localhost",
      "77.223.98.116",
      "bibla.site",
      "www.bibla.site",
    ],
  },
};

module.exports = nextConfig;
