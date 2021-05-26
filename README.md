# freiheit.com website generated with HUGO

## Local development

### installing
    $ npm install

### run locally
    $ hugo server -D --disableFastRender

### build
    $ hugo --minify -e production

## Deployment

The generated page is published as a Github page in the branch `gh-pages`.
A Github workflow is defined in `.github/workflows/gh-pages.yml`.
Unfortunately our current plan at Github does not support the execution of Github Actions.
Otherwise every push to `master` would trigger a rebuild of the website.

As an alternative we use `act` (https://github.com/nektos/act) to execute the pipeline locally.

### Preparation

* Install `act` by following the instructions on https://github.com/nektos/act
* Create a Github token at https://github.com/settings/tokens that grands access to private repositories.

### Publish

    $ act --secret GITHUB_TOKEN=[YOUR_TOKEN] deploy

You have to select the medium installation on the first execution of `act`.
