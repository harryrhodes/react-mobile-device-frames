/**
 * @file Device.types.ts - Type definitions for device component @see Device
 * @requires ReactNode
 * @author Harry Rhodes
 */
import { ReactNode } from "react";
/**
 * Enum for device type.
 * @readonly
 * @enum {string}
 */
enum DeviceType {
  IPhone13Pro = "iphone-13-pro",
  GalaxyS22 = "galaxy-s22",
}
/**
 * @typedef DeviceProps
 * @property {DeviceType} device - name of device to be displayed @see DeviceType
 * @property {string} backgroundImg - src of background image to display on device
 * @property {ReactNode} children - embedded content to be displayed
 */
export interface DeviceProps {
  device: DeviceType;
  backgroundImg?: string;
  children?: ReactNode;
}
