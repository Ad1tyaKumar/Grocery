import { memo } from 'react';

import resets from '../_resets.module.css';
import { TwitterX_CircleShapeFalse } from '../TwitterX_CircleShapeFalse/TwitterX_CircleShapeFalse';
import classes from './TextTwitterXBlack_AlignmentCen2.module.css';
import { VectorIcon } from './VectorIcon';
import backEndUrl from '../../../host';
import { VectorIcon1 } from './VectorIcon1';
/* @figmaId 32:3630 */
export const TextTwitterXBlack_AlignmentCen2 = memo(function TextTwitterXBlack_AlignmentCen2(props = {}) {
  const continueWithX = () => {
    window.open(`${backEndUrl}/auth/twitter`, "_self")
  }
  return (
    <div onClick={continueWithX} className={`${resets.clapyResets} ${classes.root}`}>
      <TwitterX_CircleShapeFalse
        className={classes.twitterX}
        swap={{
          vector: <>
            <VectorIcon className={classes.icon} />
            <VectorIcon1 className={classes.icon1} />
          </>,
        }}
      />
      <div className={classes.continueWithTwitter}>Continue with Twitter</div>
    </div>
  );
});
