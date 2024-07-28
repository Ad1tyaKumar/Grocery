import { memo } from 'react';

import resets from '../../_resets.module.css';
import classes from './Google_StyleOriginalCircleShap.module.css';
import { GroupIcon } from './GroupIcon';
import { GroupIcon1 } from './GroupIcon1';

/* @figmaId 14:3 */
export const Google_StyleOriginalCircleShap = memo(function Google_StyleOriginalCircleShap(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group || ''} ${classes.group}`}>
        {props.swap?.group || 
        <>
        <GroupIcon className={classes.icon} />
        <GroupIcon1 className={"icon1"} />
        </>
        }
      </div>
    </div>
  );
});
