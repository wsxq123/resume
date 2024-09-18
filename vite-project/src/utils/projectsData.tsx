import ULSpeak from '@src/components/projects/ULSpeak';
import ULSee360 from '@src/components/projects/ULSee360';
import Guanggu from '@src/components/projects/Guanggu';
import GUStyle from '@src/components/projects/GUStyle';
// import JavaApp from '@src/components/projects/JavaApp';
import Weibao from '@src/components/projects/Weibao';
import ULSpeakBtnJpg from '@assets/home/book/ulSpeak_button.jpg';
import ULsee360BtnJpg from '@assets/home/book/ulsee360_button.jpg';
import GuangguBtnJpg from '@assets/home/book/guanggu_button.jpg';
import GUStyleBtnJpg from '@assets/home/book/guStyle_button.jpg';
// import MonkeyBtnJpg from '@assets/home/book/monkey_button.jpg';
// import JavaAppBtnJpg from '@assets/home/book/javaApp_button.jpg';
import WeibaoBtnJpg from '@assets/home/book/weibao_button.jpg';

export const catalogOption = [
  {
    id: 0,
    title: 'ULSpeak - Text-to-Speech Tool',
    imgUrl: ULSpeakBtnJpg,
    element: <ULSpeak />,
  },
  {
    id: 1,
    title: 'ULSEE360 - 3D Dynamic Navigation',
    imgUrl: ULsee360BtnJpg,
    element: <ULSee360 />,
  },
  {
    id: 2,
    title: 'Guanggu Live - Virtual anchor (PM)',
    imgUrl: GuangguBtnJpg,
    element: <Guanggu />,
  },
  {
    id: 3,
    title: 'GUStyle- Virtual Tryon (PM)',
    imgUrl: GUStyleBtnJpg,

    element: <GUStyle />,
  },

  {
    id: 4,
    title: 'Side Project: Weibao Travel (Full-stack)',
    imgUrl: WeibaoBtnJpg,
    element: <Weibao />,
  },
  // {
  //   id: 5,
  //   title: 'Side Project : Java Application',
  //   imgUrl: JavaAppBtnJpg,
  //   element: <JavaApp />,
  // },
  // {
  //   id:6,
  //   title:'MonkeyBtnJpg',
  //   imgUrl:MonkeyBtnJpg,
  //   element: <Monkey />,
  // },
];

export const projectOption = [
  {
    id: 0,
    element: <ULSpeak />,
  },
  {
    id: 1,
    element: <ULSee360 />,
  },
  {
    id: 2,
    element: <Guanggu />,
  },
  {
    id: 3,
    element: <GUStyle />,
  },

  {
    id: 4,
    element: <Weibao />,
  },
  // {
  //   id: 5,
  //   element: <JavaApp />,
  // },
  // {
  //   id:6,
  //   element: <Monkey />,
  // },
];

export const projectDetail = [
  {
    id: 0,
    title: 'ULSpeak - Text-to-Speech Tool',
    imgUrl: ULSpeakBtnJpg,
    detail: {
      tool: [
        'Front-end Framework: React',
        'Languages: JavaScript + TypeScript',
        'Execution Environment: Node.js',
        'Version Control: git',
      ],
      features: [
        'Multi-language support (i18n)',
        'Membership system',
        'RWD',
        'Embedded Unity game',
      ],
    },
  },
  {
    id: 1,
    title: 'ULSEE360 - 3D Dynamic Navigation',
    imgUrl: ULsee360BtnJpg,
    detail: {
      tool: [
        'Front-end Framework: React (+ Next.js)',
        'Languages: JavaScript + TypeScript',
        'Execution Environment: Node.js',
        'Version Control: git',
      ],
      features: [
        'Multi-language (i18n)',
        'RWD',
        'QA Checklist (using MongoDB to store translation data)',
      ],
    },
  },
  {
    id: 2,
    title: 'Guanggu Live - Virtual anchor (PM)',
    imgUrl: GuangguBtnJpg,
    description: `Collaborated with Wuhan TV to create a virtual image and combine it with the voice synthesis service to automatically generate weekly news videos.`,
    link: 'https://reurl.cc/xL5bqZ',
  },
  {
    id: 3,
    title: 'GUStyle- Virtual Tryon (PM)',
    imgUrl: GUStyleBtnJpg,
    description: `Collaborated with GU to create a virtual try-on application.`,
    link: 'https://reurl.cc/Qerlv9',
  },
  {
    id: 5,
    title: 'Side Project: Weibao Travel (Full-stack)',
    imgUrl: WeibaoBtnJpg,
    detail: {
      tool: [
        'Front-end Framework: Angular17',
        'UI Framework: Angular Material',
        'Languages: JavaScript + TypeScript',
        'Back-end: JAVA + Spring Boot',
        'Execution Environment: Node.js',
        'Version Control: git',
      ],
      features: [
        'Multi-language (i18n)',
        'Membership system',
        'Shopping cart',
        'Back-end management system',
      ],
    },
  },
  // {
  //   id: 6,
  //   title: 'Side Project : Java Application',
  //   imgUrl: JavaAppBtnJpg,
  //   detail: {
  //     tool: ['Tools: Eclipse', 'Language: JAVA', 'Backend: MySQL'],
  //     features: ['Membership system', 'Backend system', 'Shopping cart'],
  //   },
  // },
  // {
  //   id:6,
  //   title:'MonkeyBtnJpg',
  //   imgUrl:MonkeyBtnJpg,
  //   detail: {
  //     tool: [
  //       'Tools: Unity',
  //       'Language: C#',
  //       'Backend tools: AWS',
  //       'Version control: git',
  //     ],
  //     features: [
  //       'Membership system',
  //       'Online battle (using Unity Mirror)',
  //       '2D animation binding',
  //     ],
  //   },
  // },
];
