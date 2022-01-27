/* eslint-disable no-useless-escape */
import { readdir, mkdir, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __componentsDir = dirname(__filename).replace('cli', 'src/lib/components');
const __packagesDir = dirname(__filename).replace('cli', 'packages');
 
console.log('Hi, welcome to package generator');

try {
	const components = await readdir(__componentsDir);
	const packages = await readdir(__packagesDir);
	const possibleNewPackages = components.filter(option => !packages.includes(option));

	if(possibleNewPackages.length === 0){
		const questions = [
			{
				type: 'confirm',
				name: 'newPackage',
				message: 'generate new package?',
				default: false,
			},
			{
				type: 'list',
				name: 'component',
				message: 'What component do you want to generate?',
				choices: ['Test'],
				filter(val) {
					return val;
				},
			},
			{
				type: 'input',
				name: 'description',
				message: 'Add a description',
			},
			{
				type: 'input',
				name: 'author',
				message: 'Who creates it?',
			},
		];
	
		inquirer.prompt(questions).then(async ({component, description, author}) => {
			await mkdir(`${__packagesDir}/${component}`);

			const packageJson = {
				name: `fw-${component.toLowerCase()}`,
				version: '0.0.1',
				description,
				main: 'index.js',
				type: 'module',
				scripts: {
					builder: 'node esbuild.config.js'
				},
				keywords: [],
				author,
				license: 'ISC'
			};

			await writeFile(`${__packagesDir}/${component}/package.json`, JSON.stringify(packageJson, null, 4));
			
			const esBuildCfg = `import esbuild from"esbuild";import path from"path";import sass from"sass";const sassPlugin=({verbose:s=!1}={})=>({name:"sass",setup(e){e.onResolve({filter:/.scss$/},e=>{s&&console.log(e.resolveDir);let t={path:path.resolve(e.resolveDir,e.path),resPath:e.resolveDir};return{path:JSON.stringify(t),namespace:"sass"}}),e.onLoad({filter:/.*/,namespace:"sass"},e=>{let{path:t,resPath:r}=JSON.parse(e.path),o=sass.renderSync({file:t});return s&&console.log(e),{resolveDir:r,contents:o.css.toString(),loader:"css"}})}});esbuild.build({define:{"process.env.NODE_ENV":'"production"'},loader:{".js":"jsx",".ts":"tsx"},minify:!0,sourcemap:!0,splitting:!0,keepNames:!0,format:"esm",target:["esnext"],logLevel:"info",entryPoints:["../../src/lib/components/${component}/index.tsx"],bundle:!0,outdir:"./lib",plugins:[sassPlugin()]}).catch(()=>process.exit(1));`;
			
			await writeFile(`${__packagesDir}/${component}/esbuild.config.js`, esBuildCfg);
		});
	} else {
		console.log('No new components to create');
	}
} catch (err) {
	console.error(err);
}