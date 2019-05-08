// Object structure: information for each project
let projects = {
  pybackup: {
    aim: 'Build a simple file backup program using Python.',
    skills: 'Skills: Python',
    description:
      '<p>This was a personal project. I needed a simple backup program I could use to backup certain folders. All the programs on the market were quite complicated, all I wanted was something that would:</p>\
              <ol>\
                <li>give me a listing of the files in a folder</li>\
                <li>compare the files in two folders and show me which were new/ updated and would be copied over</li>\
                <li>copy only the new/updated files</li>\
              </ol>\
              <p>I built this program from scratch. Particularly challenging in this project was researching how to access system files and timestamps and how to build a GUI interface. It was initially written in Python 2 but has since been upgraded to Python 3 and is intended to be run in a Windows environment.</p>',
    github: 'https://github.com/cazyw/python-file-backup',
    demo: 'backup_screenshots.html'
  },
  pywebsite: {
    aim: 'Use a python script to dynamically generate webpages.',
    skills: 'Skills: Python',
    description:
      '<p>This was a personal project. I was building a website (TV episode review) with multiple pages. But as I was learning Bootstrap, every time I changed the style or layout of the page, I had to change the code for every page (which was very time consuming and frustrating). </p>\
              <p>To cut down on repetition, I wrote a script to dynamically create some of the html files. I wrote my review for each episode in separate text files, organised in a specific file structure. The python script builds the webpages based on the text files and structure. This way I only needed to amend this script to make changes across all pages.</p>\
              <p>The challenging aspect of this project was planning the folder structure and using regular expressions to pattern match and create the different HTML pages.</p>',
    github: 'https://github.com/cazyw/time-and-space/blob/gh-pages/series/create_site.py',
    demo: 'https://github.com/cazyw/time-and-space/blob/gh-pages/series/create_site.py'
  },
  pyspaceship: {
    aim: 'Build a spaceship game shooting asteroids.',
    skills: 'Skills: Python',
    description:
      '<p>Python course project to build a spaceship game. A basic template was provided and then classes and methods had to be written in order to control the spaceship, shoot missiles and spawn and explode asteroids.</p>\
        <p>The was part of the "An Introduction to Interactive Programming in Python" course on Coursera run by Rice University. They used <a href="http://www.codeskulptor.org" target="_blank">http://www.codeskulptor.org/</a> (link below) to run the code. The code can be copied in and you can select the play button to play the game.</p>',
    github: 'https://github.com/cazyw/interactive-python/blob/master/Wk8_RiceRocks.py',
    demo: 'http://www.codeskulptor.org/'
  },
  pyblackjack: {
    aim: 'Play Blackjack.',
    skills: '',
    description:
      '<p>Python course project to build a blackjack game. A basic template was provided and then classes and methods had to be written in order to deal and display the cards and calculate the score and winner.</p>\
        <p>The was part of the "An Introduction to Interactive Programming in Python" course on Coursera run by Rice University. They used <a href="http://www.codeskulptor.org" target="_blank">http://www.codeskulptor.org/</a> (link below) to run the code. The code can be copied in and you can select the play button to play the game.</p>',
    github: 'https://github.com/cazyw/interactive-python/blob/master/Wk6_Blackjack.py',
    demo: 'http://www.codeskulptor.org/'
  },
  pypong: {
    aim: 'Play Pong',
    skills: 'Skills: Python, HTML5, Canvas, Javascript, CSS',
    description:
      '<p>Originally, this was part of the "An Introduction to Interactive Programming in Python" course on Coursera run by Rice University. They used <a href="http://www.codeskulptor.org" target="_blank">http://www.codeskulptor.org/</a>  to run the code. The code can be copied into codeskulptor from <a href="https://github.com/cazyw/interactive-python/blob/master/Wk4_Pong.py" target="_blank">here</a> and you can select the play button to play the game.</p>\
        <p>However it doesn\'t seem to work anymore (they may have upgraded codeskulptor). So as part of my dive into re-creating simple classic games in the web browser, I\'ve implemented the game using HTML5 Canvas and Javascript.</p>',
    github: 'https://github.com/cazyw/coding-challenges/tree/master/canvas',
    demo: 'https://cazyw.github.io/fun/pong.html'
  },
  reactclock: {
    aim: 'Lambda School React Lesson 2 - Clock App',
    skills: 'Skills: React',
    description:
      '<p>This was the second React App I built. The aim of the exercise was to learn about states and how to change states in a React App. This App builds a clock that shows the current time (in the local time zone). It also uses image tiles (like a flip clock) in order to display the time. At the moment it may take a few seconds for the tiled version to sync up with the text version.</p>',
    github: 'https://github.com/cazyw/LS-Pro-React-II',
    demo: 'https://cazyw.github.io/LS-Pro-React-II/'
  },
  htmldoctorwho: {
    aim: 'Website using Bootstrap',
    skills: 'Skills: HTML, CSS, Bootstrap',
    description:
      '<p>My first foray into using Bootstrap and a bit of javascript in order to create a website that has a revolving carousel, uses the grid system of bootstrap and a side menu with scrollspy. Updating this website to use Bootstrap allowed me to try out and take advantage of CSS code and features already available.</p>\
        <p>I also created a python program to generate the webpages from text files, which made it much easier if I changed the style of the webpage, since each page was generated dynamically from the python script rather than hardcoded.</p>',
    github: 'https://github.com/cazyw/time-and-space/tree/gh-pages',
    demo: 'https://cazyw.github.io/time-and-space'
  },
  jsquote: {
    aim: 'Build a webpage that calls on an API to retrieve quotes',
    skills: 'Skills: HTML, CSS, Javascript and Jquery, requests to APIs',
    description:
      '<p>Free Code Camp mini-project. Users can click on a button to generate a random quote.</p>\
              <p>This was my first time calling on APIs so the main aim was to learn about JSON and APIs and create a webpage which pulled data from an external source. Users could then also post the quote to Twitter. The secondary aim was to continue to learn and implement Javascript/jQuery, CSS and Bootstrap features in order to produce a polished and functional webpage.</p>',
    github: 'https://github.com/cazyw/quote-generator',
    demo: 'https://cazyw.github.io/quote-generator/'
  },
  jsweather: {
    aim: 'Build a webpage that displays local weather data',
    skills: 'Skills: HTML, CSS, Javascript and Javascript and Jquery, requests to APIs',
    description:
      '<p>Free Code Camp mini-project. Users can view details about the weather in their area.</p>\
              <p>After the user\'s geolocation is obtained, a link is made to the <a href="https://fcc-weather-api.glitch.me/">Free Code Camp Weather API</a>, and certain information displayed. Users are able to also toggle between Celsius and Fahrenheit. In this project I continued to develop experience with calling data from APIs, CSS, Javascript/jQuery, and using templates and features developed by others (e.g. <a href="http://momentjs.com/">moment.js</a> for time, and <a href="https://erikflowers.github.io/weather-icons/">weather icons</a>)</p>',
    github: 'https://github.com/cazyw/local-weather',
    demo: 'https://cazyw.github.io/local-weather/'
  },
  jsletter: {
    aim: 'Modify a webpage form to validate and store/retrieve data locally stored in the browser',
    skills: 'Skills: Javascript',
    description:
      '<p>This was a Node Girls Javascript mini-project in the full-day self-paced workshop. The structure of the form pages was provided and the exercise was to make it interactive. The final form: validated data being entered and highlighted errors in input, stored valid data in local storage, retrieved data from storage, allowed for random output.</p>\
              <p>In this project I came to grips with using Javascript to: extract input from forms, modify DOM elements by adding and removing clases and adding HTML/text, loop through objects and use key/value pairs, use local browser storage, use Math.random.</p>',
    github: 'https://github.com/cazyw/js-xmas-edition',
    demo: 'https://cazyw.github.io/js-xmas-edition/'
  },
  jswikipedia: {
    aim: "Link to Wikipedia's API to run searches.",
    skills: 'Skills: HTML, CSS, Javascript and Jquery, requests to APIs',
    description:
      "<p>Free Code Camp mini-project. Users can search for articles that are in Wikipedia. A list of up to 10 matches will display and users can click on them to go to the actual Wikipedia page.</p>\
            <p>This project had me trying to understand how Wikipedia's API worked and also how to animate and transition elements of a webpage.</p>",
    github: 'https://github.com/cazyw/wikipedia-viewer',
    demo: 'https://cazyw.github.io/wikipedia-viewer/'
  },
  jstwitch: {
    aim: "Link to Twitch's API to display status information about certain streamers.",
    skills: 'Skills: HTML, CSS, Javascript and Jquery, requests to APIs',
    description:
      '<p>Free Code Camp mini-project. The page shows a pre-defined list of twitch streamers and some information about them (online / offline / game details if currently online).</p>\
            <p>The most challenging aspect of this project was implementing the status toggles at the top as these expanded and contracted depending on mouse position/action. These were implemented using CSS transitions on hover. I also experimented with using and styling unordered lists, flexbox and changing the content to be responsive to screen size.</p>',
    github: 'https://github.com/cazyw/twitchTV',
    demo: 'https://cazyw.github.io/twitchTV/'
  },
  rubyrails: {
    aim: 'Build a microblog app using Ruby on Rails',
    skills: '',
    description:
      '<p>Building a Ruby on Rails App with this tutorial: <a href="http://www.railstutorial.org">Ruby on Rails Tutorial: Learn Web Development with Rails by Michael Hartl</a>. This was my introduction to the Model View Controller (MVC) pattern and using Rails. Following this tutorial took me through the steps of building a twitter-like app which allowed users to: create an account (including the use of secure passwords), receive an activation email (using SendGrid), log in, post a micro blog including pictures, follow and unfollow other users, and for users with admin access, delete other users.</p>\
              <p>This tutorial also introduced me to writing automated tests, the test driven development, and the "Red, Green, Refactor" cycle.</p>\
              <p>The App is currently deployed and available on Heroku.</p>',
    github: 'https://github.com/cazyw/RubyOnRailsTut-sample-app',
    demo: 'https://fierce-mountain-5351.herokuapp.com'
  },
  railsPhotoBlog: {
    aim: 'Build a photo blog using Ruby on Rails ',
    skills: 'Skills: HTML, CSS, Ruby on Rails, Heroku, AWS S3',
    description:
      "<p>Building a photo blog using what I'd learnt so far in Rails and deploying to Heroku. This project is on hold and a work in progress as I am focusing on Javascript at the moment. </p>\
        <p>The idea for this is to be able to post a photo (food, holiday snap etc) and then write a bit of a reflection on the place or experience or random thought. I'll definitely be adding more features such as adding comments and a calendar. Although in reality I will be the only one using it, it will be a fun learning experience to add other features that are common in Rails apps. </p>\
              <p>The App is currently deployed and available on Heroku.</p>",
    github: 'https://github.com/cazyw/photo-blog',
    demo: 'https://foodforthesoul-blog.herokuapp.com/'
  },
  jscalculator: {
    aim: 'Build a calculator app ',
    skills: 'Skills: HTML, CSS, Javascript',
    description:
      '<p>Free Code Camp mini-project. The calculator app was built using HTML, CSS, Javascript and Jquery. </p>\
        <p>One of the main challenges of this app was determining how to store data so that it could be later retrieved and manipulated. Whilst this was fairly straightfoward for simple [+ - / x] operations, the calculator needed to handle additional features such as deletion, decimals and negative numbers. I realised that simpler is sometimes better.</p>\
        <p>It was also fun to work out how to create 3D effects and working out the design aspects to try to mirror the appearance of a real-life calculator.</p>',
    github: 'https://github.com/cazyw/calculator',
    demo: 'https://cazyw.github.io/calculator/'
  },
  jspomodoro: {
    aim: 'Build a pomodoro timer app ',
    skills: 'Skills: HTML, CSS, Javascript',
    description:
      '<p>Free Code Camp mini-project. The pomodoro timer was built using HTML, CSS and Javascript. </p>\
        <p>The pomodoro timer alternates between study sessions and break sessions and users can change the time allocated to studying and breaks.</p>\
        <p>One of the main challenges of this app was determining how to visually display the progression of time in an interesting way. I decided to use scalable vector graphics (svg), starting with a base white circle that is filled in with a colour as time passess (or un-filled during the break). A border was also added for additional highlighting of the state (session vs break).</p>\
        <p>This was a really fun project to work that again expanded my knowledge of CSS and the use of timers in javascript</p>',
    github: 'https://github.com/cazyw/pomodoro-clock',
    demo: 'https://cazyw.github.io/pomodoro-clock/'
  },
  jstictactoe: {
    aim: 'Build a Tic Tac Toe Game',
    skills: 'Skills: HTML, CSS, Javascript',
    description:
      "<p>Free Code Camp mini-project. Users can play a game of tic tac toe either against another player or against the computer. A simple logic guarantees the computer will at worst draw a game.</p>\
        <p>It was a challenge to think about how to structure the code for this game, how to break it down into re-usable functions, how to manipulate time and have the different elements transition and fade in and out smoothly. One area that could be improved is that the game is not quite responsive. The game displays fine (except on really narrow screens) but it isn't 100% responsive as the game has fixed widths.</p>\
        <p>This was a really fun project to research how to implement some simple logic of an AI. Check Github for further details.</p>",
    github: 'https://github.com/cazyw/tic-tac-toe',
    demo: 'https://cazyw.github.io/tic-tac-toe/'
  },
  jssimongame: {
    aim: 'Build a Simon Game',
    skills: 'Skills: HTML, CSS, Javascript, Webpack',
    description:
      '<p>Free Code Camp mini-project. Users can test their memory. The computer will play a sequentially longer series of tones/colours and players must try to replicate the sequence.</p>\
        <p>It was a challenge as this included both audio elements (which I had never used before) and timed elements (which can get complicated when combined with audio elements). </p>\
        <p>This was a really fun project looking at how to incorporate audio into a game. I also learned how to use npm, webpack, used modules and classes and thought about code structure.</p>',
    github: 'https://github.com/cazyw/simon-game',
    demo: 'https://cazyw.github.io/simon-game/'
  },
  jsspotify: {
    aim: 'Download track details from Spotify playlists',
    skills: 'Skills: Javascript, Node.js, Express, REST APIs, Heroku, HTML, CSS, Webpack, Babel',
    description:
      "<p>This was a personal project - I wanted to be able to download track details (song name, album, artist) from my Spotify playlists. There isn't a way to do this on Spotify itself, so I thought, why not do it myself!</p>\
        <p>Building this project was both fun and fruitful (since it's something I'll actually use). Things I used/learnt included:  connecting to Spotify's Web API; how to do authorisation and the storing of configuration variables; running a node server on Heroku; Javascript Promises; including links to download data as a file; using webpack for modular javascript coding</p>\
        <p>From the website users can log into their Spotify account and display and download track details for their playlists</p>",
    github: 'https://github.com/cazyw/spotify-playlist-backup',
    demo: 'https://spotify-playlist-backup.herokuapp.com/'
  },
  reactexpressshakespeare: {
    aim: 'Create an online collection of Shakespeare quotes',
    skills: 'Skills: Javascript, Node.js, Express, Rest APIs, React, MongoDB, Mocha, TDD, Heroku, HTML, CSS',
    description:
      '<p>This was a personal project to create a web app where I could save a collection of Shakespeare quotes online. I use this as part of #ShakespeareSunday on Twitter!</p>\
    <p>This was my first project with a React front-end, a more comprehensive Express server, and connecting to a MongoDB database. I also started to include more testing in my project. Checkout the Github Repo for more details.</p>\
    <p>My current project - this is a work in progress.</p>',
    github: 'https://github.com/cazyw/shakespeare-quotes',
    demo: 'https://shakespeare-sunday.herokuapp.com/'
  },
  canvassnake: {
    aim: 'Use HTML5, Canvas and Javascript to build old-school classic games',
    skills: 'Skills: HTML5, CSS, Canvas, Javascript',
    description:
      '<p>I saw a few videos of game developers building simple classic games using Canvas and decided to try it out myself. Really fun.</p>\
    <p>So far I\'ve remade <a href="https://cazyw.github.io/fun/snake.html" target="_blank"> Snake</a> and my next project will be to remake Pong (which I\'ve done before in Python but that needs to be run in CodeSkulptor, a browser-based Python interpreter)</p>\
    <p>To play Snake: use the Up, Down, Left, Right keys to control the snake and try to eat the apple without runing into your self. There\'s a slight bug in the randomisation at the moment (the apple may randomly appear on the snake).</p>',
    github: 'https://github.com/cazyw/coding-challenges/tree/master/canvas',
    demo: 'https://cazyw.github.io/fun/snake.html'
  },
  chrometraffic: {
    aim: 'Learn and build a chrome extension',
    skills: 'Skills: HTML5, CSS, Javascript, Webpack, Chrome Extension, Mocha',
    description:
      '<p>Learning about chrome extensions, I decided to build something for the devtools panel that would analyse web traffic by some tracking agencies. A lot of this information is already available in the Network panel of devtools which displays all network traffic. I decided to extract those from tracking agencies and display them and the data they are sending in an easier to read format.</p>\
    <p>Collecting the network traffic was fairly easy using the webrequest API. The challenge was with the front-end rendering and modifying the CSS to be able to render the data clearly. </p>',
    github: 'https://github.com/cazyw/web-traffic-analyser',
    demo: 'https://github.com/cazyw/web-traffic-analyser'
  }
};

