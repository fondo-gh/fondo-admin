/*
Main item menu array list
*/
var menu = [
  {
    title: 'Dashboard',
    icon: ['dripicons-home', 'typcn typcn-home'],
    href: '/admin/dashboard/'
  },
  {
    title: 'Startups',
    icon: ['dripicons-view-thumb', 'typcn typcn-th-large'],
    href: '/admin/startups/'
  },
  {
    title: 'Investors',
    icon: ['dripicons-view-thumb', 'typcn typcn-th-large'],
    href: '/admin/investors/'
  },
  {
    title: 'Users',
    icon: ['dripicons-view-thumb', 'typcn typcn-th-large'],
    href: '/admin/users/'
  },
  {
    title: 'Settings',
    icon: ['dripicons-document-edit', 'typcn typcn-spanner'],
    child: [
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/profile/',
        title: 'Profile'
      },
      {
        icon: ['v-internal-icon', 'typcn typcn-media-record'],
        href: '/admin/logout',
        title: 'Logout'
      }
    ]
  }

]

export { menu }
