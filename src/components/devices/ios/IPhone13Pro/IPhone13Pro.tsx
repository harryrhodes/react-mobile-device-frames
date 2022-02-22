import { IPhone13ProProps } from "./IPhone13Pro.types";
import "./style.css";

export default function iPhone13Pro(props: IPhone13ProProps) {
  const { colour, backgroundImg, children, className } = props;
  return (
    <div id="iPhone_13_Pro">
      <svg className="frame">
        <rect
          id="frame"
          rx="53"
          ry="53"
          x="0"
          y="0"
          width="339"
          height="698"
        ></rect>
      </svg>
      <svg className="bezzle">
        <rect
          id="bezzle"
          rx="47"
          ry="47"
          x="0"
          y="0"
          width="329"
          height="688"
        ></rect>
      </svg>
      <svg className="screen">
        <rect
          id="screen"
          rx="35"
          ry="35"
          x="0"
          y="0"
          width="306"
          height="664"
        ></rect>
      </svg>
      <div className={className ? className : "children"}>{children}</div>
      {backgroundImg !== "" && <img id="background-img" src={backgroundImg} />}

      <svg
        className="notch"
        xmlns="http://www.w3.org/2000/svg"
        width="127"
        height="27"
        viewBox="0 0 127 27"
      >
        <path
          id="notch"
          d="M0,0H127a0,0,0,0,1,0,0V12a15,15,0,0,1-15,15H15A15,15,0,0,1,0,12V0A0,0,0,0,1,0,0Z"
        />
      </svg>

      <div id="camera">
        <svg className="outer-camera">
          <ellipse id="outer-camera" rx="6" ry="6" cx="6" cy="6"></ellipse>
        </svg>
        <svg className="inner-camera">
          <ellipse id="inner-camera" rx="2" ry="2" cx="2" cy="2"></ellipse>
        </svg>
      </div>
      <svg className="speaker">
        <rect
          id="speaker"
          rx="3.5"
          ry="3.5"
          x="0"
          y="0"
          width="58"
          height="7"
        ></rect>
      </svg>
      <svg className="power-button">
        <rect
          id="power-button"
          rx="1"
          ry="1"
          x="0"
          y="0"
          width="3"
          height="83"
        ></rect>
      </svg>
      <div id="volume-controls">
        <svg className="volume-down">
          <rect
            id="volume-down"
            rx="1"
            ry="1"
            x="0"
            y="0"
            width="3"
            height="55"
          ></rect>
        </svg>
        <svg className="volume-up">
          <rect
            id="volume-up"
            rx="1"
            ry="1"
            x="0"
            y="0"
            width="3"
            height="55"
          ></rect>
        </svg>
        <svg className="silent-toggle">
          <rect
            id="silent-toggle"
            rx="1"
            ry="1"
            x="0"
            y="0"
            width="3"
            height="29"
          ></rect>
        </svg>
      </div>
      <div id="antenna-bands">
        <svg className="t-r-band">
          <rect
            id="t-r-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="4"
            height="5"
          ></rect>
        </svg>
        <svg className="t-l-band">
          <rect
            id="t-l-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="4"
            height="5"
          ></rect>
        </svg>
        <svg className="l-t-band">
          <rect
            id="l-t-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="5"
            height="4"
          ></rect>
        </svg>
        <svg className="l-b-band">
          <rect
            id="l-b-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="5"
            height="4"
          ></rect>
        </svg>
        <svg className="b-l-band">
          <rect
            id="b-l-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="4"
            height="5"
          ></rect>
        </svg>
        <svg className="b-r-band">
          <rect
            id="b-r-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="4"
            height="5"
          ></rect>
        </svg>
        <svg className="r-b-band">
          <rect
            id="r-b-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="5"
            height="4"
          ></rect>
        </svg>
        <svg className="r-t-band">
          <rect
            id="r-t-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="5"
            height="4"
          ></rect>
        </svg>
      </div>
    </div>
  );
}