const buildAim = (project, projectDetails) => {
  const aim = document.createElement('h2');
  aim.textContent = `${projects[project]['aim']}`;
  projectDetails.appendChild(aim);
};

const buildSkills = (project, projectDetails) => {
  const skills = document.createElement('div');
  skills.classList.add('text-faded');
  skills.innerHTML = `<p>${projects[project]['skills']}</p>`;
  projectDetails.appendChild(skills);
};

const buildDetails = (project, projectDetails) => {
  const details = document.createElement('div');
  details.classList.add('text-faded');
  details.innerHTML = `${projects[project]['description']}`;
  projectDetails.appendChild(details);
};

const buildGitHubDemoButtons = (project, projectDetails) => {
  const githubrepo = document.createElement('div');
  githubrepo.classList.add('text-center');
  githubrepo.classList.add('project-buttons');
  githubrepo.innerHTML = `<a href="${
    projects[project]['github']
  }" target="_blank" class="btn btn-default btn-sm sr-button">GitHub Repo</a>`;
  githubrepo.innerHTML += `<a href="${
    projects[project]['demo']
  }" target="_blank" class="btn btn-default btn-sm sr-button">Demo</a></div>`;
  projectDetails.appendChild(githubrepo);
};

const buildLinkBack = (project, projectDetails) => {
  const linkBack = document.createElement('div');
  linkBack.innerHTML = `<div><a href="#${project}-anchor"><i class="fa fa-chevron-up link" aria-hidden="true"></i></a></div>`;
  projectDetails.appendChild(linkBack);
};

