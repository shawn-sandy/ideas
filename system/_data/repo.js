const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {

  try {
    // https://developer.github.com/v3/repos/#get
  // let url = "https://api.npms.io/v2/package/react";
  let url = "https://api.github.com/repos/shawn-sandy/ideas";
  let json = await Cache(url, {
    duration: "1s",
    type: "json"
  });
  return json
  } catch (error) {
    console.log(error);
  }

};
