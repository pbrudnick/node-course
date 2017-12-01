const request = require('request');

// docs: https://any-api.com/github_com/github_com/docs/
function getNodeRepos(callback) {
  const options = {
    url: "https://api.github.com/orgs/nodejs/repos",
    headers: {
      'User-Agent': 'node-course'
    }
  }
  request.get(options, (err, response, body) => {
    if (err) return callback(err, null);
    if (response.statusCode == 200) {
      return callback(null, JSON.parse(body));
    }
    callback(null, []);
  });
}

getNodeRepos((err, repos) => {
  console.log(repos.map(r => {
    return {"name": r.name, "clone_url": r.clone_url};
  }));
});