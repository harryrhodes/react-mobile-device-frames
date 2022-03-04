/**
 * @file iPhone13Pro.tsx - iPhone13Pro component definition
 * @requires react
 * @author Harry Rhodes
 */
import { IPhone13ProProps } from "./IPhone13Pro.types";
import { useStyles } from "./styles";
/**
 * @function iPhone13Pro - Renders iPhone13Pro component
 * @param props - iPhone13Pro props @see iPhone13Pro.types.ts
 */
export default function iPhone13Pro(props: IPhone13ProProps) {
  const { backgroundImg, className, children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg className={classes.frame}>
        <rect rx="53" ry="53" x="0" y="0" width="339" height="698"></rect>
      </svg>
      <svg className={classes.bezel}>
        <rect rx="47" ry="47" x="0" y="0" width="329" height="688"></rect>
      </svg>
      <svg className={classes.screen}>
        <rect rx="35" ry="35" x="0" y="0" width="306" height="664"></rect>
      </svg>
      <div className={className ? className : classes.children}>{children}</div>
      {backgroundImg && (
        <img className={classes.backgroundImg} src={backgroundImg} />
      )}
      <svg
        className={classes.notch}
        xmlns="http://www.w3.org/2000/svg"
        width="127"
        height="27"
        viewBox="0 0 127 27"
      >
        <path d="M0,0H127a0,0,0,0,1,0,0V12a15,15,0,0,1-15,15H15A15,15,0,0,1,0,12V0A0,0,0,0,1,0,0Z" />
      </svg>

      <div className={classes.camera}>
        <svg className={classes.outerCamera}>
          <ellipse rx="6" ry="6" cx="6" cy="6"></ellipse>
        </svg>
        <svg className={classes.innerCamera}>
          <ellipse rx="2" ry="2" cx="2" cy="2"></ellipse>
        </svg>
      </div>
      <svg className={classes.speaker}>
        <rect rx="3.5" ry="3.5" x="0" y="0" width="58" height="7"></rect>
      </svg>
      <svg className={classes.powerButton}>
        <rect rx="1" ry="1" x="0" y="0" width="3" height="83"></rect>
      </svg>
      <div className={classes.volumeControls}>
        <svg className={classes.volumeDown}>
          <rect rx="1" ry="1" x="0" y="0" width="3" height="55"></rect>
        </svg>
        <svg className={classes.volumeUp}>
          <rect rx="1" ry="1" x="0" y="0" width="3" height="55"></rect>
        </svg>
        <svg className={classes.silentToggle}>
          <rect rx="1" ry="1" x="0" y="0" width="3" height="29"></rect>
        </svg>
      </div>
      <div className={classes.antennaBands}>
        <svg className={classes.tRBand}>
          <rect rx="0" ry="0" x="0" y="0" width="4" height="5"></rect>
        </svg>
        <svg className={classes.tLBand}>
          <rect rx="0" ry="0" x="0" y="0" width="4" height="5"></rect>
        </svg>
        <svg className={classes.lTBand}>
          <rect rx="0" ry="0" x="0" y="0" width="5" height="4"></rect>
        </svg>
        <svg className={classes.lBBand}>
          <rect rx="0" ry="0" x="0" y="0" width="5" height="4"></rect>
        </svg>
        <svg className={classes.bLband}>
          <rect rx="0" ry="0" x="0" y="0" width="4" height="5"></rect>
        </svg>
        <svg className={classes.bRBand}>
          <rect rx="0" ry="0" x="0" y="0" width="4" height="5"></rect>
        </svg>
        <svg className={classes.rBBand}>
          <rect rx="0" ry="0" x="0" y="0" width="5" height="4"></rect>
        </svg>
        <svg className={classes.rTBand}>
          <rect rx="0" ry="0" x="0" y="0" width="5" height="4"></rect>
        </svg>
      </div>
    </div>
  );
}
