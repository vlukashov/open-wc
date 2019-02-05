const Generator = require('yeoman-generator');

module.exports = class GeneratorStarterApp extends Generator {
  default() {
    this.composeWith(require.resolve('../building-webpack'), this.config.getAll());
    this.composeWith(require.resolve('../linting'), this.config.getAll());
    this.composeWith(require.resolve('../scaffold-testing'), this.config.getAll());
  }

  writing() {
    // extend package.json
    this.fs.extendJSON(
      this.destinationPath('package.json'),
      this.fs.readJSON(this.templatePath('_package.json')),
    );

    this.fs.copyTpl(
      this.templatePath('static/**/*'),
      this.destinationPath(),
      this.config.getAll(),
      undefined,
      { globOptions: { dot: true } },
    );
  }
};
