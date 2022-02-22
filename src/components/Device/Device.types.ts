import { ReactNode } from "react";

export interface DeviceProps {
  device: string;
  colour: string;
  backgroundImg?: string;
  children?: ReactNode;
}
