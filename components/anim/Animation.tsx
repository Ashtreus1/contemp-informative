"use client";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export function LeftAnim({ children, values, className, duration }: any) {
	values = "-" + values + "%";
	return (
		<motion.div
			className={className}
			initial={{ x: values, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			exit={{ x: values, opacity: 0 }}
			transition={{ duration: duration }}
		>
			{children}
		</motion.div>
	);
}
export function RightAnim({ children, values, className, duration }: any) {
	values = values + "%";
	return (
		<motion.div
			className={className}
			initial={{ x: values, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			exit={{ x: values, opacity: 0 }}
			transition={{ duration: duration }}
		>
			{children}
		</motion.div>
	);
}

export function TopAnim({ children, values, className, duration }: any) {
	values = "-" + values + "%";
	return (
		<motion.div
			className={className}
			initial={{ y: values, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			exit={{ y: values, opacity: 0 }}
			transition={{ duration: duration }}
		>
			{children}
		</motion.div>
	);
}

export function BottomAnim({ children, values, className, duration }: any) {
	values = values + "%";
	return (
		<motion.div
			className={className}
			initial={{ y: values, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			exit={{ y: values, opacity: 0 }}
			transition={{ duration: duration }}
		>
			{children}
		</motion.div>
	);
}

LeftAnim.prptypes = {
	children: PropTypes.node,
	values: PropTypes.string,
	className: PropTypes.string,
	duration: PropTypes.number,
};
LeftAnim.defaultProps = {
	children: null,
	values: "100",
	className: "",
	duration: 1,
};

RightAnim.prptypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	values: PropTypes.string,
	duration: PropTypes.number,
};
RightAnim.defaultProps = {
	children: null,
	className: "",
	values: "100",
	duration: 1,
};

TopAnim.prptypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	values: PropTypes.string,
	delay: PropTypes.number,
};
TopAnim.defaultProps = {
	children: null,
	className: "",
	values: "100",
	duration: 1,
};

BottomAnim.prptypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	values: PropTypes.string,
	duration: PropTypes.number,
};
BottomAnim.defaultProps = {
	children: null,
	className: "",
	values: "100",
	duration: 1,
};
