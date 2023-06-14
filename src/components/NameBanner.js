import React from "react";

import { motion } from "framer-motion";

const NameBanner = () => {
  const paths = {
    madison: {
      0: "m76.615,8.929c0-.648-.864-.648-.864-.648-6.265,0-30.026,36.003-50.261,58.325-2.016,2.16-2.52,2.592-4.536,2.592-2.232,0-4.177-.216-4.177-1.728,0-.648.36-1.297.36-1.297C46.444,26.57,55.301,13.104,55.589,12.601c0,0,0-.216-.144-.216-.216,0-.433.216-.433.216-14.329,12.025-34.707,20.09-46.228,20.09-3.312,0-8.785-.792-8.785-3.24,0-.864.792-2.305,1.656-2.305,1.08,0,.937,2.881,9.146,2.881,16.129,0,41.476-13.394,52.276-27.938.144-.216.359-.288.576-.288.647,0,1.439.576,1.439,1.368,0,.216-.071.504-.216.72-11.953,18.146-25.202,41.332-29.522,47.524.072,0,.72-.072,1.152-.504C46.948,39.027,71.143,2.52,80.432,2.52c1.224,0,2.664,1.009,2.664,2.448,0,.36-.145.721-.288,1.08-2.088,4.177-10.657,19.226-19.802,33.843.36,0,.504-.144.792-.576,4.177-5.616,27.074-35.715,35.715-35.715,1.296,0,2.881.433,2.881,1.801,0,.288-.072.575-.217.863-2.16,5.545-29.45,57.102-29.45,76.831,0,4.681,1.584,7.633,5.4,7.633,5.904,0,11.593-4.969,13.825-13.753.216-.793,1.008-1.368,1.729-1.368.576,0,1.08.359,1.08,1.296,0,2.808-4.177,15.985-19.514,15.985-7.633,0-10.513-3.889-10.513-10.081,0-17.354,22.97-52.853,30.17-72.15,0-.432-.432-.72-1.008-.72-8.568,0-36.075,43.491-47.812,57.101-1.943,2.232-2.52,2.593-4.536,2.593-2.232,0-4.176-.217-4.176-1.729,0-.648.359-1.296.359-1.296,0-1.008,8.137-11.81,8.209-11.881,24.914-33.699,29.091-42.34,30.603-45.437.072-.144.072-.216.072-.359Z",
      1: "m105.196,66.173c-2.304,0-3.672-1.584-3.672-4.464,0-1.872.575-4.32,1.943-6.841,0-.216-.144-.36-.359-.36-.145,0-.288.072-.576.36-1.801,1.8-10.585,10.297-16.273,10.297-2.736,0-3.961-1.368-3.961-3.601,0-8.568,18.362-29.522,37.012-29.522,2.232,0,2.88.576,2.88,1.368,0,1.368-2.088,3.169-2.448,3.169-.144,0-.071-2.521-3.456-2.521-12.529,0-26.858,18.577-26.858,23.618,0,.792.36,1.296,1.152,1.296,5.761,0,13.753-8.209,17.065-11.665,2.448-2.664,8.064-9.36,9.793-9.505.432-.072,1.008-.144,1.656-.144,1.296,0,2.52.216,2.52.792,0,.144-.071.216-.144.359-.504.648-1.944,2.017-3.385,3.601-3.744,3.96-10.944,11.81-10.944,18.361,0,1.872.576,2.809,1.584,2.809,2.088,0,6.265-3.816,12.602-11.377,0,0,.575.216.575.72,0,.145,0,.288-.144.504-6.913,8.857-12.89,12.745-16.562,12.745Z",
      2: "m191.745,3.672c0,7.345-15.554,23.402-36.003,27.362-8.354,12.313-14.762,24.914-14.762,29.738,0,1.872.576,2.809,1.584,2.809,2.088,0,6.265-3.816,12.602-11.377,0,0,.576.216.576.72,0,.145,0,.288-.145.504-6.912,8.857-12.889,12.745-16.562,12.745-2.304,0-3.672-1.584-3.672-4.464,0-1.513.432-3.528,1.296-5.904-2.88,2.736-9.865,8.784-14.833,8.784-3.961,0-5.617-2.016-5.617-4.968,0-8.209,13.033-23.834,25.778-23.834,2.376,0,3.169.792,3.169,1.728,0,1.44-1.656,3.168-2.017,3.168-.144,0-.792-2.88-4.177-2.88-6.408,0-15.769,12.961-15.769,18.578,0,1.584.72,2.592,2.448,2.592,3.888,0,8.856-3.744,12.673-7.272,2.664-5.833,6.912-12.89,11.953-19.946-1.08,0-2.952-.575-2.952-2.304,0-.504.288-.937.863-.937.721.072,1.944.145,3.097.145.432,0,.864,0,1.296-.072C163.734,13.753,177.848,0,187.064,0c3.24,0,4.681,1.439,4.681,3.672Zm-5.833-1.296c-7.2,0-18.577,12.169-28.082,25.634,18.361-3.312,30.171-18.001,30.171-23.546,0-1.296-.648-2.088-2.089-2.088Z",
      3: "m164.955,36.867c1.729-1.656,2.017-1.656,4.032-1.656,1.296,0,2.089.216,2.089.792,0,.144-.072.216-.145.359-4.536,5.688-14.978,18.722-14.978,24.41,0,1.872.576,2.809,1.584,2.809,2.089,0,6.265-3.816,12.602-11.377,0,0,.576.216.576.72,0,.145,0,.288-.145.504-7.057,9.073-13.465,13.105-17.281,13.105-2.304,0-3.744-1.512-3.744-4.248,0-6.192,10.873-20.882,15.409-25.418Zm11.017-16.778c2.521,0,4.249,1.801,4.249,4.104,0,3.385-3.169,6.337-6.48,6.337-2.521,0-4.177-1.729-4.177-4.104,0-3.384,3.168-6.337,6.408-6.337Z",
      4: "m194.188,52.924c0,.145,0,.288-.145.504-6.841,8.857-13.609,11.81-20.09,11.81-6.769,0-9.001-3.312-9.001-6.841,0-3.889,2.736-7.992,5.112-7.992.505,0,1.009.071,1.513.216,3.096-3.456,6.553-7.129,9.577-10.657-.072-1.008-.217-2.232-.217-3.24,0-5.977,3.385-8.785,5.617-8.785,1.08,0,1.872.648,1.872,1.944,0,2.089-2.017,5.257-5.041,9.001.504,3.673,1.801,8.856,1.801,14.113,0,4.465-2.017,7.561-4.753,9.505,4.104-1.296,8.425-4.681,13.178-10.297,0,0,.576.216.576.72Zm-26.787,7.633c0,1.225.721,1.944,2.232,1.944,5.473,0,11.665-8.641,11.665-19.874v-1.224c-2.88,3.24-5.832,6.336-8.641,9.721.288.144.432.288.504.36-3.744,3.6-5.761,7.057-5.761,9.072Zm17.57-29.883c-.864,0-1.944,1.08-1.944,4.104,0,.576.071,1.152.144,2.664,1.801-2.304,2.952-4.248,2.952-5.472,0-.792-.576-1.297-1.151-1.297Z",
      5: "m220.899,39.603c0,3.889-4.752,11.377-11.305,17.426.576.72,1.368,1.08,2.376,1.08,2.305,0,5.545-2.16,8.641-5.904,0,0,.648.216.648.72,0,.145-.072.288-.216.504-3.097,4.393-7.129,6.553-10.441,6.553-1.296,0-2.448-.288-3.384-.936-4.969,4.032-10.729,6.984-16.201,6.984-3.024,0-4.393-1.729-4.393-4.32,0-9.001,15.841-28.803,33.986-28.803,2.377,0,3.097.648,3.097,1.44,0,1.152-1.656,2.592-2.017,2.592-.144,0-.72-2.016-4.104-2.016-9.793,0-24.194,16.562-24.194,23.762,0,2.017,1.152,3.312,3.816,3.312s5.688-1.872,8.496-4.465c-.72-1.08-1.08-2.592-1.08-4.393,0-6.696,6.049-16.057,13.682-16.057,1.8,0,2.592.936,2.592,2.52Zm-5.472-.216c-3.097,0-6.77,8.137-6.77,13.682,0,.504,0,.936.072,1.368,4.32-5.041,7.705-11.161,7.705-13.754,0-.792-.288-1.296-1.008-1.296Z",
      6: "m231.771,37.154c1.08-1.224,1.584-1.224,3.24-1.224,1.152,0,2.376.144,2.376.792,0,.145-.072.216-.144.36,0,0-6.625,8.568-11.953,17.354,5.04-5.112,21.458-20.45,27.435-20.45.432,0,.576.216.576.504,0,.36-.217.864-.36.937-5.545,3.888-15.842,19.441-15.842,25.346,0,1.872.576,2.809,1.584,2.809,2.089,0,6.265-3.816,12.602-11.377,0,0,.576.216.576.72,0,.145,0,.288-.145.504-6.912,8.857-12.889,12.745-16.562,12.745-2.304,0-4.392-.72-4.392-3.6,0-5.473,7.92-16.202,13.465-22.034,0-.216-.144-.216-.288-.216-1.872,0-19.441,17.138-22.826,20.666-1.439,1.296-3.744,4.392-5.977,4.392-1.439,0-2.376-.936-2.376-2.592l19.01-25.635Z",
    },
    olguin: {
      0: "m36.003,52.205c-1.44-2.809-2.088-6.337-2.088-10.153,0-14.905,9.937-34.274,18.793-34.274,3.097,0,4.537,2.664,4.537,6.912,0,9.289-6.625,25.994-16.634,39.315,1.08,1.225,2.521,2.232,4.177,2.952.288.145.359.433.359.648,0,.359-.359.72-.936.72-.145,0-.36,0-.576-.072-1.8-.432-3.312-1.224-4.608-2.304-8.137,10.225-18.434,18.001-29.162,18.001-6.913,0-9.865-4.608-9.865-11.448C0,41.764,27.29,0,56.381,0c3.601,0,4.824,1.152,4.824,2.521,0,2.16-3.024,4.969-4.752,4.969-.145,0,.071-3.745-3.312-3.745C30.675,3.744,5.04,46.156,5.04,64.229c0,4.896,1.944,7.993,6.265,7.993,7.777,0,16.922-8.929,24.698-20.018Zm15.697-41.836c-6.192,0-15.193,17.065-15.193,30.891,0,2.952.433,5.761,1.368,8.209,9.001-13.537,15.77-29.379,15.77-36.003,0-1.944-.576-3.097-1.944-3.097Z",

      1: "m43.056,65.382c0-14.905,43.275-63.077,49.756-63.077,2.305,0,3.385.936,3.385,2.592,0,7.849-23.114,31.323-40.323,44.716-3.816,6.625-6.337,12.313-6.337,15.266,0,1.44.576,2.304,1.944,2.304,2.088,0,6.265-3.815,12.601-11.377,0,0,.576.217.576.721,0,.144,0,.288-.144.504-6.913,8.856-12.89,12.745-16.562,12.745-3.385,0-4.896-1.656-4.896-4.393Zm14.689-18.865c14.329-11.449,34.707-34.491,34.707-39.027,0-.504-.288-.792-.792-.792-5.329,0-23.187,22.321-33.915,39.819Z",
      2: "m52.198,84.392c-1.584,0-3.096-.504-3.096-.864,0-.216.432-.36,1.439-.432,10.081-.576,26.57-22.178,26.499-22.898,0-.216-.145-.359-.36-.359-.144,0-.288.071-.576.359-1.8,1.801-10.657,9.793-16.346,9.793-2.664,0-3.816-1.296-3.816-3.456,0-8.713,19.37-30.675,38.235-30.675,2.521,0,3.385.937,3.385,2.017,0,1.655-2.017,3.744-3.097,3.744-.144,0,.072-3.744-3.312-3.744-12.674,0-28.155,19.729-28.155,24.77,0,.721.36,1.152,1.08,1.152,5.761,0,15.554-9.145,18.866-12.602,1.224-1.296,3.096-3.6,4.032-4.608.648-.647,2.305-.863,3.168-.863,1.297,0,2.521.216,2.521.792,0,.144-.072.216-.144.359-4.753,6.265-22.395,37.516-40.324,37.516Z",
      3: "m105.768,58.901c-.144,0-.288.144-.288.144-1.872,1.873-9.648,9.722-15.337,9.722-2.664,0-3.744-1.08-3.744-2.881,0-5.04,8.496-15.697,15.265-23.834,2.448-2.592,3.673-3.672,4.537-3.816.359-.071,1.008-.144,1.655-.144,1.009,0,2.017.216,2.017.792,0,.216-.144.36-.144.36-7.849,7.344-15.985,19.657-15.985,23.113,0,.576.287.937.792.937,4.824,0,10.801-5.833,14.688-10.153,2.593-3.744,5.688-7.633,8.929-11.305,2.377-2.664,3.673-3.528,4.537-3.816.432-.144,1.152-.216,1.872-.216.864,0,1.728.144,1.728.72,0,.145-.071.216-.144.36-7.993,7.416-16.489,19.657-16.489,25.49,0,1.872.576,2.808,1.584,2.808,2.088,0,6.265-3.815,12.602-11.377,0,0,.575.217.575.721,0,.144,0,.288-.144.504-7.057,9.001-13.321,13.033-17.065,13.033-2.305,0-3.673-1.44-3.673-4.248,0-1.801.792-4.177,2.232-6.913Z",
      4: "m133.703,40.468c1.728-1.656,2.016-1.656,4.032-1.656,1.296,0,2.088.216,2.088.792,0,.145-.072.216-.144.36-4.537,5.688-14.978,18.722-14.978,24.41,0,1.872.576,2.808,1.584,2.808,2.088,0,6.265-3.815,12.601-11.377,0,0,.576.217.576.721,0,.144,0,.288-.144.504-7.057,9.072-13.465,13.105-17.281,13.105-2.305,0-3.745-1.513-3.745-4.249,0-6.192,10.873-20.882,15.41-25.418Zm11.017-16.777c2.521,0,4.248,1.8,4.248,4.104,0,3.384-3.168,6.336-6.48,6.336-2.521,0-4.176-1.728-4.176-4.104,0-3.385,3.168-6.337,6.408-6.337Z",
      5: "m149.398,40.756c1.08-1.225,1.584-1.225,3.24-1.225,1.152,0,2.376.145,2.376.793,0,.144-.072.216-.144.359,0,0-6.625,8.569-11.953,17.354,5.04-5.112,21.458-20.449,27.435-20.449.432,0,.576.216.576.504,0,.359-.217.864-.36.936-5.545,3.889-15.842,19.442-15.842,25.347,0,1.872.576,2.808,1.584,2.808,2.089,0,6.265-3.815,12.602-11.377,0,0,.576.217.576.721,0,.144,0,.288-.145.504-6.912,8.856-12.889,12.745-16.562,12.745-2.304,0-4.392-.72-4.392-3.601,0-5.473,7.92-16.201,13.465-22.034,0-.216-.144-.216-.288-.216-1.872,0-19.441,17.138-22.826,20.666-1.439,1.296-3.744,4.393-5.977,4.393-1.439,0-2.376-.937-2.376-2.593l19.01-25.634Z",
    },
  };

  return (
    <div id="banner">
      {/* banner background-dark */}
      <div id="banner-background-dark"></div>
      {/* banner background */}
      <motion.div
        initial={{
          opacity: 0,
          skew: "-20deg",
          y: "-200%",
        }}
        animate={{
          opacity: 1,
          y: "0%",
        }}
        transition={{
          y: {
            duration: 1.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          },
          opacity: {
            duration: 0.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
        id="banner-background"
      />

      {/* olguin */}
      <div>
        <svg
          id="svg-letters-olguin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 280 120"
        >
          {Object.entries(paths.olguin).map((path) => (
            <motion.path
              initial={{
                opacity: 0,
                pathLength: 0,
                fill: "rgba(255, 255, 255, 0)",
                strokeWidth: 1,
                filter: "drop-shadow(0em 0em 0em #000000)",
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                fill: "rgba(255, 255, 255, 1)",
                strokeWidth: 0,
                filter: "drop-shadow(0.25em 0.25em 0.25em #000000)",
              }}
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { delay: 2.4, duration: 1, ease: [1, 0, 0.8, 1] },
                strokeWidth: { delay: 2.8, duration: 1, ease: [1, 0, 0.8, 1] },
                filter: { delay: 2.8, duration: 1, ease: [1, 0, 0.8, 1] },
              }}
              key={`olguin-index-${path[0]}`}
              fill="#FFFFFF"
              d={path[1]}
            />
          ))}
        </svg>
      </div>
      {/* adison */}
      <div>
        <svg
          id="svg-letters-adison"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 280 120"
          fill="#FFFFFF"
        >
          {Object.entries(paths.madison).map(
            (path, index) =>
              index > 0 && (
                <motion.path
                  initial={{
                    opacity: 0,
                    pathLength: 0,
                    fill: "rgba(255, 255, 255, 0)",
                    strokeWidth: 1,
                    filter: "drop-shadow(0em 0em 0em #000000)",
                  }}
                  animate={{
                    opacity: 1,
                    pathLength: 1,
                    fill: "rgba(255, 255, 255, 1)",
                    strokeWidth: 0,
                    filter: "drop-shadow(0.25em 0.25em 0.25em #000000)",
                  }}
                  transition={{
                    default: { duration: 3, ease: "easeInOut" },
                    fill: { delay: 2.4, duration: 1, ease: [1, 0, 0.8, 1] },
                    strokeWidth: {
                      delay: 2.8,
                      duration: 1,
                      ease: [1, 0, 0.8, 1],
                    },
                    filter: { delay: 2.8, duration: 1, ease: [1, 0, 0.8, 1] },
                  }}
                  key={`madison-index-${path[0]}`}
                  fill="#FFFFFF"
                  d={path[1]}
                />
              )
          )}
        </svg>
      </div>
      {/* letter m */}
      <div>
        <svg
          id="svg-letter-m"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 280 120"
          fill="#FFFFFF"
        >
          <motion.path
            initial={{
              opacity: 0,
              pathLength: 0,
              fill: "rgba(255, 255, 255, 0)",
              strokeWidth: 1,
              filter: "drop-shadow(0em 0em 0em #000000)",
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
              fill: "rgba(255, 255, 255, 1)",
              strokeWidth: 0,
              filter: "drop-shadow(0.25em 0.25em 0.25em #000000)",
            }}
            transition={{
              default: { duration: 3, ease: "easeInOut" },
              fill: { delay: 2.4, duration: 1, ease: [1, 0, 0.8, 1] },
              strokeWidth: { delay: 2.8, duration: 1, ease: [1, 0, 0.8, 1] },
              filter: { delay: 2.8, duration: 1, ease: [1, 0, 0.8, 1] },
            }}
            key={`madison-index-0`}
            fill="#FFFFFF"
            d={paths.madison[0]}
          />
        </svg>
      </div>
    </div>
  );
};

export default NameBanner;
