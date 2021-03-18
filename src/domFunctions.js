const emptyPageContent = () => {
    let pageContent = document.querySelector('#pageContent');
    if (pageContent !== null) {
        pageContent.remove();
    }
}

const resetHeaderTabs = () => {
    const navTabs = document.querySelectorAll('.headerTab');
    navTabs.forEach((tab) => {
        tab.classList.remove('onPage');
    })

    const restaurantName = document.getElementById('restaurantName');
    restaurantName.classList.remove('onHome');
}




export { emptyPageContent, resetHeaderTabs };