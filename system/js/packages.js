
module.exports = function ($json) {
if(!$json) {
  return {
    error: "Error"
  }
}
  return {
    name: json.name,
    version: json['dist-tags'].latest,
    description: json.description,
    homepage: json.homepage,
    author: json.author.name,
    authorEmail: json.author.email,
    license: json.license,
    readme: json.readme,
    keywords: json.keywords
  }

};
