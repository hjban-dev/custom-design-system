import run from '@custom-design-system/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})