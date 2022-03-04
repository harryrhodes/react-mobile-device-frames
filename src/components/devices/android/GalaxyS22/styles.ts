/**
 * @file styles.ts
 * @description CSS definitions for the GalaxyS22 component
 * @requires react-jss
 * @author Harry Rhodes
 */
import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
  root: {
    position: "relative",
    minWidth: "483px",
    minHeight: "759px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "visible",
  },
  frame: {
    opacity: 0.644,
    fill: "rgba(0, 0, 0, 1)",
    position: "absolute",
    overflow: "visible",
    width: "336px",
    height: "698px",
    left: "69px",
    top: "31px",
  },
  bezel: {
    fill: "rgba(0, 0, 0, 1)",
    position: "absolute",
    overflow: "visible",
    width: "324px",
    height: "684px",
    left: "75px",
    top: "38px",
  },
  screen: {
    fill: "rgba(255, 255, 255, 1)",
    position: "absolute",
    overflow: "visible",
    width: "307px",
    height: "667px",
    left: "84px",
    top: "46px",
  },
  backgroundImg: {
    position: "absolute",
    width: "315px",
    height: "667px",
    left: "80px",
    top: "46px",
    overflow: "visible",
  },
  camera: {
    position: "absolute",
    width: "16px",
    height: "16px",
    left: "230px",
    top: "52px",
    overflow: "visible",
  },
  outerCamera: {
    fill: "rgba(13, 13, 13, 1)",
    position: "absolute",
    overflow: "visible",
    width: "16px",
    height: "16px",
    left: "0px",
    top: "0px",
  },
  innerCamera: {
    fill: "rgba(0, 55, 95, 1)",
    position: "absolute",
    overflow: "visible",
    width: "4px",
    height: "4px",
    left: "6px",
    top: "6px",
  },
  powerButton: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "4px",
    height: "47px",
    left: "405px",
    top: "333px",
  },
  volumeControls: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "4px",
    height: "88px",
    left: "405px",
    top: "209px",
  },
  antennaBands: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    width: "287px",
    height: "698px",
    left: "69px",
    top: "31px",
    overflow: "visible",
  },
  lTBand: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "6px",
    height: "6px",
    left: "0px",
    top: "53px",
  },
  lMBand: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "6px",
    height: "6px",
    left: "0px",
    top: "164px",
  },
  lBBand: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "6px",
    height: "6px",
    left: "0px",
    top: "611px",
  },
  bLBand: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "6px",
    height: "7px",
    left: "43px",
    top: "691px",
  },
  bRBand: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "6px",
    height: "7px",
    left: "281px",
    top: "691px",
  },
  tRBand: {
    fill: "rgba(136, 136, 136, 1)",
    position: "absolute",
    overflow: "visible",
    width: "6px",
    height: "7px",
    left: "218px",
    top: "0px",
  },
  // Default children styling
  children: {
    position: "absolute",
    overflow: "visible",
    width: "307px",
    height: "667px",
    left: "84px",
    top: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    zIndex: 1,
  },
});
