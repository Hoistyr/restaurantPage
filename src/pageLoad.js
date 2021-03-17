const onPageLoad = (() => {
    const buildHeader = () => {
        const content = document.querySelector('#content');
        console.log(content);
        const header = document.createElement('header');
        header.id = 'header';
        content.prepend(header);
    
        const nameHolder = document.createElement('div');
        nameHolder.id = 'nameHolder';
        header.appendChild(nameHolder);
        
        const restaurantName = document.createElement('h1');
        restaurantName.id = 'restaurantName';
        restaurantName.textContent = `Garbalo's`;
        nameHolder.appendChild(restaurantName);

        const tabHolder = document.createElement('div');
        tabHolder.id = 'tabHolder';
        header.appendChild(tabHolder);
        
        const menuTab = document.createElement('h2');
        menuTab.id = 'menuTab';
        menuTab.classList.add('headerTab');
        menuTab.textContent = 'Menu';
        tabHolder.appendChild(menuTab);
        
        const contactTab = document.createElement('h2');
        contactTab.id = 'contactTab';
        contactTab.classList.add('headerTab');
        contactTab.textContent = 'Contact us';
        tabHolder.appendChild(contactTab);
    }

    return {
        buildHeader,
    }
})();

export {onPageLoad};