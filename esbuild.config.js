import chokidar from "chokidar";
import esbuild from 'esbuild';
/* import sassEs from "essass"; */
import serve, { error, log } from 'create-serve';
import sass from "sass";
import path from "path";

let SERVER_IS_RUNNING = false;

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

chokidar.watch('./src').on('all', () => {
  esbuild.build(
    {
      define: { 'process.env.NODE_ENV': '"production"' },
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
      minify: true,
      logLevel: "info",
      entryPoints: ["./src/index.tsx"],
      bundle: true,
      outfile: "public/main.js",
      plugins: [sassPlugin()],
      watch: true
    }
  ).then(() => {
    serve.update();
  }).catch(() => process.exit(1));

  if (!SERVER_IS_RUNNING) {
    serve.start({
      root: ".",
      live: true
    });

    SERVER_IS_RUNNING = true;
  }
});