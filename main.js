const core = require('@actions/core');
const github = require('@actions/github');

console.log(github.context);
const pullRequestBody = github.context.payload.pull_request.body

pullRequestBody
  .split('\n')
  .filter((line) => line.startsWith("/set-var"))
  .map((line) => line.replace("/set-var ", ''))
  .forEach((line) => {
    line.replace(/\r$/, '');
    const [key, value] = line.split('=');
    core.setOutput(key, value);
  });
