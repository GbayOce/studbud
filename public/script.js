import Navigation from './components/navigation.js';
import './components/tasklist.js';
import './components/stopwatch.js';
import './components/music.js';
import './components/pomodoro.js';


const links = document.querySelectorAll('nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    }) 
})