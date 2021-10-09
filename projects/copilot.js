// fetch commits from github repo
// loop through commits
// if commit is a pull request, skip
// if commit is a merge commit, skip
// if commit is a commit, add to array
// return array

const fetch = require("node-fetch");

const fetchCommits = async (repo, branch = "main") => {
  const commits = await fetch(
    `https://api.github.com/repos/${repo}/commits?sha=${branch}`
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return commits;
};

fetchCommits("shawn-sandy/ideas")
  .then((commits) => {
    console.log(commits);
  })
  .catch((err) => console.log(err));
