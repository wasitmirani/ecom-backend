

class Sidebar {

    private perfix = "/app";

    setSingleMenu = (title: string, icon: string, link: string, can?: string) => {
        return {
            "title": title,
            "type": 'single',
            "icon": icon,
            "link": this.perfix + link,
            "can": can,
        }
    }
    setMultiMenu = (title: string, icon: string, can?: string, sub_menu?: any) => {
        return {
            "title": title,
            "icon": icon,
            "can": can,
            "type": "multi",
            "sub_menu": sub_menu, // Initialize an empty array for sub-menu
        }
    }
    setSubMenu = (title: string, link: string, can?: string) => {
        return {
            "title": title,
            "link": this.perfix + link,
            "can": can,
        }
    }
    setHeadingMenu = (title: string) => {
        return {
            "title": title,
            "type": "heading",
        }
    }
    getMenuList = () => {
        return [

            this.setHeadingMenu('Analytics'),
            this.setMultiMenu('Dashboards', 'fa-solid fa-house', 'dashboard-view',
                [
                    this.setSubMenu('Dashboard', '/home', 'somePermission'),
                    // Add more sub-menu items as needed
                ],
            ),
            this.setMultiMenu('Reports', 'fa-solid fa-chart-line', 'reports-views',
                [


                    this.setSubMenu('Sales Order', '/reports/sales-order', 'somePermission'),
                    this.setSubMenu('Customers', '/reports/customers', 'somePermission'),


                    // Add more sub-menu items as needed
                ],
            ),

            this.setHeadingMenu('Ecommerce'),
            this.setMultiMenu('Catalog', 'fa-solid fa-layer-group', 'catalog-views',
                [

                    this.setSubMenu('Products ', '/catalog/products', 'somePermission'),




                ],
            ),
            this.setSingleMenu('Orders', 'fa-solid fa-shopping-basket', '/orders'),
            this.setSingleMenu('Customers', 'fa-solid fa-users', '/customer'),


          this.setHeadingMenu('Tools & Sessions'),
          this.setMultiMenu('Settings', 'fa-solid fa-gear', 'Settings',
          [
              this.setSubMenu('Account ', '/settings/account', 'somePermission'),

              this.setSubMenu('Users', '/settings/users', 'somePermission'),
              this.setSubMenu('roles', '/settings/roles', 'somePermission'),


          ]
        ),

        this.setSingleMenu('Log out', 'fa-solid fa-power-off', '/logout'),




        ];
    }

}

export default Sidebar;
