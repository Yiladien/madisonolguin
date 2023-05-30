import React from "react";

//bootstrap
import Image from "react-bootstrap/Image";

import {
  // throwball50,
  // throwball25,
  // throwball10,
  // throwballNoBall50,
  // throwballNoBall25,
  // throwballNoBall10,
  // throwballBall50,
  // throwballBall25,
  // throwballBall10,
  throwball50Vert,
  // throwball25Vert,
  // throwball10Vert,
  throwballNoBall50Vert,
  // throwballNoBall25Vert,
  throwballNoBall10Vert,
  throwballBall50Vert,
  // throwballBall25Vert,
  throwballBall10Vert,
} from "../assets/images/jumbo/";

import { motion } from "framer-motion";

const ThrowBall = () => {
  const ballAnimationSettings = {
    duration: 30,
    vertical: {
      originX: 26.3,
      originY: 22.2,
    },
    horizontal: {
      originX: 32.1,
      originY: 22.2,
    },
  };

  return (
    <div className="position-relative d-flex justify-content-center">
      <motion.div
        className="position-relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        animate={{ scale: 1.0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          className="position-absolute"
          initial={{ opacity: 0, scale: 0.25 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: "easeInOut",
          }}
        >
          <Image
            fluid
            src={throwballNoBall50Vert}
            alt="madison-olguin"
            className="drop-shadow"
          />
        </motion.div>

        <motion.div
          className="position-absolute"
          // style={{
          //   transformOrigin: `${ballAnimationSettings.vertical.originX}% ${ballAnimationSettings.vertical.originY}%`,
          // }}
          initial={{
            originX: `${ballAnimationSettings.vertical.originX}%`,
            originY: `${ballAnimationSettings.vertical.originY}%`,
          }}
          animate={{
            rotate: -360,
            originX: `${ballAnimationSettings.vertical.originX}%`,
            originY: `${ballAnimationSettings.vertical.originY}%`,
          }}
          transition={{
            duration: ballAnimationSettings.duration,
            delay: 1.5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.25,
            }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: "easeInOut",
            }}
          >
            <Image
              fluid
              src={throwballBall50Vert}
              alt="madison-olguin"
              //   className=""
            />
          </motion.div>
        </motion.div>

        <Image
          fluid
          src={throwballNoBall50Vert}
          alt="basketball"
          className="opacity-0"
        />
      </motion.div>
    </div>
  );
};

export default ThrowBall;
