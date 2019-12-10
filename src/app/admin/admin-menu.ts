import { NbMenuItem } from '@nebular/theme';

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin',
    group: true,
  },
  {
    title: 'Companies',
    icon: 'home-outline',
    link: '/admin/companies',
    home: true,
  },
  {
    title: 'Assessments',
    icon: 'home-outline',
    link: '/admin/assessments',
    home: true,
  },
  {
    title: 'Options',
    icon: 'home-outline',
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
