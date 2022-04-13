/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@fullerstack/ngx-auth';
import { i18nExtractor as _ } from '@fullerstack/ngx-i18n';
import { LayoutService } from '@fullerstack/ngx-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'fullerstack-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();
  handSet = false;
  logoSize = 'large';
  pitchList = [
    {
      title: _('PITCH.CHAT.MANAGER.TITLE'),
      description: _('PITCH.CHAT.MANAGER.DESCRIPTION'),
      image: '/assets/images/misc/chat-manager-overlay.png',
    },
    {
      title: _('PITCH.CHAT.MANAGER.ADMIN.TITLE'),
      description: _('PITCH.CHAT.MANAGER.ADMIN.DESCRIPTION'),
      image: '/assets/images/misc/chat-manager-admin.png',
    },
    {
      title: _('PITCH.ANNOTATE.TITLE'),
      description: _('PITCH.ANNOTATE.DESCRIPTION'),
      image: '/assets/images/misc/annotation.png',
    },
    {
      title: _('PITCH.PLATFORMS.TITLE'),
      description: _('PITCH.PLATFORMS.DESCRIPTION'),
      image: '/assets/images/misc/platforms.png',
    },
  ];

  constructor(public auth: AuthService, public layout: LayoutService) {}

  ngOnInit() {
    this.layout.handset$.pipe(takeUntil(this.destroy$)).subscribe((state) => {
      if (state.matches) {
        this.handSet = true;
        this.logoSize = 'small';
      } else {
        this.handSet = false;
        this.logoSize = 'large';
      }
    });
  }

  get logo(): string {
    return `/assets/images/logos/logo-${this.logoSize}.png`;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
