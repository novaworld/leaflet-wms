import { rollup } from "@ttungbmt/module-config"
import pkg from './package.json'

const input = './src/index.js'
const name = 'LeafletWMS'

const globals = {
    'leaflet': 'L'
}

rollup.setConfig({
    pkg,
})

export default [
    rollup(input, [
        [pkg.main, 'cjs'],
        [pkg.module, 'es'],
        [pkg.unpkg, 'umd', name, {globals}],
    ]),
    rollup(input, [pkg.unpkg, 'umd', name, {globals}], {minify: true}),
];
