/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "*",
      "ca.slack-edge.com",
      "codeit-images.codeit.com",
      "yt3.googleusercontent.com",
      "codeit.kr",
      "testing-library.com",
      "www.innoforest.co.kr",
      "opengraph.githubassets.com",
      "static.codenary.co.kr",
      "imgorg.catch.co.kr",
      "wormwlrm.github.io",
      "rodrigovallades.gallerycdn.vsassets.io",
      "i.ytimg.com",
      "img1.daumcdn.net",
      "signpen.net",
      "img.ruliweb.com",
      "www.yupdduk.com",
    ],
  },
};

module.exports = nextConfig;
