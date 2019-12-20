import { NbMenuItem } from '@nebular/theme';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin',
    group: true,
  },
  {
    title: 'Companies',
    icon: 'people-outline',
    link: '/admin/companies',
    home: true,
  },
  {
    title: 'Assessments',
    icon: 'grid-outline',
    link: '/admin/assessments',
    home: true,
  },
  {
    title: 'Questions',
    icon: 'question-mark-circle-outline',
    link: '/admin/questions',
    home: true,
  },
  {
    title: 'Options',
    icon: 'options-outline',
    link: '/admin/options',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
