import { GalaxyS22Props } from "./GalaxyS22.types";
import "./style.css";

export default function GalaxyS22(props: GalaxyS22Props) {
  const { colour, backgroundImg, children, className } = props;
  return (
    <div id="Samsung_Galaxy_S22">
      <svg className="frame">
        <rect
          id="frame"
          rx="43"
          ry="43"
          x="0"
          y="0"
          width="336"
          height="698"
        ></rect>
      </svg>
      <svg className="bezzle">
        <rect
          id="bezzle"
          rx="40"
          ry="40"
          x="0"
          y="0"
          width="324"
          height="684"
        ></rect>
      </svg>
      <svg className="screen">
        <rect
          id="screen"
          rx="28"
          ry="28"
          x="0"
          y="0"
          width="307"
          height="667"
        ></rect>
      </svg>
      <div className={className ? className : "children"}>{children}</div>
      {backgroundImg !== "" && <img id="background-img" src={backgroundImg} />}
      <div id="camera">
        <svg className="outer-camera">
          <ellipse id="outer-camera" rx="8" ry="8" cx="8" cy="8"></ellipse>
        </svg>
        <svg className="inner-camera">
          <ellipse id="inner-camera" rx="2" ry="2" cx="2" cy="2"></ellipse>
        </svg>
      </div>
      <svg className="power-button">
        <rect
          id="power-button"
          rx="1"
          ry="1"
          x="0"
          y="0"
          width="4"
          height="47"
        ></rect>
      </svg>
      <svg className="volume-controls">
        <rect
          id="volume-controls"
          rx="1"
          ry="1"
          x="0"
          y="0"
          width="4"
          height="88"
        ></rect>
      </svg>
      <div id="antenna-bands">
        <svg className="l-t-band">
          <rect
            id="l-t-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="6"
            height="6"
          ></rect>
        </svg>
        <svg className="l-m-band">
          <rect
            id="l-m-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="6"
            height="6"
          ></rect>
        </svg>
        <svg className="l-b-band">
          <rect
            id="l-b-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="6"
            height="6"
          ></rect>
        </svg>
        <svg className="b-l-band">
          <rect
            id="b-l-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="6"
            height="7"
          ></rect>
        </svg>
        <svg className="b-r-band">
          <rect
            id="b-r-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="6"
            height="7"
          ></rect>
        </svg>
        <svg className="t-r-band">
          <rect
            id="t-r-band"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="6"
            height="7"
          ></rect>
        </svg>
      </div>
    </div>
  );
}
