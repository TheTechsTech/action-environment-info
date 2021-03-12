const os = require('os');
const core = require('@actions/core');

try {
  core.setOutput("platform", process.platform);
  core.setOutput("arch", process.arch);
  core.setOutput("release", os.release());
} catch (error) {
  core.setFailed(error.message);
}
