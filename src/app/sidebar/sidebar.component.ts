import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/typography',    title: 'Workspaces',        icon:'nc-app',          class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-chart-bar-32', class: '' },
    { path: '/table',         title: 'Database',          icon:'nc-tile-56',      class: '' },
    { path: '/maps',          title: 'Subscription',      icon:'nc-money-coins',  class: '' },
    { path: '/user',          title: 'Company Profile',   icon:'nc-single-02',    class: 'active-pro' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    //{ path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
