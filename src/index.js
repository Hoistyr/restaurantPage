import * as pageLoad from './pageLoad.js';
import * as domFunctions from './domFunctions.js';
import * as homePage from './homePage.js';
import * as menu from './menuPage.js';
import * as contact from './contactPage.js';



//Run when the page is loaded
const firstLoad = (() => {
    console.log('firstload');
    pageLoad.onPageLoad.buildHeader();
    homePage.onPageLoad.buildContent.buildBlock(2);
})();

const pageLoader = (() => {
    const loadHome = () => {
        console.log('loadhomefired');
        domFunctions.emptyPageContent();
        domFunctions.resetHeaderTabs();
        homePage.onPageLoad.buildContent.buildBlock(2);
    }
    
    const loadMenu = () => {
        console.log('loadmenuclicked');
        domFunctions.emptyPageContent();
        menu.onPageLoad.buildMenuItems();
        headerTabListeners.removeEventListeners.removeMenuListener();
    }

    const loadContact = () => {
        console.log('loadcontactclicked');
    }

    return {
        loadHome,
        loadMenu,
        loadContact,
    }
})();

const headerTabListeners = (() => {
    const restaurantName = document.getElementById('restaurantName');
    restaurantName.addEventListener('click', pageLoader.loadHome);
    
    const menuTab = document.getElementById('menuTab');
    menuTab.addEventListener('click', pageLoader.loadMenu);

    const contactTab = document.getElementById('contactTab');
    contactTab.addEventListener('click', pageLoader.loadContact);

    const removeEventListeners = (() => {
        const removeMenuListener = () => {
            menuTab.removeEventListener('click', pageLoader.loadMenu);
        }
    })();
    return {
        removeEventListeners,
    }
})();