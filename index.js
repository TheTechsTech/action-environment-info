const os = require('os');
const core = require('@actions/core');
const macosRelease = require('macos-release');

try {
  let version = os.release();
  if (process.platform === 'darwin')
    version = macosRelease(version).version;
  core.setOutput("platform", process.platform);
  core.setOutput("arch", process.arch);
  core.setOutput("release", version);
} catch (error) {
  core.setFailed(error.message);
}