// When a project thumbnail is selected, the project details are added to the webpage
const projectDetails = project => {
  const projectDetails = document.getElementById('projectDetails');

  buildAim(project, projectDetails);
  buildSkills(project, projectDetails);
  buildDetails(project, projectDetails);
  buildGitHubDemoButtons(project, projectDetails);
  buildLinkBack(project, projectDetails);
};

// toggles the project summary overlay
const toggleProjectSummary = elem => {
  console.log(elem.classList);
  elem.classList.contains('box-clicked') ? elem.classList.remove('box-clicked') : elem.classList.add('box-clicked');
};

// gets the position to insert the project details box
// inserts the details box right below the project image
// calculations required as the number of project images per line
// changes depending on viewport width
let insertProjectBoxPosition = element => {
  // bootstrap grid breakpoints
  const sm = 768;
  const lg = 1200;

  let projectSelectedPosition = 0;
  console.log(element.parentNode.parentNode.parentNode.parentNode.parentNode);
  let projectBox = element.parentNode.parentNode.parentNode.parentNode.parentNode;
  while ((projectBox = projectBox.previousElementSibling)) {
    projectSelectedPosition++;
  }

  const windowWidth = window.innerWidth;
  let insertPosition;
  if (windowWidth < sm) {
    insertPosition = projectSelectedPosition;
  } else if (windowWidth < lg) {
    insertPosition = projectSelectedPosition + (1 - (projectSelectedPosition % 2));
  } else {
    insertPosition = projectSelectedPosition + (2 - (projectSelectedPosition % 3));
  }

  return insertPosition;
};

