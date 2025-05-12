module.exports = {
  images: {
    domains: ['images.unsplash.com', 'placehold.co'], // Ensure all required domains are listed
    dangerouslyAllowSVG: true, // Enable SVG support
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
