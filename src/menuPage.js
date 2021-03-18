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
                
                //Creates the block to contain the menu item
                const menuItemBlock = document.createElement('div');
                menuItemBlock.id = `${foodName}`
                menuItemBlock.classList.add('menuImageInfoBlock');
                pageContent.appendChild(menuItemBlock);
               
                //Creates the image
                const foodImage = document.createElement('img');
                foodImage.src =  `../src/images/${foodName}.jpg`;
                foodImage.classList.add('foodImage');
                foodImage.alt = `Picture of a ${foodName}`;
                
                const foodInfoButtonHolder = document.createElement('div');
                foodInfoButtonHolder.id='foodInfoButtonHolder';

                const foodInformation = document.createElement('div');
                foodInformation.id = 'foodInformation';
                if ((i % 2) !== 0) {
                    menuItemBlock.append(foodImage, foodInfoButtonHolder);
                    
                    foodInfoButtonHolder.appendChild(foodInformation);
                    const foodTitle = document.createElement('h2');
                    foodTitle.classList.add('foodTitle');
                    foodTitle.textContent = `${detailedMenuItems[i].name}`
                    foodInformation.appendChild(foodTitle);
                    
                    
                    const infoText = document.createElement('p');
                    infoText.classList.add('foodInfoText', 'rightText');
                    infoText.textContent = `${detailedMenuItems[i].description}`;
                    foodInformation.appendChild(infoText);
                } else {
                    menuItemBlock.append(foodInfoButtonHolder, foodImage);
                    
                    foodInfoButtonHolder.appendChild(foodInformation);
                    const foodTitle = document.createElement('h2');
                    foodTitle.classList.add('foodTitle');
                    foodTitle.textContent = `${detailedMenuItems[i].name}`
                    foodInformation.appendChild(foodTitle);
                    
                    const infoText = document.createElement('p');
                    infoText.classList.add('foodInfoText', 'leftText');
                    infoText.textContent = `${detailedMenuItems[i].description}`;
                    foodInformation.appendChild(infoText);
                }
                const orderButton = document.createElement('div');
                orderButton.classList.add('orderButton');
                orderButton.textContent = 'Add to Order';
                foodInfoButtonHolder.appendChild(orderButton);
            }
        }
        createMenuContent();
        
    }
        

        
    return {
        buildMenuItems,
    }
})();

export { onPageLoad };