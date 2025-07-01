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
      description: `Neekware has been specializing in enterprise application architecture, design, and development since 2008. We believe that every website and application should be designed for the future but built for today. This approach allows us to keep upfront costs low while enabling you to grow your business at your own pace. "Design it right!" is our guiding principle.`,
      image: '/assets/images/misc/neekware-card.png',
    },
    {
      title: 'Single Code-Base Across Multiple Platforms',
      description: `We build applications for all platforms, including web, mobile, desktop, and IoT. With our robust set of tools, deployment is made easy. Our key focuses are on security, performance, and scalability. We're consistently seeking new ways to enhance our tools and, ultimately, your products.`,
      image: '/assets/images/misc/platforms-card.png',
    },
    {
      title: 'What Can We Do For You?',
      description: `We can assist you at every stage, from conceptualizing to launching your product or service. Just inform us about your requirements, schedule, and budget. In return, we'll provide you with a multi-release timeline aligned with your schedule. This approach allows you to choose the features you'd like included in each release.`,
      image: '/assets/images/misc/whatwedo-card.png',
    },
    {
      title: 'Our Technology Stack',
      description: `We utilize the latest technologies to build superior products for you. Our tech stack comprises mono-repositories, facilitating the development and deployment of multiple applications with ease. Our primary languages are TypeScript and Python, supported by a range of technologies including Angular, React, Next.Js, GraphQL, REST, Git, Jira, and Slack. These are used across our stack, from the frontend to the backend, and everything in between. Alongside creating the ideal tech infrastructure, we can assemble dedicated teams for you, provide staff training, and offer ongoing consulting services to ensure your technological efficiency and growth.`,
      image: '/assets/images/misc/techstack-card.png',
    },
    {
      title: 'How to Engage with Us',
      description: `Contact us via email or phone, and share your requirements. We'll promptly respond with a statement of work. Following that, we'll collaborate with you to finalize the project details and provide a comprehensive quote. Once agreed upon, we'll kickstart your project and ensure you can rely on our ongoing consulting services.`,
      image: '/assets/images/misc/process-card.png',
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
