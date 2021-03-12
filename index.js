const os = require('os');
const core = require('@actions/core');
const macosRelease = require('macos-release');

try {
  let version = (process.platform === 'darwin') ? macosRelease(version).version : os.release();
  core.setOutput("platform", process.platform);
  core.setOutput("arch", process.arch);
  core.setOutput("release", version);
} catch (error) {
  core.setFailed(error.message);
}
