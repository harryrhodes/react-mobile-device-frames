/**
 * @file GalaxyS22.tsx
 * @description GalaxyS22 component definition
 * @requires react
 * @author Harry Rhodes
 */
import { GalaxyS22Props } from "./GalaxyS22.types";
import { useStyles } from "./styles";
/**
 * @function GalaxyS22 - Renders GalaxyS22 component
 * @param props - GalaxyS22 props @see GalaxyS22.types.ts
 */
export default function GalaxyS22(props: GalaxyS22Props) {
  const { backgroundImg, className, children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg className={classes.frame}>
        <rect rx="43" ry="43" x="0" y="0" width="336" height="698"></rect>
      </svg>
      <svg className={classes.bezel}>
        <rect rx="40" ry="40" x="0" y="0" width="324" height="684"></rect>
      </svg>
      <svg className={classes.screen}>
        <rect rx="28" ry="28" x="0" y="0" width="307" height="667"></rect>
      </svg>
      <div className={className ? className : classes.children}>{children}</div>
      {backgroundImg && (
        <img className={classes.backgroundImg} src={backgroundImg} />
      )}
      <div className={classes.camera}>
        <svg className={classes.outerCamera}>
          <ellipse rx="8" ry="8" cx="8" cy="8"></ellipse>
        </svg>
        <svg className={classes.innerCamera}>
          <ellipse rx="2" ry="2" cx="2" cy="2"></ellipse>
        </svg>
      </div>
      <svg className={classes.powerButton}>
        <rect rx="1" ry="1" x="0" y="0" width="4" height="47"></rect>
      </svg>
      <svg className={classes.volumeControls}>
        <rect rx="1" ry="1" x="0" y="0" width="4" height="88"></rect>
      </svg>
      <div className={classes.antennaBands}>
        <svg className={classes.lTBand}>
          <rect rx="0" ry="0" x="0" y="0" width="6" height="6"></rect>
        </svg>
        <svg className={classes.lMBand}>
          <rect rx="0" ry="0" x="0" y="0" width="6" height="6"></rect>
        </svg>
        <svg className={classes.lBBand}>
          <rect rx="0" ry="0" x="0" y="0" width="6" height="6"></rect>
        </svg>
        <svg className={classes.bLBand}>
          <rect rx="0" ry="0" x="0" y="0" width="6" height="7"></rect>
        </svg>
        <svg className={classes.bRBand}>
          <rect rx="0" ry="0" x="0" y="0" width="6" height="7"></rect>
        </svg>
        <svg className={classes.tRBand}>
          <rect rx="0" ry="0" x="0" y="0" width="6" height="7"></rect>
        </svg>
      </div>
    </div>
  );
}
