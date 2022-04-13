/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@fullerstack/ngx-i18n';
import { MaterialModule } from '@fullerstack/ngx-material';

import { annotatorRoutes } from './annotator.routes';
import { AnnotatorService } from './annotator.service';
import { DrawComponent } from './draw/draw.component';
import { MenuComponent } from './menu/menu.component';
import { MenuOptionComponent } from './menu/option/option.component';
import { ShowMenuComponent } from './menu/show/show.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(annotatorRoutes),
    I18nModule.forChild(),
  ],
  exports: [DrawComponent, MenuComponent],
  declarations: [DrawComponent, ShowMenuComponent, MenuOptionComponent, MenuComponent],
  providers: [AnnotatorService],
})
export class AnnotatorModule {}
