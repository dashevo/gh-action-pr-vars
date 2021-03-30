const core = require('@actions/core');

const pullRequestBody = core.getInput('pull-request-body');

pullRequestBody
  .split('\n')
  .filter((line) => line.startsWith("/set-var"))
  .map((line) => line.replace("/set-var ", ''))
  .forEach((line) => {
    const [key, value] = line.split('=');

    core.setOutput(key, value);
  });

