import Ripple from 'primevue/ripple';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import StyleClass from 'primevue/styleclass';
import ToastService from 'primevue/toastservice';
import BadgeDirective from 'primevue/badgedirective';
import ConfirmationService from 'primevue/confirmationservice';
import CodeHighlight from '../directives/code';

export declare interface AppState {
  theme?: string;
  darkTheme?: boolean;
}

export default defineNuxtPlugin(({ vueApp: app }) => {
  app.use(PrimeVue, useAppConfig().primevueConfig);

  app.use(ConfirmationService);
  app.use(ToastService);

  app.directive('tooltip', Tooltip);
  app.directive('ripple', Ripple);
  app.directive('code', CodeHighlight);
  app.directive('badge', BadgeDirective);
  app.directive('styleclass', StyleClass);

  const appState = createGlobalState(
    () => useLocalStorage<AppState>('app-state', {
      theme: 'lara-light-indigo',
      darkTheme: false
    })
  )();

  watch(() => appState.value.theme, (theme) => {
    useAppTheme(theme!);
  }, { immediate: true });

  return {
    provide: {
      appState: reactiveComputed(() => appState.value)
    }
  };
});

declare module '@nuxt/schema' {
  interface NuxtApp {
    $appState: AppState;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $appState: AppState;
    outsideClickListener?: ((event: Event) => void) | null;
  }
}
