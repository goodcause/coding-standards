# Good Cause Coding Standards <!-- omit in toc -->

This repository contains the rules for [PHP_CodeSniffer (PHPCS)](https://github.com/squizlabs/PHP_CodeSniffer). These rules exist to help maintain consistency, readability, and maintainability across our projects.

Additionally, this repository includes an `.editorconfig` file that can be manually moved into each project to maintain consistent coding styles across different editors and IDEs. See [EditorConfig.org](https://editorconfig.org/) for more information.

> :wave: **Note:** These standards are installed by default in the [wp-project](https://github.com/goodcause/wp-project) repository.

## Table Of Contents <!-- omit in toc -->
- [Contributing](#contributing)
- [Requirements](#requirements)
- [PHP\_CodeSniffer (PHPCS)](#php_codesniffer-phpcs)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Standards File](#standards-file)
- [Editor Config](#editor-config)
- [License](#license)

## Contributing

To learn more about contributing, please see the [CONTRIBUTING.md](./CONTRIBUTING.md).

## Requirements

- [PHP](https://www.php.net/) >= 7.0
- [Composer](https://getcomposer.org/) >= 2.0.0

## PHP_CodeSniffer (PHPCS)

### Installation

To use the PHPCS standards, you will need to install them using Composer. This package is not on [Packagist](https://packagist.org/) so you will need to add this GitHub repository to the `repositories` property:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/goodcause/coding-standards.git"
    }
  ]
}
```

Then run the following command in your project directory to install the latest verson:

```bash
composer require goodcause/coding-standards dev-main --dev
```



This will install the latest compatible versions of [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer), [PHPCS Standards Composer Installer](https://github.com/PHPCSStandards/composer-installer), [WPCS](https://github.com/WordPress/WordPress-Coding-Standards) and [PHPCompatibilityWP](https://github.com/PHPCompatibility/PHPCompatibilityWP).

### Usage

Run the following command to run the standards:

```bash
vendor/bin/phpcs --standard=GoodCause-WordPress-Default .
```

#### Standards File

If you want to customise these rules, you can create your own [configuration file](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage#using-a-default-configuration-file) (e.g. `.phpcs.xml`):


```xml
<?xml version="1.0"?>
<ruleset name="Ruleset-Name">
  <description>Ruleset description</description>

	<!-- Minimum PHP version for PHPCompatibilityWP -->
  <config name="testVersion" value="7.4-" />

  <!-- Use GoodCause-WordPress-Default -->
  <rule ref="GoodCause-WordPress-Default"/>
</ruleset>
```

You can then reference this file when running `phpcs`:

```bash
vendor/bin/phpcs --standard=.phpcs.xml .
```

For more information on customising PHPCS, please see the [Usage](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Usage) and [Advanced Usage](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage) sections of the documentation.

## Editor Config

Copy the `.editorconfig` file from this repository into the root of your project directory. Most editors and IDEs support `.editorconfig` files and will start applying the coding standards defined in the file automatically once it is present in your project directory. If your editor or IDE does not support .editorconfig files, you may need to install a plugin or extension to enable support.

See [EditorConfig.org](https://editorconfig.org/) for more information.

## License

Licensed under [GPL-2.0+](./LICENSE).