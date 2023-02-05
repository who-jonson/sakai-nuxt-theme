import { isBrowser, isString } from '@whoj/utils';
import { useAppConfig, useNuxtApp } from '#app';

export function useAppTheme(theme: string) {
  if (isBrowser) {
    let lingTag = document.querySelector<HTMLLinkElement>('link[id="theme-link"]');

    if (!lingTag) {
      lingTag = document.createElement('link');
      lingTag.id = 'theme-link';
      lingTag.rel = 'stylesheet';
      document.head.appendChild(lingTag);
    }

    lingTag.href = `/themes/${theme}/theme.css`;
  }
}

export function useAppLogo() {
  const { sakaiNuxt } = useAppConfig();
  const { $appState } = useNuxtApp();

  return computed(() => {
    if (isString(sakaiNuxt.logo)) {
      return sakaiNuxt.logo;
    }
    return $appState?.darkTheme ? sakaiNuxt.logo.dark : sakaiNuxt.logo.light;
  });
}
