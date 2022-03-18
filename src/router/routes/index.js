import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Smart Parcel Box'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/group-detail',
    component: lazy(() => import('../../views/Group/Group'))
  },
  {
    path: '/group-add',
    component: lazy(() => import('../../views/Group/Groupadd'))
  },  
  {
    path: '/device',
    component: lazy(() => import('../../views/Device/Device'))
  },    
  {
    path: '/device-add',
    component: lazy(() => import('../../views/Device/Deviceadd'))
  },
  {
    path: '/user',
    component: lazy(() => import('../../views/User/User'))
  },      
  {
    path: '/admin',
    component: lazy(() => import('../../views/Admin/Admin'))
  },
  {
    path: '/admin-add',
    component: lazy(() => import('../../views/Admin/Adminadd'))
  },  
  {
    path: '/deviceuser',
    component: lazy(() => import('../../views/Device/Deviceuser'))
  },
  {
    path: '/datalog',
    component: lazy(() => import('../../views/Datalog/Datalogadmin'))
  },
  {
    path: '/dataloguser',
    component: lazy(() => import('../../views/Datalog/Dataloguser'))
  },  
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }

  
]

export { DefaultRoute, TemplateTitle, Routes }
