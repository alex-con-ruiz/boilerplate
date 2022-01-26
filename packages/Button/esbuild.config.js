import esbuild from 'esbuild';
import path from "path";
import sass from "sass";

const sassPlugin = ({ verbose = false } = {}) => {
  return {
    name: "sass",
    setup(build) {
      build.onResolve({ filter: /\.scss$/ }, (args) => {
        if (verbose) {
          console.log(args.resolveDir);
        }
        let paths = {
          path: path.resolve(args.resolveDir, args.path),
          resPath: args.resolveDir
        }
        return {
          path: JSON.stringify(paths),
          namespace: "sass",
        };
      });
      build.onLoad({ filter: /.*/, namespace: "sass" }, (args) => {
        let { path, resPath } = JSON.parse(args.path)
        let compiled = sass.renderSync({ file: path });
        if (verbose) {
          console.log(args);
        }
        return {
          resolveDir: resPath,
          contents: compiled.css.toString(),
          loader: "css",
        };
      });
    },
  };
}

esbuild.build(
  {
    define: { 'process.env.NODE_ENV': '"production"' },
    loader: {
      '.js': 'jsx',
      '.ts': 'tsx',
    },
    minify: true,
    sourcemap: true,
    splitting: true,
    keepNames: true,
    format: 'esm',
    target: ['esnext'],
    logLevel: "info",
    entryPoints: ["../../src/lib/components/Button/Button.jsx"],
    bundle: true,
    outdir: "./lib",
    plugins: [sassPlugin()],
  }
).catch(() => process.exit(1));