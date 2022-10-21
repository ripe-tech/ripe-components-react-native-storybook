const { getDefaultConfig } = require("metro-config");

const config = (async () => {
    const {
        resolver: { assetExts }
    } = await getDefaultConfig();
    return {
        transformer: {
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: true
                }
            })
        },
        resolver: {
            assetExts: [...assetExts, "svga"]
        }
    };
})();

module.exports = config;
