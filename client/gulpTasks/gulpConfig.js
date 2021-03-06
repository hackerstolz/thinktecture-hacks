'use strict';

const path = require('path');

const currentPackage = require('../package.json');

const config = {
    name: '{Hacks}',
    module: currentPackage.name,
    version: currentPackage.version,
    base: 'src',
    index: 'src/index.html',
    systemJs: 'src/systemSetup.js',
    sources: {
        scripts: [
            'src/**/*.ts',
            'typings/index.d.ts'
        ],
        templates: [
            'src/**/*.html'
        ],
        styles: {
            all: ['src/less/**/*.less'],
            main: [
                'src/less/app.less'
            ]
        },
        assets: [
            'src/assets/**/*'
        ],
        buildAssets: {
            cordovaJs: 'resources/cordova/cordova.js',
            config: 'resources/cordova/config.xml',
            hooks: 'resources/cordova/hooks/**/*',
            electron: 'resources/electron/**/*',
            icons: 'resources/icons/*',
            iconsFolder: 'resources/icons'
        }
    },
    targets: {
        build: 'build',
        lib: 'build/lib',
        assets: 'build/assets',
        cordova: 'dist/mobile',
        electron: 'dist/desktop'
    },
    typescript: {
        target: 'ES5',
        module: 'system',
        moduleResolution: 'node',
        declaration: false,
        sourceMap: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        noImplicitAny: false
    },
    browsers: ['IE >= 11', 'last 2 versions'],
    browserSync: {
        // Turn off cross-device sync features
        ghostMode: false,
        open: true,
        server: {
            baseDir: './build',
            middleware: {}
        },
        port: 8000
    },
    vendorScripts: [
        'node_modules/core-js/client/shim.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
    ],
    nodeModules: [
        '@angular',
        'rxjs'
    ]
};

config.injectables = [
    ...config.vendorScripts.map(v => path.join(config.targets.lib, v.split('/').slice(-1)[0])),
    path.join(config.targets.build, config.systemJs.split('/').slice(-1)[0]),
    path.join(config.targets.build, '**/*.css')
];

module.exports = config;
