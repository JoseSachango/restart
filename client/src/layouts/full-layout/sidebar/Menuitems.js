import React from "react";
import { useGlobalContext,useGlobalContextUpdates  } from "../../../Context";



const Menuitems=()=>{
  const contextObject = useGlobalContext()
  const updateContextObject = useGlobalContextUpdates()
  let plantList = []
  if(contextObject.databaseData){
    console.log("11111")
    console.log(contextObject.databaseData.plant.data.values)
    const temp = contextObject.databaseData.plant.data.values.slice(1)
    plantList = temp.map((row,index)=>{
    

      return(
        {
          title: `${row[2]}`,
          icon: 'circle',
          //href should link to the plants dashboard - dashboard endpoints should be named based on the plant name
          href: '/',
        }
      )
  
    
  
  })
  }


  console.log("testtesttest")
  console.log(plantList)

  return (
    [
      {
        navlabel: true,
        subheader: 'PLANTS',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Dashboard', 
      },
      {
        title: 'Configure New Plant',
        icon: 'plus-circle',
        href: '/form-layouts/form-layouts',
      },
    
      
      ...plantList,
      
    
    
    
      {
        navlabel: true,
        subheader: 'MODULES',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Apps',
      },
      {
        title: 'RBI Profile - Plant Level',
        icon: 'settings',
        href: '/chats',
      },

      {
        title: 'Customers',
        icon: 'users',
        href: '/customers',
        collapse: true,
        children: [
          {
            title: 'Lists',
            icon: 'list',
            href: '/customers/lists',
          },
          {
            title: 'Edit',
            icon: 'edit',
            href: '/customers/edit',
          },
        ],
      },
      {
        navlabel: true,
        subheader: 'PAGES',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Pages',
      },
      {
        title: 'Shop',
        icon: 'shopping-cart',
        href: '/shop',
        collapse: true,
        children: [
          {
            title: 'Listing',
            icon: 'list',
            href: '/shop/lists',
          },
          {
            title: 'Detail',
            icon: 'file-text',
            href: '/shop/shop-detail',
          },
        ],
      },
     
      {
        navlabel: true,
        subheader: 'FORMS',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Form',
      },
      {
        title: 'Form Elements',
        icon: 'box',
        href: '/form-elements',
        collapse: true,
        children: [
          {
            title: 'Autocomplete',
            icon: 'compass',
            href: '/form-elements/autocomplete',
          },
          {
            title: 'Buttons',
            icon: 'codepen',
            href: '/form-elements/button',
          },
          {
            title: 'Checkbox',
            icon: 'check-square',
            href: '/form-elements/checkbox',
          },
          {
            title: 'Radio',
            icon: 'check-circle',
            href: '/form-elements/radio',
          },
          {
            title: 'Date Time',
            icon: 'calendar',
            href: '/form-elements/date-time',
          },
          {
            title: 'Slider',
            icon: 'git-commit',
            href: '/form-elements/slider',
          },
          {
            title: 'Switch',
            icon: 'toggle-left',
            href: '/form-elements/switch',
          },
        ],
      },
      {
        title: 'Form Layout',
        icon: 'file-text',
        href: '/form-layouts/form-layouts',
      },
      {
        title: 'Form Custom',
        icon: 'file-plus',
        href: '/form-layouts/form-custom',
      },
      {
        title: 'Form Wizard',
        icon: 'codepen',
        href: '/form-layouts/form-wizard',
      },
      {
        navlabel: true,
        subheader: 'TABLES',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Table',
      },
      {
        title: 'Tables',
        icon: 'layout',
        href: '/tables',
        collapse: true,
        children: [
          {
            title: 'Basic Table',
            icon: 'disc',
            href: '/tables/basic-table',
          },
          {
            title: 'Pagination Table',
            icon: 'disc',
            href: '/tables/pagination-table',
          },
          {
            title: 'Enhanced Table',
            icon: 'disc',
            href: '/tables/enhanced-table',
          },
          {
            title: 'Collapsible Table',
            icon: 'disc',
            href: '/tables/collapsible-table',
          },
          {
            title: 'Fixed Header Table',
            icon: 'disc',
            href: '/tables/fixed-header-table',
          },
        ],
      },
      {
        navlabel: true,
        subheader: 'WIDGETS',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Widgets',
      },
      {
        title: 'Widget Feed',
        icon: 'archive',
        href: '/widgets/widget-feed',
      },
    
      {
        title: 'Widget Apps',
        icon: 'grid',
        href: '/widgets/widget-apps',
      },
      {
        navlabel: true,
        subheader: 'CHARTS',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Chart',
      },
      {
        title: 'Line Chart',
        icon: 'activity',
        href: '/charts/line-chart',
      },
      {
        title: 'Gredient Chart',
        icon: 'bar-chart',
        href: '/charts/gredient-chart',
      },
      {
        title: 'Doughnut & Pie',
        icon: 'bar-chart-2',
        href: '/charts/doughnut-pie-chart',
      },
      {
        title: 'Area Chart',
        icon: 'aperture',
        href: '/charts/area-chart',
      },
      {
        title: 'Column Chart',
        icon: 'circle',
        href: '/charts/column-chart',
      },
      {
        title: 'Candlestick Chart',
        icon: 'loader',
        href: '/charts/candlestick-chart',
      },
      {
        title: 'Radialbar & Radar',
        icon: 'octagon',
        href: '/charts/radialbar-chart',
      },
      {
        navlabel: true,
        subheader: 'AUTHENTICATION',
        icon: 'mdi mdi-dots-horizontal',
        href: 'Authentication',
      },
      {
        title: 'Log in',
        icon: 'log-in',
        href: '/auth/login',
      },
      {
        title: 'Register',
        icon: 'user-plus',
        href: '/auth/register',
      },
      {
        title: 'Reset Password',
        icon: 'refresh-ccw',
        href: '/auth/reset-password',
      },
      {
        title: 'Error',
        icon: 'alert-triangle',
        href: '/404',
      },
    ]
  )
}


export default Menuitems;
