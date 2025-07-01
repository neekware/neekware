/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a proprietary notice
 * that can be found at http://neekware.com/license/PRI.html
 */

import {
  AnimationTriggerMetadata,
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const FADE_ANIMATION_TIMING = '.5s cubic-bezier(0.4,0.0,0.2,1)';
export const FADE_IN_ANIMATION_TIMING = '1.5s cubic-bezier(0.4,0.0,0.2,1)';

export const fadeAnimations: {
  readonly fadeOutInSlow: AnimationTriggerMetadata;
  readonly fadeInSlow: AnimationTriggerMetadata;
} = {
  fadeOutInSlow: trigger('fadeOutInSlow', [
    transition(
      '* => *',
      animate(
        FADE_ANIMATION_TIMING,
        keyframes([style({ opacity: 1 }), style({ opacity: 0.95 }), style({ opacity: 1 })])
      )
    ),
  ]),
  fadeInSlow: trigger('slideInFromTop', [
    transition(
      '* => *',
      animate(FADE_IN_ANIMATION_TIMING, keyframes([style({ opacity: 0 }), style({ opacity: 1 })]))
    ),
  ]),
};
