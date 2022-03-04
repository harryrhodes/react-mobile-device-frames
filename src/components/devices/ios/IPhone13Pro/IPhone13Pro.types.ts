/**
 * @file IPhone13Pro.types.ts - Type definitions for IPhone13Pro component @see IPhone13Pro
 * @requires ReactNode
 * @author Harry Rhodes
 */
import { ReactNode } from "react";
/**
 * @typedef IPhone13ProProps
 * @property {string} backgroundImg - src of background image to display on device
 * @property {ReactNode} children - embedded content to be displayed
 */
export interface IPhone13ProProps {
  backgroundImg?: string;
  className?: string;
  children?: ReactNode;
}