const insertProjectDetailsBox = html => {
  let el = document.createElement('div');
  el.innerHTML = html;
  return el.childNodes[0];
};

// the box which displays details about the project
const toggleProjectBox = element => {
  console.log('toggleProjectBox', element);
  const details = document.getElementById('details');
  if (details) {
    details.parentNode.removeChild(details);
  }

  let box =
    '<div id="details" class="col-xs-12 color-bg anchor"><div class="container"><div id="projectDetails" class=""></div></div></div>';

  // the project to insert details box after
  const precedingElement = document.querySelectorAll('.col-lg-4.col-sm-6.col-xs-12')[insertProjectBoxPosition(element)];
  precedingElement.parentNode.insertBefore(insertProjectDetailsBox(box), precedingElement.nextSibling);
};

// Add event listeners

document.body.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('fa-chevron-up')) {
    setTimeout(() => {
      const details = document.getElementById('details');
      details.parentNode.removeChild(details);
    }, 1000);
  }
});

// document.body.addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log(event, event.target.className);
//   if (event.target && event.target.className === 'project-box-description') {
//     toggleProjectSummary(this);
//   }
// });

document.body.addEventListener('click', function(event) {
  console.log(event);
  if (event.target && event.target.tagName === 'A') {
    event.preventDefault();
    scrollToElement(event.target.hash.replace('#', ''));
  } else if (event.target && event.target.classList.contains('link')) {
    scrollToElement(event.srcElement.parentNode.hash.replace('#', ''));
  }

  // if (event.target && event.target.classList.contains('project-box-description')) {
  //   toggleProjectSummary(event.target.parentNode.childNodes[5]);
  // }
});

