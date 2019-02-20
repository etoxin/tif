(function () {
    'use strict';

    const tif = (condition, expression) => {
        return condition ? expression : '';
    }

    if (typeof module !== 'undefined' && module.exports) {
		tif.default = tif;
		module.exports = tif;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define('tif', [], function () {
			return tif;
		});
	} else {
		window.tif = tif;
	}
})();