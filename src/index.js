import * as pageLoad from './pageLoad.js';
import * as domFunctions from './domFunctions.js';
import * as homePage from './homePage.js';
import * as menu from './menuPage.js';
import * as contact from './contactPage.js';

console.log('hi');

//Run when the page is loaded
const firstLoad = (() => {
    pageLoad.onPageLoad.buildHeader();
    homePage.onPageLoad.buildContent.buildBlock(2);

    const pageContent = document.getElementById('pageContent');
    console.log(pageContent);
    console.log(domFunctions);
})();




