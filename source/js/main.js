import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {preloader} from './modules/preloader';
import {onPageClick} from './modules/page-controller';
// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
preloader();

document.addEventListener('click', onPageClick);
