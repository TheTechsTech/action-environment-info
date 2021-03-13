const os = require('os');
const core = require('@actions/core');
const macosRelease = require('macos-release');
const winVersion = require('win-version');
const releaseInfo = require('linux-release-info');

try {
  let version = os.release();
  let release = version;
  let platform = process.platform;
  if (platform === 'darwin') {
    version = macosRelease(release).version;
  } else if (platform === 'linux') {
    version = release.replace(/^(\d+\.\d+).*/, '$1');
    try {
      const infoSyncData = releaseInfo({ mode: 'sync' });
      version = infoSyncData.version_id;
    } catch (e) {
    }
  } else if (platform === 'win32') {
    version = winVersion(release).version;
  }

  core.setOutput("platform", platform);
  core.setOutput("arch", process.arch);
  core.setOutput("release", release);
  core.setOutput("version", version);
  core.setOutput("hostname", os.hostname());
} catch (error) {
  core.setFailed(error.message);
}
