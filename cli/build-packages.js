import inquirer from 'inquirer';
import { readdir } from 'fs/promises';
import { __packagesDir } from "./script-constants.js";
import { exec } from 'child_process';

console.log('Package Builder');

try {
  const packages = await readdir(__packagesDir);

  if (packages.length > 0) {

    const questions = [
      {
        type: 'list',
        name: 'package',
        message: 'Select Packages to build:',
        choices: packages,
        filter(val) {
          return val;
        },
      }
    ];

    inquirer.prompt(questions).then((res) => {
      exec(`cd ${__packagesDir}\\${res.package} && npm run builder`, (err, stdout, stderr) => {
        if (err) {
          //some err occurred
          console.error(err)
        } else {
          // the *entire* stdout and stderr (buffered)
          console.log(`Job: ${stdout}`);
          console.log(`Result: ${stderr}`);

          console.log('Build OK');
        }
      });
    });

  } else {
    console.log('No packages');
  }

} catch (err) {
  console.error(err);
}