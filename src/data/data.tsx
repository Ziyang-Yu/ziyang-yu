import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import resume from '../assets/CV.pdf'
import heroImage from '../images/header-background.webp';
import pekingduck from '../images/portfolio/pekingduck.jpg';
import cocktail from '../images/portfolio/cocktail.jpg';
import hamburger from '../images/portfolio/hamburger.jpg';
import lane from '../images/portfolio/lane.jpg';
import mooncake from '../images/portfolio/mooncake.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ziyang Yu\'s homepage',
  description: "Personal website for Ziyang Yu.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'photos',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ziyang Yu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Shenzhen based <strong className="text-stone-100">Undergraduate Student</strong> majoring in <strong className="text-stone-100">
          Mathematics and Applied Mathematics</strong>, currently studying
        at <strong className="text-stone-100">Southern University of Science and Technology</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me traveling around <strong className="text-stone-100">Shenzhen</strong>, playing <strong className="text-stone-100">video games </strong> 
        and watching <strong className="text-stone-100">Janpanese Animation</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://github.com/Ziyang-Yu/ziyang-yu.github.io/blob/main/src/assets/CV.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Ziyang is highly self-motivated undergraduate student. During his study, he has an extensive interest in Computer Science and Engineering. 
  He is familiar with deep learning models and frameworks, especially in Graph Neural Networks. Besides, he can also act as a full-stack engineer. `,
  aboutItems: [
    {label: 'Location', text: 'Shenzhen, China', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Traveling, Delicious food', Icon: SparklesIcon},
    {label: 'Study', text: 'Southern University of Science and Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'N/A', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  
  {
    name: 'Deep Learning',
    skills: [
      {
        name: 'Pytorch',
        level: 9,
      },
      {
        name: 'Pytorch Geometric',
        level: 8,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'C/C++',
        level: 4,
      },
      {
        name: 'Javascripts',
        level: 6,
      },
      {
        name: 'html',
        level: 4,
      },
      {
        name: 'CSS',
        level: 4,
      },
    ],
  },
  {
    name: 'Office Tools',
    skills: [
      {
        name: 'Latex',
        level: 8,
      },
      {
        name: 'Markdown',
        level: 6,
      },
      {
        name: 'Word',
        level: 7,
      },
      {
        name: 'Excel',
        level: 8,
      },
      {
        name: 'PowerPoint',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Peking Duck',
    description: '',
    url: 'https://github.com/Ziyang-Yu/ziyang-yu.github.io/blob/main/src/images/portfolio/pekingduck.jpg',
    image: pekingduck,
  },
  {
    title: 'Cocktail',
    description: '',
    url: 'https://github.com/Ziyang-Yu/ziyang-yu.github.io/blob/main/src/images/portfolio/cocktail.jpg',
    image: cocktail,
  },
  {
    title: 'Hamburger',
    description: '',
    url: 'https://github.com/Ziyang-Yu/ziyang-yu.github.io/blob/main/src/images/portfolio/hamburger.jpg',
    image: hamburger,
  },
  {
    title: 'Lane',
    description: '',
    url: 'https://github.com/Ziyang-Yu/ziyang-yu.github.io/blob/main/src/images/portfolio/lane.jpg',
    image: lane,
  },
  {
    title: 'Mooncake',
    description: '',
    url: 'https://github.com/Ziyang-Yu/ziyang-yu.github.io/blob/main/src/images/portfolio/mooncake.jpg',
    image: mooncake,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2019 - present',
    location: 'Southern Univerisity of Science and Technology',
    title: 'Bachelor of Science in Mathematics (Expected)',
    content: <p>Attended courses in computer science and mathematics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Emory University',
    title: 'Visiting Student',
    content: (
      <p>
        Propose a novel method to improve the performance of GNNAutoscale.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: '韩愈',
      text: '业精于勤，荒于嬉；行成于思，毁于随。',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: '《格言联璧》',
      text: '志之所趋，无远勿届，穷山距海，不能限也。志之所向，无坚不入，锐兵精甲，不能御也。',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },

  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: '11910419@mail.sustech.edu.cn',
      href: 'mailto:11910419@mail.sustech.edu.cn',
    },
    {
      type: ContactType.Location,
      text: 'Shenzhen, China',
      href: 'https://www.google.ca/maps/place/%E4%B8%AD%E5%9B%BD%E5%B9%BF%E4%B8%9C%E7%9C%81%E6%B7%B1%E5%9C%B3%E5%B8%82/@22.5554164,113.9134509,11z/data=!3m1!4b1!4m6!3m5!1s0x3403f408d0e15291:0xfdee550db79280c9!8m2!3d22.5428599!4d114.05956!16zL20vMGxibXY',
    },
    {
      type: ContactType.Github,
      text: 'Ziyang-Yu\'s github',
      href: 'https://github.com/Ziyang-Yu',
    },
    {
      type: ContactType.Wechat,
      text: 'yuziyang0929',
    }

  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Ziyang-Yu'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.cn/incareer/in/%E5%AD%90%E6%B4%8B-%E5%96%BB-ba99a2219'},
];
