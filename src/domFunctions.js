const x = (() => {
    const emptyPageContent = () => {
        console.log('in emptyPageContent');
        const pageContent = document.getElementById('pageContent');
        pageContent.remove();
        
        const content = document.getElementById('content');
        const pageContent = document.createElement('div');
        pageContent.id = 'pageContent';
        content.appendChild(pageContent);
    }
    return {
        emptyPageContent,
    }
})();


export { x };