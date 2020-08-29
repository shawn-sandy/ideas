const fetch = require('node-fetch')
const flatcache = require('flat-cache')
const path = require('path')

function getCacheKey () {
  const date = new Date()
  return `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`
}

module.exports = async function () {
  const cache = flatcache.load('gitstatus.json', path.resolve('./system/_data'))
  const key = getCacheKey()
  const cachedData = cache.getKey(key)
  if (!cachedData) {
    console.log('Fetching new github stargazers count…')

    // GitHub API: https://developer.github.com/v3/repos/#get
    const newData = await fetch('https://api.github.com/repos/11ty/eleventy')
      .then((res) => res.json())
      .then((json) => {
        return {
          stargazers: json.stargazers_count
        }
      })

    cache.setKey(key, newData)
    cache.save()
    return newData
  }

  return cachedData
}
