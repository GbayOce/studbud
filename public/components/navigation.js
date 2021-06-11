// this is for the navigation to work
class Navigation {
    constructor (links, pages) {
        this.links = links;
        this.pages = pages;
        this.currentPage = null;
    }

    getLinks() {
        console.log(this.links);
    }
//changes the active status of each page. 
    setPage(pageId) {
        this.currentPage = pageId;
        console.log(this.currentPage);

        this.links.forEach((link) => {
            link.classList.remove('active');
            if (this.getHash(link) === pageId) {
                link.classList.add('active');
            }
        })


        this.pages.forEach((page) => {
            page.style.display = 'none';
        })

        document.getElementById(pageId).style.display = "block";
    }

    getHash(link){
        return link.href.split("#")[1];
    }
} 

export default Navigation;
