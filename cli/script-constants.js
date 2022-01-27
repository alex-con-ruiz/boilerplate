import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __componentsDir = dirname(__filename).replace('cli', 'src/lib/components');
const __packagesDir = dirname(__filename).replace('cli', 'packages');

export {__componentsDir, __packagesDir}