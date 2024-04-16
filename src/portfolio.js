const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://isaachrr4.github.io/welcome-to-forever-3',
  title: 'IH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Isaac Harris',
  role: 'Full Stack Developer',
  description:
    'I am a Junior Full Stack Developer with a strong passion for technology. I love playing video games, watching movies and anime. I am also a huge Star Wars amd comic book nerd! I believe technology is the future and it is one of my true passions in life. I love to code, build projects and make memories and friends along the way. I enjoy learning new skills and technologies because in this field the learning never stops and honestly c thats the best part about it.',
  resume: 'https://drive.google.com/file/d/1LuNhB7XujoBWgAmu5DDKqqm8m6q-Wr95/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/isaac-harris-608644209',
    github: 'https://github.com/isaachrr4',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Crypto-Tycoon',
    description:
      'A clicker crypto game that converts your virtual Dodgecoin into virtual USD. Which is then used to build a virtual computer.',
    stack: ['HTML5', 'CSS', 'React.js', 'JavaScript'],
    sourceCode: 'https://github.com/AnthonySzymczak/Crypto-Tycoon',
    livePreview: 'https://anthonyszymczak.github.io/Crypto-Tycoon/',
  },
  {
    name: 'PokeDecks',
    description:
      'PokeDecks is an app where you can view, store, and choose some of your favorite pokemon cards.',
    stack: ['Java 8', 'TypeScript', 'React', 'Spring Boot'],
    sourceCode: 'https://github.com/Raevyn0/Project2-UI',
    livePreview: 'https://github.com',
  },
  {
    name: 'Expense Reimbursement',
    description:
      'This is an application that is used to help you find employees within the database and it also helps manage the process of reimbursing employees for expenses incurred while on companyt time',
    stack: ['Java 8', 'Docker', 'servlet API v4'],
    sourceCode: 'https://github.com/220509-web-dev/psychic-potato-Isaac',
    livePreview: 'https://github.com',
  },
  {
    name: 'Run Buddy',
    description:
      'Run Buddy is a site where you can sign up for a personal trainer',
    stack: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/isaachrr4/run-buddy',
    livePreview: 'https://isaachrr4.github.io/run-buddy/',
  },
  {
    name: 'Photo Port',
    description:
      'This is a simple react app that is used to store and display photographers photos for people to view and emjoy at their leisure',
    stack: ['JavaScript', 'Node.js', 'React.js'],
    sourceCode: 'https://github.com/isaachrr4/photo-port',
    livePreview: 'https://isaachrr4.github.io/photo-port/',
  },
  {
    name: 'Foodie-Fest',
    description:
      'this is an app that was designed for a food event. It allows you to sign up to schedule events and purchase tickets for those events as well. It also provides a schedule so you know which events are happening.',
    stack: ['JavaScript', 'HTML5', 'CSS', 'Webpack'],
    sourceCode: 'https://github.com/isaachrr4/foodie-fest',
    livePreview: 'https://isaachrr4.github.io/foodie-fest/',
  },
  {
    name:'Taskinator',
    description: 'A simple web application that allows you to record and trak your tasks for the day!',
    stack: ['JavaScript', 'HTML5', 'CSS'],
    sourceCode:'https://github.com/isaachrr4/taskinator',
    livePreview:'https://isaachrr4.github.io/taskinator/'
  },
  {
    name:'Star-Society',
    description: 'A Social network api that allows you to create a user and add thoughts and reactions for that user.',
    stack: ['JavaScript', 'MongoDB'],
    sourceCode:'https://github.com/isaachrr4/star-society'

  },
  {
    name: 'Employee Database',
    description: 'a noide app that runs in the terminal and it pulls and displays data from its connected database that stores employee information',
    stack: ['SQL', 'JavaScript'],
    sourceCode: 'https://github.com/isaachrr4/employee-database'
  }
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Spring Boot',
  'Java 8',
  'AWS EC2',
  'AWS S3',
  'Python',
  'Docker',
  'Apache Maven',
  'PostgreSQL',
  'MySQL',
  'Node.js',
  'RDBS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'isaacharris90@yahoo.com',
}

export { header, about, projects, skills, contact }
