/**
 * @file Device.tsx - Device component definition
 * @requires react
 * @author Harry Rhodes
 */
import { Fragment, ReactNode, useEffect, useState } from "react";
import { DeviceProps } from "./Device.types";
import IPhone13Pro from "../devices/ios/IPhone13Pro";
import GalaxyS22 from "../devices/android/GalaxyS22";
/**
 * @function Device - Renders Device component
 * @param props - Device props @see Device.types.ts
 */
export default function Device(props: DeviceProps) {
  const { device, backgroundImg, className, children } = props;
  const [deviceType, setDeviceType] = useState<ReactNode>();

  useEffect(() => {
    switch (device) {
      case "iphone-13-pro":
        setDeviceType(
          <IPhone13Pro
            backgroundImg={backgroundImg}
            className={className}
            children={children}
          />
        );
        break;
      case "galaxy-s22":
        setDeviceType(
          <GalaxyS22
            backgroundImg={backgroundImg}
            className={className}
            children={children}
          />
        );
        break;
      default:
        break;
    }
  }, [device, backgroundImg, children]);
  return <Fragment>{deviceType}</Fragment>;
}
