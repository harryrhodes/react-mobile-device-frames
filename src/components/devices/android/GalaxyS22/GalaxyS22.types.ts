/**
 * @file GalaxyS22.types.ts - Type definitions for GalaxyS22 component @see GalaxyS22
 * @requires ReactNode
 * @author Harry Rhodes
 */
import { ReactNode } from "react";
/**
 * @typedef GalaxyS22Props
 * @property {string} backgroundImg - src of background image to display on device
 * @property {ReactNode} children - embedded content to be displayed
 */
export interface GalaxyS22Props {
  backgroundImg?: string;
  children?: ReactNode;
}
