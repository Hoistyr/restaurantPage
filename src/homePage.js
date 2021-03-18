const onPageLoad = (() => {
    const buildContent = (() => {
        const buildBlock = (blockNumber) => {
            const content = document.querySelector('#content');
            const pageContent = document.createElement('div');
            pageContent.id = 'pageContent';
            content.appendChild(pageContent);
            for(let i = 1; i <= blockNumber; i++) {
                const contentBlock = document.createElement('div');
                contentBlock.id = `block${i}`
                contentBlock.classList.add('imageInfoBlock');
                pageContent.appendChild(contentBlock);
                
                const homepageImage = document.createElement('img');
                homepageImage.src =  '../src/images/homepageImage.jpg';
                homepageImage.classList.add('homepageImage');
                
                const restaurantInformation = document.createElement('div');
                restaurantInformation.id = 'restaurantInformation';
                if ((i % 2) !== 0) {
                    contentBlock.append(homepageImage, restaurantInformation);
                    
                    const infoText = document.createElement('p');
                    infoText.classList.add('infoText', 'rightText');
                    infoText.textContent = `Here at Garbalo's we care deeply about creating an enjoyable dining experience.`;
                    restaurantInformation.appendChild(infoText);
                } else {
                    contentBlock.append(restaurantInformation, homepageImage);
                    
                    const infoText = document.createElement('p');
                    infoText.classList.add('infoText', 'leftText');
                    infoText.textContent = `Here at Garbalo's we care deeply about creating an enjoyable dining experience.`;
                    restaurantInformation.appendChild(infoText);
                }
            }
        }
        return {
            buildBlock,
        }
     
    })();
    return {
        buildContent,
    } 
})();


export { onPageLoad };