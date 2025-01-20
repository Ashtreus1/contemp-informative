"use client";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

type AnimationProps = {
  children: React.ReactNode;
  values: string;
  className?: string;
  duration?: number;
};

// Left Animation
export const LeftAnim = ({ children, values, className, duration }: AnimationProps) => {
  const initialX = `-${values}%`;
  return (
    <motion.div
      className={className}
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: initialX, opacity: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

// Right Animation
export const RightAnim = ({ children, values, className, duration }: AnimationProps) => {
  const initialX = `${values}%`;
  return (
    <motion.div
      className={className}
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: initialX, opacity: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

// Top Animation
export const TopAnim = ({ children, values, className, duration }: AnimationProps) => {
  const initialY = `-${values}%`;
  return (
    <motion.div
      className={className}
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: initialY, opacity: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

// Bottom Animation
export const BottomAnim = ({ children, values, className, duration }: AnimationProps) => {
  const initialY = `${values}%`;
  return (
    <motion.div
      className={className}
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: initialY, opacity: 0 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

// PropTypes Definitions
LeftAnim.propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
};

RightAnim.propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
};

TopAnim.propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
};

BottomAnim.propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
};

// Default Props
const defaultProps = {
  values: "100",
  className: "",
  duration: 1,
};

LeftAnim.defaultProps = defaultProps;
RightAnim.defaultProps = defaultProps;
TopAnim.defaultProps = defaultProps;
BottomAnim.defaultProps = defaultProps;
