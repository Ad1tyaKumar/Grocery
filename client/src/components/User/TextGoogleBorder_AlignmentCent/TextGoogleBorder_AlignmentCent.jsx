import { memo } from 'react';

import resets from '../_resets.module.css';
import { Google_StyleOriginalCircleShap } from './Google_StyleOriginalCircleShap/Google_StyleOriginalCircleShap';
import { GroupIcon } from './GroupIcon';
import { GroupIcon1 } from './GroupIcon1';
import classes from './TextGoogleBorder_AlignmentCent.module.css';
import backEndUrl from '../../../host';
/* @figmaId 25:389 */
export const TextGoogleBorder_AlignmentCent = memo(function TextGoogleBorder_AlignmentCent(props = {}) {
  const continueWithGoogle = () => {
    window.open(`${backEndUrl}/auth/google/callback`, "_self");
  }
  return (
    <div onClick={continueWithGoogle} className={`${resets.clapyResets} ${classes.root}`}>
      <Google_StyleOriginalCircleShap
        className={classes.google}
        classes={{ group: classes.group }}
        swap={{
          group: (
            <div className={classes.group}>
              <>
                <GroupIcon className={classes.icon} />
                <GroupIcon1 className={"icon1"} />
              </>
            </div>
          ),
        }}
      />
      <div className={classes.continueWithGoogle}>Continue with Google</div>
    </div>
  );
});
