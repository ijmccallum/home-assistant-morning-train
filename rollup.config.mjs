import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";
import filesize from "rollup-plugin-filesize";
import typescript from "@rollup/plugin-typescript";
import serve from "rollup-plugin-serve";
import css from "rollup-plugin-import-css";

const production = !process.env.ROLLUP_WATCH;

const serveOptions = {
  contentBase: ["./dist"],
  host: "0.0.0.0",
  port: 4000,
  allowCrossOrigin: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export default {
  input: "src/main.ts",
  output: [
    {
      file: "dist/morning-train-card.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [
    json(),
    css(),
    nodeResolve(),
    filesize(),
    typescript(),
    ...(production ? [terser()] : [serve(serveOptions)]),
  ],
};
