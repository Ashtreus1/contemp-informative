"use client";
import { motion } from "framer-motion";

const defaultProps = {
	children: null,
	values: "100",
	className: "",
	duration: 1,
	viewport: { amount: "all" },
};

LeftAnim.defaultProps = defaultProps;
RightAnim.defaultProps = defaultProps;
TopAnim.defaultProps = defaultProps;
BottomAnim.defaultProps = defaultProps;

export function LeftAnim({ children, values, className, duration, viewport }: any) {
	values = values ? values : 100;
	values = "-" + values + "%";

	return (
		<motion.div
			className={className}
			initial={{ x: values, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			exit={{ x: values, opacity: 0 }}
			transition={{ duration: duration }}
			viewport={viewport}
		>
			{children}
		</motion.div>
	);
}
export function RightAnim({ children, values, className, duration, viewport }: any) {
	values = values ? values : 100;
	values = values + "%";
	return (
		<motion.div
			className={className}
			initial={{ x: values, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			exit={{ x: values, opacity: 0 }}
			transition={{ duration: duration }}
			viewport={viewport}
		>
			{children}
		</motion.div>
	);
}

export function TopAnim({ children, values, className, duration, viewport }: any) {
	values = values ? values : 100;
	values = "-" + values + "%";
	return (
		<motion.div
			className={className}
			initial={{ y: values, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			exit={{ y: values, opacity: 0 }}
			transition={{ duration: duration }}
			viewport={viewport}
		>
			{children}
		</motion.div>
	);
}

export function BottomAnim({ children, values, className, duration, viewport }: any) {
	values = values ? values : 100;
	values = values + "%";
	return (
		<motion.div
			className={className}
			initial={{ y: values, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			exit={{ y: values, opacity: 0 }}
			transition={{ duration: duration }}
			viewport={viewport}
		>
			{children}
		</motion.div>
	);
}
