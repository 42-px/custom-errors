import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"
import typescript from "@rollup/plugin-typescript"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import pkg from "./package.json"

const extensions = [".js", ".ts"]

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
        },
        {
            file: pkg["umd:main"],
            format: "umd",
            sourcemap: true,
            name: "CustomErrors",
        },
        {
            file: pkg["iife:main"],
            format: "iife",
            name: "CustomErrors",
            sourcemap: true,
        }
    ],
    plugins: [
        typescript({ tsconfig: "./tsconfig.json" }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            extensions,
        }),
        nodeResolve({ extensions }),
        commonjs({ extensions }),
        terser(),
    ]
}
