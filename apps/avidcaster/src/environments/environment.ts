/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { AnnotatorConfig } from '@fullerstack/ngx-annotator';
import { AuthConfig } from '@fullerstack/ngx-auth';
import { ChatConfig } from '@fullerstack/ngx-chat';
// import { CachifyConfig } from '@fullerstack/ngx-cachify';
import { ApplicationConfig } from '@fullerstack/ngx-config';
import { GqlConfig } from '@fullerstack/ngx-gql';
import { I18nConfig } from '@fullerstack/ngx-i18n';
import { LayoutConfig } from '@fullerstack/ngx-layout';
import { LogLevel, LoggerConfig } from '@fullerstack/ngx-logger';
import { StoreConfig } from '@fullerstack/ngx-store';
import { UserConfig } from '@fullerstack/ngx-user';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

const logger: LoggerConfig = {
  level: LogLevel.debug,
} as const;

const gql: GqlConfig = {
  endpoint: 'http://localhost:4201/graphql',
} as const;

const i18n: I18nConfig = {
  availableLanguages: {
    en: {
      name: 'English',
      locale: '@angular/common/locales/en',
      localeExtra: '@angular/common/locales/extra/en',
    },
    fr: {
      name: 'Français',
      locale: '@angular/common/locales/fr',
      localeExtra: '@angular/common/locales/extra/fr',
    },
    de: {
      name: 'Deutsch',
      locale: '@angular/common/locales/de',
      localeExtra: '@angular/common/locales/extra/de',
    },
    es: {
      name: 'Español',
      locale: '@angular/common/locales/es',
      localeExtra: '@angular/common/locales/extra/es',
    },
    he: {
      name: 'עִברִית',
      locale: '@angular/common/locales/he',
      localeExtra: '@angular/common/locales/extra/he',
    },
    fa: {
      name: 'پارسی',
      locale: '@angular/common/locales/fa',
      localeExtra: '@angular/common/locales/extra/fa',
    },
    'zh-hans': {
      name: '中文 - 简体',
      locale: '@angular/common/locales/zh-Hans',
      localeExtra: '@angular/common/locales/extra/zh-Hans',
    },
  },
  enabledLanguages: [
    // order is important
    'en',
    // 'fr',
    // 'zh-hans',
    // 'de',
    // 'es',
    // 'he',
    // 'fa',
  ],
  cacheBustingHash: 'v0.0.1',
};

const auth: AuthConfig = {
  logState: true,
} as const;

const user: UserConfig = {
  logState: true,
} as const;

const store: StoreConfig = {
  // we want to explicitly set it to true, if we use it at app-level
  immutable: true,
} as const;

// const cachify: CachifyConfig = {
//   ttl: 30, // 30 seconds
// } as const;

const layout: LayoutConfig = {
  logState: true,
} as const;

const annotator: AnnotatorConfig = {
  logState: true,
} as const;

const chat: ChatConfig = {
  logState: true,
} as const;

export const environment: Readonly<ApplicationConfig> = {
  version: '0.0.1',
  production: false,
  platform: 'web',
  appName: 'AvidCaster-Dev',
  logger,
  i18n,
  gql,
  auth,
  user,
  store,
  // cachify,
  layout,
  annotator,
  chat,
};
