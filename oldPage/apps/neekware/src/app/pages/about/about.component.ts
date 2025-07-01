/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { Component } from '@angular/core';
import { i18nExtractor as _ } from '@fullerstack/ngx-i18n';

@Component({
  selector: 'fullerstack-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  peopleList = [
    {
      title: 'Val Neekman',
      description: `As President and Principal Architect of Neekware Inc., Val is in charge of charting the firm's strategic course, carefully balancing his time between sales endeavors and operational oversight. With an extensive career spanning over two decades, Val's seasoned expertise guides the company's vision and direction.


        <br/><br/>A proud alumnus of Carleton University, Val holds a Bachelor's degree in Engineering. His educational background, coupled with his vast professional experience, forms the foundation of his pragmatic and innovative approach to business.

        <br/><br/>Operating in Waterloo, Ontario, Canada, Val continues to lead Neekware Inc. on its path to success, constantly seeking new ways to drive growth and deliver exceptional service to clients.`,
      image: '/assets/images/people/ceo-card.png',
    },
    {
      title: 'Cathy H. Liu',
      description: `As the Account Manager at Neekware Inc., Cathy oversees client accounts and billing, drawing from over 15 years of industry experience. <br/><br/>She is a Computer Engineering graduate from the Beijing University of Technology and operates from Ontario, Canada.`,
      image: '/assets/images/people/account-manager-card.png',
    },
  ];
}
