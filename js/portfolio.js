// Object structure: information for each project

let projects = {
    pybackup: {
        aim: "Build a simple file backup program using Python.",
        description: "<p>This was a personal project. I needed a simple backup program I could use to backup certain folders. All the programs on the market were quite complicated, all I wanted was something that would:</p>\
              <ol>\
                <li>give me a listing of the files in a folder</li>\
                <li>compare the files in two folders and show me which were new/\ updated and would be copied over</li>\
                <li>copy only the new/updated files</li>\
              </ol>\
              <p>I built this program from scratch. Particularly challenging in this project was researching how to access system files and timestamps and how to build a GUI interface. It was initially written in Python 2 but has since been upgraded to Python 3 and is intended to be run in a Windows environment.</p>",
        github: "https://github.com/cazyw/python-code",
        demo: "backup_screenshots.html"
    },
    pywebsite: {
        aim: "Use a python script to dynamically generate webpages.",
        description: "<p>This was a personal project. I was building a website (TV episode review) with multiple pages. But as I was learning Bootstrap, every time I changed the style or layout of the page, I had to change the code for every page (which was very time consuming and frustrating). </p>\
              <p>To cut down on repetition, I wrote a script to dynamically create some of the html files. I wrote my review for each episode in separate text files, organised in a specific file structure. The python script builds the webpages based on the text files and structure. This way I only needed to amend this script to make changes across all pages.</p>\
              <p>The challenging aspect of this project was planning the folder structure and using regular expressions to pattern match and create the different HTML pages.</p>",
        github: "https://github.com/cazyw/TimeAndSpace/blob/gh-pages/series/create_site.py",
        demo: "https://github.com/cazyw/TimeAndSpace/blob/gh-pages/series/create_site.py"

    },
    pyspaceship: {
        aim: "Build a spaceship game shooting asteroids.",
        description: "<p>Python course project to build a spaceship game. A basic template was provided and then classes and methods had to be written in order to control the spaceship, shoot missiles and spawn and explode asteroids.</p>\
        <p>The was part of the \"An Introduction to Interactive Programming in Python\" course on Coursera run by Rice University. They used <a href=\"http://www.codeskulptor.org\" target=\"_blank\">http://www.codeskulptor.org/</a> (link below) to run the code. The code can be copied in and you can select the play button to play the game.</p>",
        github: "https://github.com/cazyw/interactivePython/blob/master/Wk8_RiceRocks.py",
        demo: "http://www.codeskulptor.org/"

    },
    pyblackjack: {
        aim: "Play Blackjack.",
        description: "<p>Python course project to build a blackjack game. A basic template was provided and then classes and methods had to be written in order to deal and display the cards and calculate the score and winner.</p>\
        <p>The was part of the \"An Introduction to Interactive Programming in Python\" course on Coursera run by Rice University. They used <a href=\"http://www.codeskulptor.org\" target=\"_blank\">http://www.codeskulptor.org/</a> (link below) to run the code. The code can be copied in and you can select the play button to play the game.</p>",
        github: "https://github.com/cazyw/interactivePython/blob/master/Wk6_Blackjack.py",
        demo: "http://www.codeskulptor.org/"

    },
    pypong: {
        aim: "Play Pong",
        description: "<p>Python course project to build pong. This required mathematical calculations to move the ball and its position relative to the wall and paddles. </p>\
        <p>The was part of the \"An Introduction to Interactive Programming in Python\" course on Coursera run by Rice University. They used <a href=\"http://www.codeskulptor.org\" target=\"_blank\">http://www.codeskulptor.org/</a> (link below) to run the code. The code can be copied in and you can select the play button to play the game.</p>",
        github: "https://github.com/cazyw/interactivePython/blob/master/Wk4_Pong.py",
        demo: "http://www.codeskulptor.org/"

    },
    reactclock: {
        aim: "Lambda School React Lesson 2 - Clock App",
        description: "<p>This was the second React App I built. The aim of the exercise was to learn about states and how to change states in a React App. This App builds a clock that shows the current time (in the local time zone). It also uses image tiles (like a flip clock) in order to display the time. At the moment it may take a few seconds for the tiled version to sync up with the text version.</p>",
        github: "https://github.com/cazyw/LS-Pro-React-II",
        demo: "https://cazyw.github.io/LS-Pro-React-II/"

    },
    htmldoctorwho: {
        aim: "Website using Bootstrap",
        description: "<p>My first foray into using Bootstrap and a bit of javascript in order to create a website that has a revolving carousel, uses the grid system of bootstrap and a side menu with scrollspy. Updating this website to use Bootstrap allowed me to try out and take advantage of CSS code and features already available.</p>\
              <p>I also created a python program to generate the webpages from text files, which made it much easier if I changed the style of the webpage, since each page was generated dynamically from the python script rather than hardcoded.</p>",
        github: "https://github.com/cazyw/TimeAndSpace/tree/gh-pages",
        demo: "https://cazyw.github.io/TimeAndSpace"

    },
    jsquote: {
        aim: "Build a webpage that calls on an API to retrieve quotes",
        description: "<p>Free Code Camp mini-project. Users can click on a button to generate a random quote.</p>\
              <p>This was my first time calling on APIs so the main aim was to learn about JSON and APIs and create a webpage which pulled data from an external source. Users could then also post the quote to Twitter. The secondary aim was to continue to learn and implement Javascript/jQuery, CSS and Bootstrap features in order to produce a polished and functional webpage.</p>",
        github: "https://github.com/cazyw/quoteGenerator",
        demo: "https://cazyw.github.io/quoteGenerator/"

    },
    jsweather: {
        aim: "Build a webpage that displays local weather data",
        description: "<p>Free Code Camp mini-project. Users can view details about the weather in their area.</p>\
              <p>After the user's geolocation is obtained, a link is made to the <a href=\"https://fcc-weather-api.glitch.me/\">Free Code Camp Weather API</a>, and certain information displayed. Users are able to also toggle between Celsius and Fahrenheit. In this project I continued to develop experience with calling data from APIs, CSS, Javascript/jQuery, and using templates and features developed by others (e.g. <a href=\"http://momentjs.com/\">moment.js</a> for time, and <a href=\"https://erikflowers.github.io/weather-icons/\">weather icons</a>)</p>",
        github: "https://github.com/cazyw/localWeather",
        demo: "https://cazyw.github.io/localWeather/"

    },
    jsletter: {
        aim: "Modify a webpage form to validate and store/retrieve data locally stored in the browser",
        description: "<p>This was a Node Girls Javascript mini-project in the full-day self-paced workshop. The structure of the form pages was provided and the exercise was to make it interactive. The final form: validated data being entered and highlighted errors in input, stored valid data in local storage, retrieved data from storage, allowed for random output.</p>\
              <p>In this project I came to grips with using Javascript to: extract input from forms, modify DOM elements by adding and removing clases and adding HTML/text, loop through objects and use key/value pairs, use local browser storage, use Math.random.</p>",
        github: "https://github.com/cazyw/js-xmas-edition",
        demo: "https://cazyw.github.io/js-xmas-edition/"

    },
    jswikipedia: {
        aim: "Link to Wikipedia's API to run searches.",
        description: "<p>Free Code Camp mini-project. Users can search for articles that are in Wikipedia. A list of up to 10 matches will display and users can click on them to go to the actual Wikipedia page.</p>\
            <p>This project had me trying to understand how Wikipedia's API worked and also how to animate and transition elements of a webpage.</p>",
        github: "https://github.com/cazyw/wikipediaViewer",
        demo: "https://cazyw.github.io/wikipediaViewer/"

    },
    jstwitch: {
        aim: "Link to Twitch's API to display status information about certain streamers.",
        description: "<p>Free Code Camp mini-project. The page shows a pre-defined list of twitch streamers and some information about them (online / offline / game details if currently online).</p>\
            <p>The most challenging aspect of this project was implementing the status toggles at the top as these expanded and contracted depending on mouse position/action. These were implemented using CSS transitions on hover. I also experimented with using and styling unordered lists, flexbox and changing the content to be responsive to screen size.</p>",
        github: "https://github.com/cazyw/twitchTV",
        demo: "https://cazyw.github.io/twitchTV/"

    },
    rubyrails:{
        aim: "Build a microblog app using Ruby on Rails",
        description: "<p>Building a Ruby on Rails App with this tutorial: <a href=\"http://www.railstutorial.org\">Ruby on Rails Tutorial: Learn Web Development with Rails by Michael Hartl</a>. This was my introduction to the Model View Controller (MVC) pattern and using Rails. Following this tutorial took me through the steps of building a twitter-like app which allowed users to: create an account (including the use of secure passwords), receive an activation email (using SendGrid), log in, post a micro blog including pictures, follow and unfollow other users, and for users with admin access, delete other users.</p>\
              <p>This tutorial also introduced me to writing automated tests, the test driven development, and the \"Red, Green, Refactor\" cycle.</p>\
              <p>The App is currently deployed and available on Heroku.</p>",
        github: "https://github.com/cazyw/RubyOnRailsTut-sample-app",
        demo: "https://fierce-mountain-5351.herokuapp.com"
    },
    railsPhotoBlog:{
        aim: "Build a photo blog using Ruby on Rails ",
        description: "<p>Building a photo blog using what I'd learnt so far in Rails and deploying to Heroku. This is my current project and a work in progress as I continue to learn and add more features. </p>\
        <p>The idea for this is to be able to post a photo (food, holiday snap etc) and then write a bit of a reflection on the place or experience or random thought. I'll definitely be adding more features such as adding comments and a calendar. Although in reality I will be the only one using it, it will be a fun learning experience to add other features that are common in Rails apps. </p>\
              <p>The App is currently deployed and available on Heroku.</p>",
        github: "https://github.com/cazyw/photoBlog",
        demo: "https://foodforthesoul-blog.herokuapp.com/"
    },
    jscalculator:{
        aim: "Build a calculator app ",
        description:  "<p>Free Code Camp mini-project. The calculator app was built using HTML, CSS, Javascript and Jquery. </p>\
        <p>One of the main challenges of this app was determining how to store data so that it could be later retrieved and manipulated. Whilst this was fairly straightfoward for simple [+ - / x] operations, the calculator needed to handle additional features such as deletion, decimals and negative numbers. I realised that simpler is sometimes better.</p>\
        <p>It was also fun to work out how to create 3D effects and working out the design aspects to try to mirror the appearance of a real-life calculator.</p>",
        github: "https://github.com/cazyw/calculator",
        demo: "https://cazyw.github.io/calculator/"
    },
    jspomodoro:{
        aim: "Build a pomodoro timer app ",
        description:  "<p>Free Code Camp mini-project. The pomodoro timer was built using HTML, CSS and Javascript. </p>\
        <p>The pomodoro timer alternates between study sessions and break sessions and users can change the time allocated to studying and breaks.</p>\
        <p>One of the main challenges of this app was determining how to visually display the progression of time in an interesting way. I decided to use scalable vector graphics (svg), starting with a base white circle that is filled in with a colour as time passess (or un-filled during the break). A border was also added for additional highlighting of the state (session vs break).</p>\
        <p>This was a really fun project to work that again expanded my knowledge of CSS and the use of timers in javascript</p>",
        github: "https://github.com/cazyw/pomodoroClock",
        demo: "https://cazyw.github.io/pomodoroClock/"
    },
    jstictactoe:{
        aim: "Build a Tic Tac Toe Game",
        description:  "<p>Free Code Camp mini-project. Users can play a game of tic tac toe either against another player or against the computer. A simple logic guarantees the computer will at worst draw a game.</p>\
        <p>It was a challenge to think about how to structure the code for this game, how to break it down into re-usable functions, how to have the different elements transition and fade in and out smoothly. One area that could be improved is that the game is not quite responsive. It's styled to suit two different width/heights so the game displays find (except on really narrow screens) but it isn't 100% responsive as the game has fixed widths.</p>\
        <p>This was a really fun project to research how to implement some simple logic of an AI.</p>",
        github: "https://github.com/cazyw/ticTacToe",
        demo: "https://cazyw.github.io/ticTacToe/"
    }
}

