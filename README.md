# `@techno-express/action-environment-info`
### An Action to create output variables available at future stages of the workflow detailing the runner environment (platform, architecture, etc.)
> When running a matrix of platforms and architectures in a workflow, for example when packaging a node-gyp project for various different targets, this action saves the runner environment (platform, architecture. etc.) to output variables. These can be used at future stages of the workflow, for example if you want to save assets/artifacts with some of the platform information.

## Outputs
A list of current outputs saved by the action. These are accessed by: `steps.{id}.outputs.{name}`

- `steps.{id}.outputs.platform`: Platform name
- `steps.{id}.outputs.arch`: System architecture
- `steps.{id}.outputs.release`: OS Release
- `steps.{id}.outputs.version`: OS Version
- `steps.{id}.outputs.hostname`: Machine Hostname

## Usage

```workflow
name: Example workflow
on: push

jobs:
  some_matrix_of_jobs:
    runs-on: ${{ matrix.os }}
    needs: [create_release]

    strategy:
      matrix:
        os: [macOS-latest, windows-2019, ubuntu-18.04]
        node: [ '12', '13' ]

    steps:
      - name: Get runner environment variables
        id: runner
        uses: techno-express/action-environment-info@1

      - name: Save something with environment name
        id: save-asset
        with:
          name: ${{ format('v{0}-{1}-{2}-{3}-{4}.tar.gz', steps.runner.outputs.platform, steps.runner.outputs.arch, steps.runner.outputs.release, steps.runner.outputs.version, steps.runner.outputs.hostname) }}
```

## License
This project is released under the [MIT License](LICENSE), as is this project.
