const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**npx gulp init
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './static/css';
uswds.paths.dist.sass = './sass';
uswds.paths.dist.img = './static/img';
uswds.paths.dist.fonts = './static/fonts';
uswds.paths.dist.js = './static/js';

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;