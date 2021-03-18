//Imports the different pages as modules
import * as pageLoad from './pageLoad.js';
import * as domFunctions from './domFunctions.js';
import * as homePage from './homePage.js';
import * as menu from './menuPage.js';
import * as contact from './contactPage.js';

//Contains the functions for loading the different pages and the logic required behind that
const pageLoader = (() => {
    const loadHome = () => {
        console.log('loadhomefired');
        domFunctions.emptyPageContent();
        domFunctions.resetHeaderTabs();
        homePage.onPageLoad.buildContent.buildBlock(2);
        headerTabListeners.stopListeners.allListeners();
        headerTabListeners.startListeners.menuListener();
        headerTabListeners.startListeners.contactListener();
    }
    
    const loadMenu = () => {
        console.log('loadmenuclicked');
        domFunctions.emptyPageContent();
        domFunctions.resetHeaderTabs();
        menu.onPageLoad.buildMenuItems();
        headerTabListeners.stopListeners.allListeners();
        headerTabListeners.startListeners.homeListener();
        headerTabListeners.startListeners.contactListener();
    }

    const loadContact = () => {
        console.log('loadcontactclicked');
        domFunctions.emptyPageContent();
        domFunctions.resetHeaderTabs();
        contact.onPageLoad.buildContactPage();
        headerTabListeners.stopListeners.allListeners();
        headerTabListeners.startListeners.homeListener();
        headerTabListeners.startListeners.menuListener();
    }

    return {
        loadHome,
        loadMenu,
        loadContact,
    }
})();

//Header tab listener logic
const headerTabListeners = (() => {
    //Function module for starting the header tab listeners
    const startListeners = (() => {
        const allListeners = () => {
            const restaurantName = document.getElementById('restaurantName');
            const menuTab = document.getElementById('menuTab');
            const contactTab = document.getElementById('contactTab');
            restaurantName.addEventListener('click', pageLoader.loadHome);
            menuTab.addEventListener('click', pageLoader.loadMenu);
            contactTab.addEventListener('click', pageLoader.loadContact);
        }
        
        const homeListener = () => {
            const restaurantName = document.getElementById('restaurantName');
            restaurantName.addEventListener('click', pageLoader.loadHome);
        }

        const menuListener = () => {
            const menuTab = document.getElementById('menuTab');
            menuTab.addEventListener('click', pageLoader.loadMenu);
        }

        const contactListener = () => {
            const contactTab = document.getElementById('contactTab');
            contactTab.addEventListener('click', pageLoader.loadContact);
        }
        return {
            allListeners,
            homeListener,
            menuListener,
            contactListener,
        }
    })();
    
    //Function module for stoping the header tab listeners
    const stopListeners = (() => {
        const allListeners = () => {
            const restaurantName = document.getElementById('restaurantName');
            const menuTab = document.getElementById('menuTab');
            const contactTab = document.getElementById('contactTab');
            restaurantName.removeEventListener('click', pageLoader.loadHome);
            menuTab.removeEventListener('click', pageLoader.loadMenu);
            contactTab.removeEventListener('click', pageLoader.loadContact);
        }
        
        
        const homeListener = () => {
            const restaurantName = document.getElementById('restaurantName');
            restaurantName.removeEventListener('click', pageLoader.loadHome);
        }
        
        const menuListener = () => {
            const menuTab = document.getElementById('menuTab');
            menuTab.removeEventListener('click', pageLoader.loadMenu);
        }

        const contactListener = () => {
            const contactTab = document.getElementById('contactTab');
            contactTab.removeEventListener('click', pageLoader.loadContact);
        }
        return {
            allListeners,
            homeListener,
            menuListener,
            contactListener,
        }
    })();
    
    return {
        startListeners,
        stopListeners,
    }
})();

//Run when the page is loaded
const firstLoad = (() => {
    console.log('firstload');
    pageLoad.onPageLoad.buildHeader();
    homePage.onPageLoad.buildContent.buildBlock(2);
    headerTabListeners.startListeners.allListeners();
})();