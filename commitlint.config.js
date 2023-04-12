module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
			'phpcs',
			'editorconfig'
		]],
    'scope-empty': [0]
  }
};
