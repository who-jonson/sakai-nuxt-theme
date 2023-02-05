import {
  addComponent,
  defineNuxtModule
} from '@nuxt/kit';
import { isArray, isObject, parallel } from '@whoj/utils';

export const PrimevueComponents = [
  'Accordion',
  'AccordionTab',
  'AutoComplete',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'BlockUI',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Card',
  'Carousel',
  'CascadeSelect',
  'Chart',
  'Checkbox',
  'Chip',
  'Chips',
  'ColorPicker',
  'Column',
  'ColumnGroup',
  'ConfirmDialog',
  'ConfirmPopup',
  'ContextMenu',
  'DataTable',
  'DataView',
  'DataViewLayoutOptions',
  'DeferredContent',
  'Dialog',
  'Divider',
  'Dock',
  'Dropdown',
  // 'Editor',
  'Fieldset',
  'FileUpload',
  // 'FullCalendar',
  'Galleria',
  'Image',
  'InlineMessage',
  'Inplace',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MegaMenu',
  'Menu',
  'Menubar',
  'Message',
  'MultiSelect',
  'OrderList',
  'OrganizationChart',
  'OverlayPanel',
  'Paginator',
  'Panel',
  'PanelMenu',
  'Password',
  'PickList',
  'ProgressBar',
  'ProgressSpinner',
  'RadioButton',
  'Rating',
  'ScrollPanel',
  'ScrollTop',
  'SelectButton',
  'Sidebar',
  'Skeleton',
  'Slider',
  'SpeedDial',
  'SplitButton',
  'Splitter',
  'SplitterPanel',
  'Steps',
  'TabMenu',
  'TabPanel',
  'TabView',
  'Tag',
  'Terminal',
  'TerminalService',
  'Textarea',
  'TieredMenu',
  'Timeline',
  'Toast',
  'ToggleButton',
  'Toolbar',
  'Tree',
  'TreeSelect',
  'TreeTable',
  'TriStateCheckbox',
  'VirtualScroller'
];

export type PrimevueComponent = typeof PrimevueComponents[number];

export interface SakaiNuxtOptions {
  /**
   * Components to auto import from Primevue
   */
  components?: {
    exclude?: Array<PrimevueComponent>,
    include?: Array<PrimevueComponent | { name: PrimevueComponent, global?: boolean }>,
    global?: boolean
  };
}

export default defineNuxtModule<SakaiNuxtOptions>({
  meta: {
    configKey: 'sakaiNuxt'
  },

  defaults: {
    components: {
      global: true,
      include: PrimevueComponents
    }
  },

  hooks: {
    'pages:extend': (pages) => {
      // pages = pages.filter(page => page.file)
      pages.forEach(page => console.log(page.file));
    }
  },

  async setup(options, nuxt) {
    let components = options.components!.include!.reduce<Array<Parameters<typeof addComponent>[0]>>((_components, component) => {
      const name = isObject(component) ? component.name : component;
      return [
        ..._components,
        {
          name,
          export: 'default',
          filePath: `primevue/${name.toLowerCase()}`,
          global: ['ConfirmDialog', 'ConfirmPopup', 'Toast', 'Tooltip'].includes(name) || (isObject(component) ? component.global : options.components!.global)
        }
      ];
    }, []);

    if (isArray(options.components?.exclude)) {
      components = components.filter(c => !options.components!.exclude!.includes(c.name));
    }

    await parallel(components, addComponent);
  }
});
