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

//Device template renders
export const Primary = Template.bind({});
Primary.args = {
  device: "galaxy-s22",
  backgroundImg: AndriodImage,
  children: embed,
};
