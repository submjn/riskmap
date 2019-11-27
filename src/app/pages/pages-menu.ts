import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'SabreConnect',
    group: true,
  },
  {
    title: 'Companies',
    icon: 'home-outline',
    link: '/pages/companies',
    home: true,
  },
  {
    title: 'Internal',
    icon: 'hard-drive-outline',
    children: [
      {
        title: 'Assessments',
        link: '/pages/assessment',
        icon: 'globe-outline',
      },
      {
        title: 'Company Summary',
        link: '/pages/analytics/dashboard',
        icon: 'book-outline',
      },
    ],
  },
  {
    title: 'Analytics',
    link: '/pages/analytics/comparision',
    icon: 'activity-outline',
  },
  // {
  //   title: 'Settings',
  //   link: '/pages/settings',
  //   icon: 'settings-outline',
  // },
  {
    title: 'Settings',
    link: '/pages/settings/settings.component',
    icon: 'settings-outline',
    queryParams: { someUrlParam: 'true'},
    pathMatch: 'prefix',
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
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
