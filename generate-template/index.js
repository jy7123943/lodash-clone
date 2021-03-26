const inquirer = require('inquirer');
const chalk = require('chalk');
const sh = require('shelljs');

function FormatCategory(category) {
  const firstChar = category.trim().slice(0, 1);
  const restChars = category.trim().slice(1);

  return firstChar.toUpperCase() + restChars.toLowerCase();
}

(async function command() {
  try {
    const { category, methodName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'category',
        message: `Lodash method ${chalk.red('카테고리')}를 입력하세요.\n(e.g. ${chalk.cyan('Array')}, ${chalk.cyan('Collection')}):`,
      },
      {
        type: 'input',
        name: 'methodName',
        message: `${chalk.red('method 이름')}을 입력하세요.\n(e.g. ${chalk.cyan('filter')}, ${chalk.cyan('groupBy')}):`,
      },
    ]);

    if (category === '' || methodName === '') {
      throw new Error(`${chalk.red('입력값이 없습니다.')}`);
    }

    sh.exec(
      `npx hygen make main --category ${category} --methodName ${methodName}`,
    );
    sh.exec(
      `npx hygen make test --category ${category} --methodName ${methodName}`,
    );
  } catch (e) {
    console.error(e);
  }
})();
