
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Josie",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Josie",
  description: "A Software Development Engineer at Amazon",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/10hN3Xlzfclz1cCO8SXMptm5VCkdrPmGe/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from the University og Southern California (USC) in 2021 with a degree in Physics & Computer Science. I kick started my professional career as a Software Development Engineer at Amazon. When I'm not working on Amazon projects, I work on smaller projects in different programming languages as a way to learn a new language.",
    "I'm always looking to grow my tech skills as the industry advances as well as improving on the fundamentals. I also enjoy Physics - especially Quantum Mechanics and I hope to one day soon combine both computer science and physics.",
    "When I’m not programming or reading up on the latest advancements in tech and physics, I focus on my hobbies which are: drawing, learning guitar, and doing any activity that involves a board.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Software Development",
      description: "I maintain and develop software systems and services.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Python Bloch Sphere",
      description: "A Python program using QuTip to graph Quantum States on a Bloch Sphere. (Written in Python)",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/josiealv/BlochSphere",
        },
      ]
    },
    {
      title: "BASIC Interpreter",
      description: "Old Data Structures Project that runs a BASIC program when inputted as a text file on the command line. (Written in C++)",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/josiealv/BASIC_Interpreter",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at josiealvarez52@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:josiealvarez52@gmail.com",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Josie Alvarez | Software Development Engineer",
  description: "I maintain and develop software systems and services.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "Josie Alvarez",
  description: "Software Development Engineer",
  cards: [
    {
      title: "Website",
      link: "https://quantummouser.com/",
    },
    {
      title: "GitHub",
      link: "https://github.com/josiealv/",
    },
    {
      title: "LinkedIn",
      link: "www.linkedin.com/in/josie-j-alvarez",
    },
  ]
}