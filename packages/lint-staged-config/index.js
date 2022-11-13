/* eslint-disable sonarjs/no-duplicate-string */
module.exports = {
  'CHANGELOG.md': ['prettier --cache --write'],
  '!(CHANGELOG).md': ['prettier --cache --write', 'markdownlint'],
  '*.{js,jsx,ts,tsx}': ['prettier --cache --write', 'eslint --cache --fix'],
  '*.json': ['prettier --cache --write'],
  '*.{css,scss}': ['prettier --cache --write', 'stylelint --cache --fix'],
};