let call;
let targetElement;
let bounding = 0;
let scrolling = false;

function scroll() {
  bounding = Math.round(targetElement.getBoundingClientRect().y);
  const windowHeight = window.innerHeight;
  const docHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight);
  const windowBottom = windowHeight + window.pageYOffset;
  console.log('scrolling', bounding);

  if (bounding > 40 && bounding <= 50) {
    clearScroll();
    return;
  }

  if (bounding > 50) {
    if (windowBottom >= docHeight) {
      clearScroll();
      return;
    }
    document.documentElement.scrollTop += 5;
    return;
  }

  if (bounding < 40) {
    if (document.documentElement.scrollTop === 0) {
      clearScroll();
      return;
    }
    document.documentElement.scrollTop -= 5;
    return;
  }

  clearScroll();
  return;
}

function clearScroll() {
  scrolling = false;
  clearInterval(call);
}

function scrollToElement(target) {
  if (scrolling) {
    clearScroll();
  }

  scrolling = true;
  setTimeout(() => {
    targetElement = document.getElementById(target);
    call = setInterval(scroll, 5);
  }, 500);
}

document.addEventListener('click', function(event) {
  console.log(event);
  if (event.target && event.target.className === 'fa fa-commenting-o link') {
    event.preventDefault();
    console.log('details clicked', event.target.parentNode);
    const project = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    console.log('project', project);
    toggleProjectBox(event.target.parentNode);
    projectDetails(project);
  }
});

document.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event.target.parentNode.parentNode.parentNode.className);
  if (event.target && event.target.parentNode.parentNode.parentNode.className === 'navbar-collapse collapse in') {
    collapse('.navbar-collapse', 'toggle');
  }
});

// map our commands to the classList methods
const fnmap = {
  toggle: 'toggle',
  show: 'add',
  hide: 'remove'
};
const collapse = (selector, cmd) => {
  const targets = Array.from(document.querySelectorAll(selector));
  targets.forEach(target => {
    target.classList[fnmap[cmd]]('show');
  });
};

// $(document).ready(function() {
//   $('.navbar-collapse ul li a').on('click', function(event) {
//     // $('.navbar-collapse').collapse('hide');
//   });
// });

// Polyfill required for Microsoft Edge and IE 9 and above

(function(arr) {
  arr.forEach(function(item) {
    if (item.hasOwnProperty('after')) {
      return;
    }
    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function(argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