// When a project thumbnail is selected, the project details are added to the webpage
let projectDetails = (project) => {
    let aim = `<h2>${projects[project]["aim"]}</h2>`;
    let details = `<div class=\"text-faded\">${projects[project]["description"]}</div>`;
    let githubrepo = `<div class=\"text-center project-buttons\"><a href=\"${projects[project]["github"]}\" target=\"_blank\" class=\"btn btn-default btn-sm sr-button\">GitHub Repo</a>`;
    let demo = `<a href=\"${projects[project]["demo"]}\" target=\"_blank\" class=\"btn btn-default btn-sm sr-button\">Demo</a></div>`;
    let linkBack = `<div><a href=\"#${project}-anchor\"><i class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i></a></div>`;
    $('#projectDetails').html(aim + details + githubrepo + " " + demo + linkBack).fadeIn();
}

let toggleDescription = (elem) => {
    elem.toggleClass("box-clicked");
}

let checkToggle = (elem) => {
    if (!elem.hasClass("box-clicked")){
        toggleDescription(elem); 
    }
}

$(document).ready(function() {

    $(".project-box").on("click", function(event){
        //event.preventDefault();
        toggleDescription($(this)); 
    });

    $(".project-details").on("click", function(event){
        let project = ($(this).parents(".project-box")).attr("id");
        $("#projectDetails").fadeOut(function(){
            projectDetails(project);
        });

        event.preventDefault();
        checkToggle($(this).parents(".project-box"));
    });

    $(document).on('click', 'a[href^="#"]', function(event) {
        let anchor = this.hash;
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
            
        }, 1000, function() {
            window.location.hash = anchor;
            
        });
        event.preventDefault();
    });

    
    $('.navbar-collapse ul li a').on('click', function(event) {
        // $('.navbar-toggle:visible').click();
        $('.navbar-collapse').collapse('hide');
    });

    gmail = 'gmail.com';
    emailAdd = ('cyswong' + '@' + gmail);
    $(".contact-email").attr('href', `mailto:${emailAdd}`);

})