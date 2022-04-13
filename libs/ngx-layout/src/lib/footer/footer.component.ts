/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { i18nExtractor as _ } from '@fullerstack/ngx-i18n';

import { FooterItem } from './footer.model';

@Component({
  selector: 'fullerstack-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input() appName = 'Fullerstack';

  today = new Date();
  footers: FooterItem[] = [
    {
      type: _('COMMON.RESOURCES'),
      links: [
        {
          name: _('COMMON.OVERVIEW'),
          link: '/features/overview',
          icon: 'feature-search-outline',
          external: true,
        },
        {
          name: _('COMMON.GITHUB'),
          link: 'https://github.com/Neekware',
          icon: 'github',
          external: true,
        },
      ],
    },
    {
      type: _('COMMON.US_CLIENTS'),
      links: [
        {
          name: _('COMMON.OUR_CLIENTS'),
          link: '/clients/overview',
          icon: 'domain',
        },
        {
          name: _('COMMON.CONTACT_US'),
          link: 'info@neekware.net',
          icon: 'email',
          email: true,
        },
      ],
    },
    {
      type: _('COMMON.COMPANY'),
      links: [
        {
          name: _('COMMON.TERMS_CONDITIONS'),
          link: '/terms',
          icon: 'script-text-outline',
        },
        {
          name: _('APP.ABOUT'),
          link: '/about/us',
          icon: 'information-outline',
        },
      ],
    },
  ];
}
