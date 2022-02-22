import { Story, Meta } from "@storybook/react";
import IOSImage from "./testImages/ios.png";
import AndriodImage from "./testImages/android.png";
import Device from "./Device";
import { DeviceProps } from "./Device.types";

export default {
  title: "react-mobile-device-frames/Device",
  component: Device,
  argTypes: {},
} as Meta<typeof Device>;

const Template: Story<DeviceProps> = (props) => <Device {...props} />;

let embed = (
  <div
    style={{
      backgroundColor: "white",
      width: "250px",
      height: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif",
    }}
  >
    <h1>Hello World</h1>
    <h4>This is some embedded content</h4>
  </div>
);

export const IPhone13Pro = Template.bind({});
IPhone13Pro.args = {
  device: "iphone-13-pro",
  colour: "grey",
  backgroundImg: IOSImage,
  children: embed,
};

export const GalaxyS22 = Template.bind({});
GalaxyS22.args = {
  device: "galaxy-s22",
  colour: "grey",
  backgroundImg: AndriodImage,
  children: embed,
};
