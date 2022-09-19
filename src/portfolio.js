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
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://drive.google.com/file/d/1CvuAP8yW6ZFqvtmjOHxyy46P75aHV5uP/view?usp=sharing',
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
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML5', 'CSS', 'React.js', 'JavaScript'],
    sourceCode: 'https://github.com/AnthonySzymczak/Crypto-Tycoon',
    livePreview: 'https://anthonyszymczak.github.io/Crypto-Tycoon/',
  },
  {
    name: 'PokeDecks',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Java 8', 'TypeScript', 'React', 'Spring Boot'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
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
  'AWS S3'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'isaacharris90@yahoo.com',
}

export { header, about, projects, skills, contact }
