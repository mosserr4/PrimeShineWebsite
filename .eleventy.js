module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
