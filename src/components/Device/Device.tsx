import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { DeviceProps } from "./Device.types";
import IPhone13Pro from "../devices/ios/IPhone13Pro";
import GalaxyS22 from "../devices/android/GalaxyS22";

export default function Device(props: DeviceProps) {
  const { device, colour, backgroundImg, children } = props;
  const [deviceType, setDeviceType] = useState<ReactNode>();

  useEffect(() => {
    switch (device) {
      case "iphone-13-pro":
        setDeviceType(
          <IPhone13Pro
            colour={colour}
            backgroundImg={backgroundImg}
            children={children}
          />
        );
        break;
      case "galaxy-s22":
        setDeviceType(
          <GalaxyS22
            colour={colour}
            backgroundImg={backgroundImg}
            children={children}
          />
        );
        break;
      default:
        break;
    }
  }, []);
  return <Fragment>{deviceType}</Fragment>;
}
