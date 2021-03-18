//Loads the menu page
const onPageLoad = (() => {
    
    const buildMenuItems = () => {
        const menuTab = document.getElementById('menuTab');
        menuTab.classList.add('headerTab', 'onPage');
        
        const menuItems = ['Salad', 'Hamburger', 'Steak', 'Lobster', 'Sandwich', 'Fries', 'Chicken Sandwich'];
        let detailedMenuItems = [];
        class foodItem {
            constructor(name) {
                this.name = name;
                this.description = '';
            }

            setDescription(name) {
                if (name === 'Salad') {
                this.description = `A crispy and delicious taste of nature's best. Lettuce, spinach, tomatoes, cucumbers, dressing, nuts, and berries`
                } else {
                    this.description = 'No description available'
                }
            }

        }
        
        menuItems.forEach((food) => {
            const tempFood = new foodItem(food);
            tempFood.setDescription(food);
            detailedMenuItems.push(tempFood);
        })
       
        console.log(detailedMenuItems);
        
        const createMenuContent = () => {
            //Re-adds the pageContent div to the page after it was removed in the domFunctions emptyPageContet function
            const content = document.querySelector('#content');
            const pageContent = document.createElement('div');
            pageContent.id = 'pageContent';
            content.appendChild(pageContent);

            //Goes through the menu items and creates the content blocks depending upon what information they have
            for(let i = 0; i < detailedMenuItems.length; i++) {
                const foodName = detailedMenuItems[i].name.toLowerCase().replace(/\s/g, '');
                console.log(foodName);
                const menuItemBlock = document.createElement('div');
                menuItemBlock.id = `${foodName}`
                menuItemBlock.classList.add('menuImageInfoBlock');
                pageContent.appendChild(menuItemBlock);
                
                
                
                const foodImage = document.createElement('img');
                foodImage.src =  `../src/images/${foodName}.jpg`;
                foodImage.classList.add('foodImage');
                foodImage.alt = `Picture of a ${foodName}`;
                
                const foodInformation = document.createElement('div');
                foodInformation.id = 'foodInformation';
                if ((i % 2) !== 0) {
                    menuItemBlock.append(foodImage, foodInformation);
                    
                    const foodTitle = document.createElement('h3');
                    foodTitle.classList.add('foodTitle');
                    foodTitle.textContent = `${detailedMenuItems[i].name}`
                    foodInformation.appendChild(foodTitle);
                    
                    
                    const infoText = document.createElement('p');
                    infoText.classList.add('foodInfoText', 'rightText');
                    infoText.textContent = `${detailedMenuItems[i].description}`;
                    foodInformation.appendChild(infoText);
                } else {
                    menuItemBlock.append(foodInformation, foodImage);
                    
                    const foodTitle = document.createElement('h2');
                    foodTitle.classList.add('foodTitle');
                    foodTitle.textContent = `${detailedMenuItems[i].name}`
                    foodInformation.appendChild(foodTitle);
                    
                    const infoText = document.createElement('p');
                    infoText.classList.add('foodInfoText', 'leftText');
                    infoText.textContent = `${detailedMenuItems[i].description}`;
                    foodInformation.appendChild(infoText);
                }
            }
        }
        createMenuContent();
        
    }
        

        
    return {
        buildMenuItems,
    }
})();

export { onPageLoad };