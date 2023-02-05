import { defineAppConfig } from 'nuxt/app';
import type { usePrimeVue } from 'primevue/config';
import type { MenuItem } from 'primevue/menuitem';

export interface SakaiNuxtTheme {
  /**
   * Project name
   */
  name?: string;

  /**
   * Sidebar Menu Items
   * @see https://primevue.org/menumodel
   */
  sidebarMenu?: MenuItem[];

  /**
   * Define Brand Logo
   */
  logo: {
    light: string,
    dark: string
  } | string;

}

export default defineAppConfig({
  /**
   * Primevue Config
   * @see https://primevue.org/locale
   */
  primevueConfig: {
    ripple: true,
    inputStyle: 'outlined'
  },

  /**
   *  Theme Config
   */
  sakaiNuxt: {
    name: 'Sakai Nuxt',

    logo: {
      dark: '/images/logo-white.svg',
      light: '/images/logo-dark.svg'
    },

    sidebarMenu: [
      {
        label: 'Home',
        items: [{
          label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'
        }]
      },
      {
        label: 'UI Components',
        icon: 'pi pi-fw pi-sitemap',
        items: [
          { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/demo/formlayout' },
          { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/demo/input' },
          { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', to: '/demo/floatlabel' },
          { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/demo/invalidstate' },
          { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/demo/button' },
          { label: 'Table', icon: 'pi pi-fw pi-table', to: '/demo/table' },
          { label: 'List', icon: 'pi pi-fw pi-list', to: '/demo/list' },
          { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/demo/tree' },
          { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/demo/panel' },
          { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/demo/overlay' },
          { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/demo/menu' },
          { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/demo/messages' },
          { label: 'File', icon: 'pi pi-fw pi-file', to: '/demo/file' },
          { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/demo/chart' },
          { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/demo/misc' }
        ]
      },
      {
        label: 'UI Blocks',
        items: [
          { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/demo/blocks', badge: 'NEW' },
          { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue' }
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-clone',
        items: [
          { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/demo/pages/crud' },
          { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/demo/pages/timeline' },
          { label: 'Landing', icon: 'pi pi-fw pi-calendar', to: '/demo/pages/landing' },
          { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login' },
          { label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound' },
          { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/demo/pages/empty' }
        ]
      },
      {
        label: 'Menu Hierarchy',
        icon: 'pi pi-fw pi-search',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                ]
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                ]
              }
            ]
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' }
                ]
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'Get Started',
        items: [
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-question',
            command: () => {
              window.location.href = '/documentation';
            }
          },
          { label: 'View Source', icon: 'pi pi-fw pi-search', url: 'https://github.com/who-jonson/sakai-nuxt' }
        ]
      }
    ]
  }
});

declare module '@nuxt/schema' {
  interface AppConfigInput {

    primevueConfig?: ReturnType<typeof usePrimeVue>['config'];

    sakaiNuxt?: SakaiNuxtTheme;
  }
}
