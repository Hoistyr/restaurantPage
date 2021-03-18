const onPageLoad = (() => {
    const buildContactPage = () => {
        const contactTab = document.getElementById('contactTab');
        contactTab.classList.add('headerTab', 'onPage');


        const buildBlock = (() => {
            console.log('in build block');
            const content = document.querySelector('#content');
            const pageContent = document.createElement('div');
            pageContent.id = 'pageContent';
            content.appendChild(pageContent);
            
            const contentBlock = document.createElement('div');
            contentBlock.classList.add('contactBlock');
            pageContent.appendChild(contentBlock)
            
            const contactInformation = document.createElement('div');
            contactInformation.id = 'contactInformation';
            contentBlock.append(contactInformation);

            contactInformation.innerHTML = 
            `<p class='contactInfoText'>Feel free to contact us with any questions you might have!</p>
            <h1 class='contactInfoTitle' id='contactInfoMainTitle'>Contact Information:</h1>
            </br></br>
            <h2 class='contactInfoTitle' id='address'>Address:</h2>
            <p class='contactInfoText' id='address'>895 W. Birch St.
            Alabaster, RO 35007</p>
            </br>
            <h2 class='contactInfoTitle' id='phoneTitle'>Phone Number (Call or Text):</h2>
            <p class='contactInfoText' id='phoneNumber'>(123) 456-789</p>
            </br>
            <h2 class='contactInfoTitle' id='emailTitle'>Email:</h2>
            <p class='contactInfoText' id='emailText'>contact@garbalos.com</p>
            </br>
            <h2 class='contactInfoTitle' id='socialMediaTitle'>Social Media:</h2>
            <div id='socialMediaImagesHolder'>
            <img class='socialMediaImage' id='twitterIcon' alt='Twitter Icon' src='../src/images/twitterIcon.svg'>
            <img class='socialMediaImage' id='instagramIcon' alt='Instagram Icon' src='../src/images/instagramIcon.svg'>
            <img class='socialMediaImage' id='facebookIcon' alt='Facebook Icon' src='../src/images/facebookIcon.svg'>
            </div>`
            
        })();
    }
    
    return {
        buildContactPage,
    }
})();

export { onPageLoad };