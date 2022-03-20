import { Mail, Home, FileText, Shield, Pocket, ChevronsRight, User, Users, UserPlus, Briefcase} from 'react-feather'


// const datas = JSON.parse(authStorage).data.message[0].admin_permission

// const authStorage = localStorage.getItem("auth")

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'group',
    title: 'Group',
    icon: <Pocket size={20} />,
    children:[
      {
        id: 'groupAdd',
        title: 'Group Manager',
        icon: <ChevronsRight size={20} />,
        navLink: '/group-detail'
      },
      {
        id: 'groupAdd',
        title: 'Add Group',
        icon: <ChevronsRight size={20} />,
        navLink: '/group-add'
      }
    ]
  },
  {
    id: 'admin',
    title: 'Admin',
    icon: <Shield size={20} />,
    children:[
      {
        id: 'admin',
        title: 'Admin Manager',
        icon: <ChevronsRight size={20} />,
        navLink: '/admin'
      },
      {
        id: 'adminAdd',
        title: 'Add Admin',
        icon: <ChevronsRight size={20} />,
        navLink: '/admin-add'
      }
    ]
  },
  {
    id: 'user',
    title: 'User',
    icon: <Users size={20} />,
    children:[
      {
        id: 'user',
        title: 'User Manager',
        icon: <User size={20} />,
        navLink: '/user'
      }
    ]
  },
  {
    id: 'datalog',
    title: 'Datalog',
    icon: <Briefcase size={20} />,
    navLink: '/datalog'
  }
  // ,
  // {
  //   id: 'profile',
  //   title: 'Profile',
  //   icon: <Briefcase size={20} />,
  //   navLink: '/profile'
  // }
]
// console.log(!authStorage)
// if (!authStorage){
  
// }
// export default authStorageJSON.parse(authStorage).data.message[0].admin_permission === 0 ? [
//   {
//     id: 'home',
//     title: 'Home',
//     icon: <Home size={20} />,
//     navLink: '/home'
//   },
//   {
//     id: 'group',
//     title: 'Group',
//     icon: <Pocket size={20} />,
//     children:[
//       {
//         id: 'groupAdd',
//         title: 'Group Manager',
//         icon: <ChevronsRight size={20} />,
//         navLink: '/group-detail'
//       },
//       {
//         id: 'groupAdd',
//         title: 'Add Group',
//         icon: <ChevronsRight size={20} />,
//         navLink: '/group-add'
//       }
//     ]
//   },
//   {
//     id: 'admin',
//     title: 'Admin',
//     icon: <Shield size={20} />,
//     children:[
//       {
//         id: 'admin',
//         title: 'Admin Manager',
//         icon: <ChevronsRight size={20} />,
//         navLink: '/admin'
//       },
//       {
//         id: 'adminAdd',
//         title: 'Add Admin',
//         icon: <ChevronsRight size={20} />,
//         navLink: '/admin-add'
//       }
//     ]
//   },
//   {
//     id: 'user',
//     title: 'User',
//     icon: <Users size={20} />,
//     children:[
//       {
//         id: 'user',
//         title: 'User Manager',
//         icon: <User size={20} />,
//         navLink: '/user'
//       }
//     ]
//   }
// ] : [
//   {
//     id: 'home',
//     title: 'Home',
//     icon: <Home size={20} />,
//     navLink: '/home'
//   },
//   {
//     id: 'device',
//     title: 'Device',
//     icon: <Users size={20} />,
//     children:[
//       {
//         id: 'device',
//         title: 'Device Manager',
//         icon: <User size={20} />,
//         navLink: '/device'
//       }
//     ]
//   }
// ]
