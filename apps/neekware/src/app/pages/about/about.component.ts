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
      description:
        'Val is responsible for defining the overall business strategy for the firm, including time allocated to sales and operations. Val brings more than 20 years of experience to the firm. He previously served as founder and CEO of Neekware Inc, which he pivoted to a software consultancy firm in 2008. Val holds a bachelor of engineering from Carleton University. Val lives in Ontario Canada.',
      image: '/assets/images/people/ceo-card.png',
    },
    {
      title: 'Cathy H. Liu',
      description:
        'Cathy is responsible for managing the accounts and billing of our clients. She has over 10 years of experience in the industry. She holds a bachelor of computer engineering from Beijing University. She lives in Ontario Canada.',
      image: '/assets/images/people/account-manager-card.png',
    },
  ];
}
