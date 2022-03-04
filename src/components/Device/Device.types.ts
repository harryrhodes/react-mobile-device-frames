/**
 * @file Device.types.ts - Type definitions for device component @see Device
 * @requires ReactNode
 * @author Harry Rhodes
 */
import { ReactNode } from "react";
/**
 * @typedef DeviceProps
 * @property {DeviceType} device - name of device to be displayed @see DeviceType
 * @property {string} backgroundImg - src of background image to display on device
 * @property {ReactNode} children - embedded content to be displayed
 */
export interface DeviceProps {
  device: "iphone-13-pro" | "galaxy-s22";
  backgroundImg?: string;
  children?: ReactNode;
}
