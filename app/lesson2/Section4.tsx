"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Section  from "./Section";
import { TextStyle, HeaderStyle, center } from "./constant";
import { BottomAnim } from "@/components/anim/Animation";

const BACKBUTTON = "w-full sm:w-1/6 h-10 sm:h-16 bg-gray-300 hover:bg-gray-400 text-black font-semibold";

export default function Section4() {
	const [showButtons, setShowButtons] = useState(false);
	const [bgStyle, setBgStyle] = useState(false);
	const [showPurposive, setShowPurposive] = useState(false);
	const [showGlobe, setShowGlobe] = useState(false);
	const [showRegional, setShowRegional] = useState(false);

	const buttonStyle = TextStyle + " text-black bg-gray-400 hover:bg-gray-300 font-semibold h-14 rounded-xl";

	return (
		<Section className="bg-[url(/lesson2_imgs/s4-bg-1.png)] relative">
			<div className="absolute inset-0 bg-black bg-opacity-50" />
			<BottomAnim values="100" duration={1.2} className="w-full h-full px-6 sm:px-20">
				<div className={`h-4/6 flex flex-col items-center justify-center relative`}>
					<h1 className={`${HeaderStyle} w-full`}>Sovereignty</h1>
					<p className={`${center}`}>
						The interstate system refers to the network of political and legal interactions between sovereign states. It encompasses
						diplomatic relations, treaties, trade agreements, and conflict resolutions, all aimed at maintaining international order and
						cooperation.
					</p>
				</div>

				<div
					className={`w-full h-2/6 relative ${center} content-end `}
					onMouseLeave={() => {
						setShowButtons(false);
						setBgStyle(false);
					}}
				>
					<AnimatePresence>
						{showButtons && (
							<motion.div
								className="absolute flex gap-5"
								initial={{ y: "0%", opacity: 0 }}
								animate={{ y: "-200%", opacity: 1 }}
								exit={{ y: "-20%", opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								<Button className={`${buttonStyle}`} onClick={() => setShowPurposive(true)}>
									Purposive
								</Button>
								<Button className={`${buttonStyle}`} onClick={() => setShowGlobe(true)}>
									Global / Universal
								</Button>
								<Button className={`${buttonStyle}`} onClick={() => setShowRegional(true)}>
									Regional
								</Button>
							</motion.div>
						)}
					</AnimatePresence>

					<Button
						// className={`text-lg xl:text-xl w-full sm:w-1/4 sm:h-16 bg-gray-400 hover:bg-gray-200 text-black font-semibold`}
						className={`${buttonStyle} ${bgStyle ? "bg-gray-200" : ""}`}
						onMouseEnter={() => {
							setShowButtons(true);
							setBgStyle(true);
						}}
					>
						International Organizations
					</Button>
				</div>
				<AnimatePresence>{showPurposive && <Purposive setShow={setShowPurposive} />}</AnimatePresence>
				<AnimatePresence>{showGlobe && <Global setShow={setShowGlobe} />}</AnimatePresence>
				<AnimatePresence>{showRegional && <Regional setShow={setShowRegional} />}</AnimatePresence>
			</BottomAnim>
		</Section>
	);
}

function Purposive({ setShow }: { setShow: (state: boolean) => void }) {
	return (
		<motion.div
			className="absolute top-0 left-0 right-0 bottom-0"
			initial={{ x: "-100%", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: "-100%", opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			<Section className="bg-[url(/lesson2_imgs/s4-bg-2.png)] relative px-10 lg:px-36 py-20 gap-10">
				<div>
					<h1 className={HeaderStyle}>Purposive</h1>
					<p>
						Organizations focused on specific issues, such as the World Health Organization (WHO), which coordinates international public
						health efforts.
					</p>
				</div>
				<div className={`w-full`}>
					<Button className={BACKBUTTON} onClick={() => setShow(false)}>
						Back
					</Button>
				</div>
			</Section>
		</motion.div>
	);
}

function Global({ setShow }: { setShow: (state: boolean) => void }) {
	return (
		<motion.div
			className="absolute top-0 left-0 right-0 bottom-0"
			initial={{ y: "-100%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: "-100%", opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			<Section className="bg-[url(/lesson2_imgs/s4-bg-2.png)] relative px-10 lg:px-36 py-20 gap-10">
				<div>
					<h1 className={HeaderStyle}>Global/Universal</h1>
					<p>
						Organizations with a worldwide membership, such as the United Nations (UN), which addresses global issues like peacekeeping,
						health, and environmental protection.
					</p>
				</div>
				<div className={`w-full`}>
					<Button className={BACKBUTTON} onClick={() => setShow(false)}>
						Back
					</Button>
				</div>
			</Section>
		</motion.div>
	);
}

function Regional({ setShow }: { setShow: (state: boolean) => void }) {
	return (
		<motion.div
			className="absolute top-0 left-0 right-0 bottom-0"
			initial={{ x: "100%", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: "100%", opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			<Section className="bg-[url(/lesson2_imgs/s4-bg-2.png)] relative px-10 lg:px-36 py-20 gap-10">
				<div>
					<h1 className={HeaderStyle}>Regional</h1>
					<p>
						Organizations limited to specific regions, such as the European Union (EU) and the African Union (AU), which promote regional
						integration and development.
					</p>
				</div>
				<div className={`w-full`}>
					<Button className={BACKBUTTON} onClick={() => setShow(false)}>
						Back
					</Button>
				</div>
			</Section>
		</motion.div>
	);
}
