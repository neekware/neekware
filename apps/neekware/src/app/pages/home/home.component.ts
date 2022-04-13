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
      title: 'Who we are!',
      description:
        'Neekware has been in the business of dynamic & data-driven web development and services since 2008. We believe that every website & application should be designed for the future but built for today. This way we can keep the upfront cost down while allowing you to grow your business at your own pace. "Design it right!" is the name of the game.',
      image: '/assets/images/misc/neekware-card.png',
    },
    {
      title: 'Single code-base, multiple platforms',
      description:
        'We build for all platforms, including web, mobile, desktop, and IoT.  Deployment will be easy, as we have a robust set of tools to help you get started. We hold a strong focus on security, performance, and scalability. We are always looking for new ways to improve our tools and ultimately your products.',
      image: '/assets/images/misc/platforms-card.png',
    },
    {
      title: 'What can we do for you?',
      description:
        "We can help you at all stages, from the concept to the launch of your product & services. Simply tell us your requirements, schedule & budget. We will provide you with a multi-release timeline that maps onto your schedule. This way, you can choose the features you'd like to see, included in each release.",
      image: '/assets/images/misc/whatwedo-card.png',
    },
    {
      title: 'Our technology stack',
      description:
        'We use the latest technologies to build the best products for you. Our stack is built with mono-repositories, so you can easily develop and deploy multiple applications easily. We use Typescript, throughout our stack, the frontend, backend, and infrastructure. We can build teams for you, train the staff, and provide ongoing consulting services. We hold your hands throughout the process, and beyond!',
      image: '/assets/images/misc/techstack-card.png',
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
