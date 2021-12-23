
const builder = require('electron-builder');
const Platform = builder.Platform;

function getCurrentPlatform() {
    switch(process.platform) {
        case 'win32': {
            return Platform.WINDOWS;
        }
        case 'darwin': {
            return Platform.MAC;
        }
        case 'linux': {
            return Platform.linux;
        }
        default: {
            console.error('Cannot resolve current platform!');
            return undefined;
        }
    }
}

builder.build( {
    targets: (process.argv[2] != null && Platform[process.argv[2]] != null ? Platform[process.argv[2]] : getCurrentPlatform()).createTarget(),
    config: {
        appId: 'nexuslauncher',
        productName: 'Nexus Launcher',
        artifactName: '${productName}.${ext}',
        copyright: 'Copyright © 2021 Nexus',
        directories: {
            buildResources: 'assets',
            output: 'dist'
        },
        win: {
            target: [
                {
                    target: 'nsis',
                    arch: 'x64'
                }
            ],
            icon: 'app/assets/images/icons/icon.ico'
        },
        nsis: {
            oneClick: false,
            perMachine: true,
            allowElevation: true,
            installerIcon: 'app/assets/images/icons/icon.ico',
            uninstallerIcon: 'app/assets/images/icons//icon.ico',
            allowToChangeInstallationDirectory: true
        },
        mac: {
            target: 'dmg',
            category: 'public.app-category.games',
            icon: 'app/assets/images/icons/icon.icns'
        },
        linux: {
            target: 'AppImage',
            maintainer: 'Nokaki',
            vendor: 'Nexus',
            synopsis: 'Nexus Launcher',
            description: 'Nexus Launcher',
            category: 'Game'
        },
        compression: 'maximum',
        files: [
            '!{dist,.gitignore,.vscode,docs,dev-app-update.yml,.travis.yml,.nvmrc,.eslintrc.json,build.js}'
        ],
        asar: true
    }
}).then(() => {
    console.log('Build complete!');
}).catch(err => {
    console.error('Error during build!', err);
})