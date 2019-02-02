/**
 * Javascript file that generates the devicon section
 * and builds the project tiles
 *
 */

/**
 * TEMPLATES
 */

let projectTemplate = `
  <div class='col-lg-4 col-sm-6 col-xs-12'>
    <div class='project-box' id='PROJECT_ID'>
      <span id='PROJECT_ANCHOR' class='project-anchor'></span>
      <div class='project-image'>
        <img src='PROJECT_IMG' class='img-responsive'  alt='PROJECT_ID'>
      </div>
      <div class='project-box-description'>
        <div class='project-box-text'>
          <div class='project-name'>
            PROJECT_TITLE
          </div>
          <div class='project-description'>
            PROJECT_DESCRIPTION
          </div>
          <div class='project-icons'>
            <a href='#details' class='project-details'>
              <i class='fa fa-commenting-o' aria-hidden='true'></i>
            </a>
            <a href='PROJECT_GITHUB' target='_blank' alt='PROJECT_GITHUB'>
              <i class='fa fa-github' aria-hidden='true'></i>
            </a>
            <a href='PROJECT_DEMO' target='_blank' alt='PROJECT_DEMO'>
              <i class='fa fa-television' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;

let iconTemplate = `
  <div class='coding-icons text-center'>
    <i class='languageIcon DEVICONS'></i>
  </div>
