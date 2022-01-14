# npm install vs npm ci

## Why

Install packages and it's dependencies

## diff

- The project must have an existing package-lock.json or npm-shrinkwrap.json.

- If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.

- npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.

- If a node_modules is already present, it will be automatically removed before npm ci begins its install.

- It will never write to package.json or any of the package-locks: installs are essentially frozen.

### Personal Insights

npm install is for install a package and update the package-lock.json, but npm ci is just to install all packages for the entire project and is used for the ci and deployment
