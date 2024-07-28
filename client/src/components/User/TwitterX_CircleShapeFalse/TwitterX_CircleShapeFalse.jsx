import { memo } from 'react';

import resets from '../_resets.module.css';
import classes from './TwitterX_CircleShapeFalse.module.css';
import { VectorIcon } from './VectorIcon';
import { VectorIcon1 } from './VectorIcon1';

/* @figmaId 32:3571 */
export const TwitterX_CircleShapeFalse = memo(function TwitterX_CircleShapeFalse(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector ||<> 
      <VectorIcon className={classes.icon} /> 
      <VectorIcon1 className={classes.icon1}/>
      </>}</div>
    </div>
  );
});
