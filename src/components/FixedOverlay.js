// Second attempt - opted to use SVGs as overlay as pointer events is friendlier to ignore the element.
// Future Ideas
// - replace with nav and/or footer if user prefers
// -

// props list
// color... sets fill color for top and bottom svg
// -- topColor... if defined, overwrites fill color for top svg
// -- bottomColor... if defined, overwrites fill color for bottom svg
// overlayHeight... sets height of top and bottom svg. if numeric, will use vh. Also sets the scroll box's height minus 2x the overlayHeight or minus the top and bottom heights if they were defined separately. Also needs to move the top down by half of the top and bottom combined to center the content within the overlay visible area.
// -- topHeight... if defined, overwrites top height value
// -- bottomHeight... if defined, overwrites bottom height value
// envHeight... boolean to add env safe area to heights
// zIndex... sets zIndex if user needs to increase default value

// future feature
// boxShadow... accept full string for user to define their own shadow settings or if boolean is true use default values.
// -- bsColor... override color portion of boxShadow
// -- bsTransparency... adds transparency to boxShadow color. numeric as percentage converted to rgba or hex-alpha
// -- bsBlur... override blur-radius of boxShadow. numeric as pixels, or string for user to include unit
// -- bsSpread...  override spread-radius of boxShadow. numeric as pixels, or string for user to include unit

import React from "react";

const FixedOverlay = ({
  color = "#000000",
  overlayHeight = "10vh",
  envHeight = true,
  zIndex = 9000,
  ...props
}) => {
  const topHeight = props.topHeight ? props.topHeight : overlayHeight;
  const bottomHeight = props.bottomHeight ? props.bottomHeight : overlayHeight;
  const topColor = props.topColor ? props.topColor : color;
  const bottomColor = props.bottomColor ? props.bottomColor : color;

  console.log(!envHeight);
  console.log(zIndex);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: `100vh`,
          // height: `calc(100vh - ${
          //   envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
          // } - ${topHeight} - ${
          //   envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
          // } - ${bottomHeight})`,
          // if not using margins, moving top will keep div center aligned
          //   top: `calc(((${
          //     envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
          //   } + ${topHeight})/2) + ((${
          //     envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
          //   } + ${bottomHeight})/2))`,
          overflow: "scroll",
          scrollSnapType: "y mandatory",
          paddingTop: `calc(${
            envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
          } + ${topHeight})`,
          paddingBottom: `calc(${
            envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
          } + ${bottomHeight})`,
        }}
      >
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            ...child.props,
            paddingTop: `calc(${
              envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
            } + ${topHeight})`,
            paddingBottom: `calc(${
              envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
            } + ${bottomHeight})`,
          });
        })}
      </div>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: "0px",
          left: "0px",
          position: "fixed",
          pointerEvents: "none",
        }}
      >
        <svg
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100vw",
            height: `calc(${
              envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
            } + ${topHeight})`,
            pointerEvents: "none",
            zIndex: `${zIndex}`,
          }}
        >
          <rect
            // style={{ zIndex: "9999" }}
            x="0"
            y="0"
            height="100%"
            width="100%"
            fill={topColor}
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100vw",
            height: `calc(${
              envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
            } + ${bottomHeight})`,
            pointerEvents: "none",
            zIndex: `${zIndex}`,
          }}
        >
          <rect x="0" y="0" height="100%" width="100%" fill={bottomColor} />
        </svg>
      </div>
      {/* <div
        style={{
          position: "relative",
          width: "100vw",
          height: `calc(100vh - ${
            envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
          } - ${topHeight} - ${
            envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
          } - ${bottomHeight})`,
          top: `calc(((${
            envHeight ? "env(safe-area-inset-top, 0vh)" : "0vh"
          } + ${topHeight})/2) + ((${
            envHeight ? "env(safe-area-inset-bottom, 0vh)" : "0vh"
          } + ${bottomHeight})/2))`,
          overflow: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        {props.children}
      </div> */}
    </>
  );
};

export default FixedOverlay;
