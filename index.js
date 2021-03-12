const os = require('os');
const core = require('@actions/core');

try {
  let version = os.release();
  core.setOutput("platform", process.platform);
  core.setOutput("arch", process.arch);
  core.setOutput("release", version);
} catch (error) {
  core.setFailed(error.message);
}