`;

/**
 * DATA
 */

const icons = [
  'devicon-react-original colored',
  'devicon-html5-plain colored',
  'devicon-css3-plain colored',
  'devicon-javascript-plain colored',
  'devicon-nodejs-plain colored',
  'devicon-mocha-plain colored',
  'devicon-heroku-original-wordmark colored',
  'devicon-mongodb-plain-wordmark colored',
  'devicon-python-plain colored',
  'devicon-ruby-plain colored',
  'devicon-rails-plain colored',
  'devicon-git-plain colored',
  'devicon-webpack-plain colored',
  'devicon-amazonwebservices-original colored'
];

const projectOverview = [
  {
    id: 'reactexpressshakespeare',
    anchor: 'reactexpressshakespeare-anchor',
    img: 'img/react-express-shakespeare.jpg',
    title: 'Shakespeare Quotes',
    description: 'To be or not to be, that is the question',
    github: 'https://github.com/cazyw/shakespeare-quotes',
    demo: 'https://shakespeare-sunday.herokuapp.com/'
  },
  {
    id: 'jsspotify',
    anchor: 'jsspotify-anchor',
    img: 'img/js-spotify.jpg',
    title: 'Spotify Playlist Backup',
    description: 'Download track details from your playlists',
    github: 'https://github.com/cazyw/spotify-playlist-backup',
    demo: 'https://spotify-playlist-backup.herokuapp.com/'
  },
  {
    id: 'railsPhotoBlog',
    anchor: 'railsPhotoBlog-anchor',
    img: 'img/rails-photoblog.jpg',
    title: 'Photo Blog - Food for the soul',
    description: 'Reflections in Rails',
    github: 'https://github.com/cazyw/photo-blog',
    demo: 'https://foodforthesoul-blog.herokuapp.com/'
  },
  {
    id: 'jssimongame',
    anchor: 'jssimongame-anchor',
    img: 'img/js-simongame.jpg',
    title: 'Simon Game',
    description: 'How good is your memory?',
    github: 'https://github.com/cazyw/simon-game',
    demo: 'https://cazyw.github.io/simon-game'
  },
  {
    id: 'jscalculator',
    anchor: 'jscalculator-anchor',
    img: 'img/js-calculator.jpg',
    title: 'Calculator',
    description: 'How good is your maths?',
    github: 'https://github.com/cazyw/calculator',
    demo: 'https://cazyw.github.io/calculator'
  },
  {
    id: 'jstictactoe',
    anchor: 'jstictactoe-anchor',
    img: 'img/js-tictactoe.jpg',
    title: 'Tic Tac Toe',
    description: 'Can you beat the computer?',
    github: 'https://github.com/cazyw/tic-tac-toe',
    demo: 'https://cazyw.github.io/tic-tac-toe'
  },
  {
    id: 'htmldoctorwho',
    anchor: 'htmldoctorwho-anchor',
    img: 'img/html-doctorwho.jpg',
    title: 'First website using Bootstrap',
    description: 'Bootstrap is awesome!',
    github: 'https://github.com/cazyw/time-and-space/tree/gh-pages',
    demo: 'https://cazyw.github.io/time-and-space'
  },
  {
    id: 'jspomodoro',
    anchor: 'jspomodoro-anchor',
    img: 'img/js-pomodoro.jpg',
    title: 'Pomodoro Timer',
    description: "It's studying time!",
    github: 'https://github.com/cazyw/pomodoro-clock',
    demo: 'https://cazyw.github.io/pomodoro-clock'
  },
  {
    id: 'jsquote',
    anchor: 'jsquote-anchor',
    img: 'img/js-quote.jpg',
    title: 'Quote Generator',
    description: 'Life lessons from those far wiser',
    github: 'https://github.com/cazyw/quote-generator',
    demo: 'https://cazyw.github.io/quote-generator'
  },
  {
    id: 'jsweather',
    anchor: 'jsweather-anchor',
    img: 'img/js-weather.jpg',
    title: 'Weather App',
    description: "What's the weather in your area?",
    github: 'https://github.com/cazyw/local-weather',
    demo: 'https://cazyw.github.io/local-weather'
  },
  {
    id: 'jswikipedia',
    anchor: 'jswikipedia-anchor',
    img: 'img/js-wikipedia.jpg',
    title: 'Wikipedia viewer',
    description: 'Plug into Wikipedia to find stuff',
    github: 'https://github.com/cazyw/wikipedia-viewer',
    demo: 'https://cazyw.github.io/wikipedia-viewer'
  },
  {
    id: 'jstwitch',
    anchor: 'jstwitch-anchor',
    img: 'img/js-twitch.jpg',
    title: 'Twitch Streams',
    description: "Streams I'm following...maybe",
    github: 'https://github.com/cazyw/twitchTV',
    demo: 'https://cazyw.github.io/twitchTV'
  },
  {
    id: 'pybackup',
    anchor: 'pybackup-anchor',
    img: 'img/py-backup.jpg',
    title: 'File Backup',
    description: 'Simple file backup program in python',
    github: 'https://github.com/cazyw/python-file-backup',
    demo: 'backup_screenshots.html'
  },
  {
    id: 'pywebsite',
    anchor: 'pywebsite-anchor',
    img: 'img/py-website.jpg',
    title: 'Website Builder',
    description: 'Python script to generate webpages from text files',
    github: 'https://github.com/cazyw/time-and-space/blob/gh-pages/series/create_site.py',
    demo: 'https://github.com/cazyw/time-and-space/blob/gh-pages/series/create_site.py'
  },
  {
    id: 'reactclock',
    anchor: 'reactclock-anchor',
    img: 'img/react-2.jpg',
    title: 'Clock built with React',
    description: "What's the current time?",
    github: 'https://github.com/cazyw/LS-Pro-React-II',
    demo: 'https://cazyw.github.io/LS-Pro-React-II'
  },
  {
    id: 'pyspaceship',
    anchor: 'pyspaceship-anchor',
    img: 'img/py-spaceship.jpg',
    title: 'Spaceship Shooter',
    description: 'Feel like shooting some asteroids?',
    github: 'https://github.com/cazyw/interactive-python/blob/master/Wk8_RiceRocks.py',
    demo: 'https://github.com/cazyw/interactive-python/blob/master/Wk8_RiceRocks.py'
  },
  {
    id: 'pypong',
    anchor: 'pypong-anchor',
    img: 'img/py-pong.jpg',
    title: 'Pong Game',
    description: 'An old-time classic',
    github: 'https://github.com/cazyw/coding-challenges/tree/master/canvas',
    demo: 'https://cazyw.github.io/fun/pong.html'
  },
  {
    id: 'canvassnake',
    anchor: 'canvassnake-anchor',
    img: 'img/canvas-snake.jpg',
    title: 'Snake',
    description: 'Old-time classic before smartphones',
    github: 'https://github.com/cazyw/coding-challenges/tree/master/canvas',
    demo: 'https://cazyw.github.io/fun/snake.html'
  }
];

const insertIcons = () => {
  const iconSection = icons
    .map(icon => {
      let temp = iconTemplate;
      return temp.replace('DEVICONS', icon);
    })
    .join('');
  document.getElementById('devicons').innerHTML = iconSection;
};

const insertProjects = () => {
  const projectSection = projectOverview
    .map(proj => {
      let temp = projectTemplate;
      return temp
        .replace('PROJECT_ANCHOR', proj['anchor'])
        .replace(/PROJECT_IMG/g, proj['img'])
        .replace(/PROJECT_ID/g, proj['id'])
        .replace(/PROJECT_TITLE/g, proj['title'])
        .replace(/PROJECT_DESCRIPTION/g, proj['description'])
        .replace(/PROJECT_GITHUB/g, proj['github'])
        .replace(/PROJECT_DEMO/g, proj['demo']);
    })
    .join('');
  document.getElementById('project-boxes').innerHTML = projectSection;
};

insertIcons();
insertProjects();
