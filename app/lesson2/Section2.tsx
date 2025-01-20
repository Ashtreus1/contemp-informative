"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Section  from "./Section";
import { TextStyle, HeaderStyle, center } from "./constant";
import { LeftAnim } from "@/components/anim/Animation";

const BackButtonStyle = "text-lg w-full sm:w-1/6 sm:h-16 bg-gray-300 hover:bg-gray-400 text-black font-semibold ";

export default function Section2() {
	const [showState, setShowState] = useState(false);

	return (
		<div id="section2" onWheel={() => setShowState(false)}>
			<Section className="bg-[url(/lesson2_imgs/s2-bg-1.png)] text-left py-10 px-6 sm:px-20 gap-5 relative">
				<LeftAnim values="100" duration={1.2}>
					<h1 className={`w-full  ${HeaderStyle}`}>State</h1>
					<div className="w-full">
						<p className="italic sm:w-3/4">
							{`
							A state is a political entity with a centralized government that holds the authority to govern a specific geographical
							area. It possesses sovereignty over its territory and is recognized as such by other states. This recognition can be
							bilateral or multilateral, depending on the state's international relationships.
							`}
						</p>
					</div>
					<motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} className="w-full flex items-center justify-center pt-10">
						<Button
							onClick={() => setShowState(true)}
							className={`text-lg xl:text-xl w-full sm:w-2/6 sm:h-16 bg-gray-400 hover:bg-gray-200 text-black font-semibold place-self-start`}
						>
							Four Elements of State
						</Button>
					</motion.div>
					<AnimatePresence>{showState && <State setShowState={setShowState} />}</AnimatePresence>
				</LeftAnim>
			</Section>
		</div>
	);
}

function State({ setShowState }: { setShowState: (state: boolean) => void }) {
	const buttonContainerStyle = "w-full flex flex-col sm:flex-row gap-5 sm:justify-between";
	const buttonStyle = TextStyle + "w-full sm:w-1/4 h-10 sm:h-16 bg-gray-200 hover:bg-gray-400 text-black font-semibold relative";

	const [peopleShowstate, setPeopleShowstate] = useState(false);
	const [territoryShowstate, setTerritoryShowstate] = useState(false);
	const [governmentShowstate, setGovernmentShowstate] = useState(false);
	const [sovereigntyShowstate, setSovereigntyShowstate] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
			animate={{ opacity: 1, backdropFilter: "blur(30px)" }}
			exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full"
		>
			<Section className={`py-10 px-6 sm:px-20 sm:gap-5`}>
				<div className={`w-full h-full sm:justify-evenly gap-5 ${center} `}>
					<div className={buttonContainerStyle}>
						<Button className={`${buttonStyle}`} onClick={() => setPeopleShowstate(true)}>
							People
						</Button>
						<AnimatePresence>{peopleShowstate && <People setShowState={setPeopleShowstate} />}</AnimatePresence>
						<Button className={buttonStyle} onClick={() => setTerritoryShowstate(true)}>
							Territory
						</Button>
						<AnimatePresence>{territoryShowstate && <Territory setShowState={setTerritoryShowstate} />}</AnimatePresence>
					</div>
					<h1 className={`${HeaderStyle} p-5 rounded-3xl text-center text-gray-200`}>Four Elements of State</h1>
					<div className={buttonContainerStyle}>
						<Button className={buttonStyle} onClick={() => setGovernmentShowstate(true)}>
							Government
						</Button>
						<AnimatePresence>{governmentShowstate && <Government setShowState={setGovernmentShowstate} />}</AnimatePresence>
						<Button className={`${buttonStyle}`} onClick={() => setSovereigntyShowstate(true)}>
							Sovereignty
						</Button>
						<AnimatePresence>{sovereigntyShowstate && <Sovereignty setShowState={setSovereigntyShowstate} />}</AnimatePresence>
					</div>
				</div>
				<Button onClick={() => setShowState(false)} className={`${BackButtonStyle} place-self-start`}>
					{"Back"}
				</Button>
			</Section>
		</motion.div>
	);
}

function People({ setShowState }: { setShowState: (state: boolean) => void }) {
	const containerStyle = "lg:w-1/2 p-10";
	return (
		<motion.div
			initial={{ x: "-100%" }}
			animate={{ x: 0 }}
			exit={{ x: "-100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className="bg-slate-800 py-10 px-6 xl:px-20 flex flex-row xl:flex-col gap-5">
				<div className="flex flex-col lg:flex-row gap-5">
					<div className={containerStyle}>
						<h1 className={HeaderStyle}>People</h1>
						<p>
							{`
							The population residing within the state's boundaries. This includes citizens and residents, whose rights and duties are
							defined by the state.
							`}
						</p>
					</div>
					<div className={`${containerStyle}`}>
						<img src="/lesson2_imgs/s2-img1.png" alt="" />
					</div>
				</div>
				<div className="w-full">
					<Button
						className={`w-full sm:w-1/6 h-14 bg-gray-400 hover:bg-gray-300 text-black font-semibold ${BackButtonStyle} text-black`}
						onClick={() => setShowState(false)}
					>
						{"Back"}
					</Button>
				</div>
			</Section>
		</motion.div>
	);
}

function Territory({ setShowState }: { setShowState: (state: boolean) => void }) {
	const [showStateAquiring, setShowStateAquiring] = useState(false);

	const containerStyle = "sm:w-1/2 p-10 flex flex-col gap-2";
	const customHeaderStyle = "text-left text-xl sm:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold";
	const customTextStyle = "text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl";

	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className={`bg-[url(/lesson2_imgs/s2-bg-2.png)] py-10 px-6 sm:px-20 ${customTextStyle}`}>
				<div className="flex flex-col sm:gap-5">
					<div className={containerStyle}>
						<h1 className={`${customHeaderStyle}`}>Territory</h1>
						<p>
							{`
							The defined geographical areha under the jurisdiction of the state. This includes land, water, and airspace, which are
							critical for the state's security and resources.
							`}
						</p>
					</div>
					<div className={containerStyle}>
						<h1 className={customHeaderStyle}>National Territory</h1>
						<p>Encompasses the total area over which a state exercises sovereign control, including its subsoil and maritime zones.</p>
					</div>
				</div>
				<div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-5">
					<Button
						className={`w-full sm:w-1/6 h-14 bg-gray-300 hover:bg-gray-400 text-black font-semibold ${BackButtonStyle}`}
						onClick={() => setShowState(false)}
					>
						{"Back"}
					</Button>
					<Button
						className={`${BackButtonStyle} w-full sm:w-2/6 bg-gray-300 hover:bg-gray-400 text-black font-semibold  `}
						onClick={() => setShowStateAquiring(true)}
					>
						{"Modes of Acquiring Territory"}
					</Button>
				</div>
				<AnimatePresence>{showStateAquiring && <TerritoryAquiring setShowState={setShowStateAquiring} />}</AnimatePresence>
			</Section>
		</motion.div>
	);
}

function TerritoryAquiring({ setShowState }: { setShowState: (state: boolean) => void }) {
	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className="bg-slate-800 py-10 px-6 sm:px-20 gap-5 relative">
				<div className="flex flex-col mb-10">
					<h1 className={`py-10 ${HeaderStyle}`}>Modes of Acquiring Territory</h1>
					<p>
						<strong>Occupation</strong>: Claiming uninhabited land.
					</p>
					<p>
						<strong>Accretion</strong>: Natural expansion of landmass.
					</p>
					<p>
						<strong>Cession</strong>: Transfer of territory through treaties.
					</p>
					<p>
						<strong>Conquest</strong>: Acquisition through force, though modern international law often prohibits this.
					</p>
					<p>
						<strong>Prescription</strong>: Acquisition through prolonged, uncontested exercise of sovereignty.
					</p>
					<div className="absolute top-40 right-40 sm:top-10 right-10 w-1/6">
						<img src="/lesson2_imgs/s2-img3.png" alt="" />
					</div>
				</div>
				<Button
					className={`w-full sm:w-[10%] h-14 bg-gray-300 hover:bg-gray-400 text-black font-semibold ${BackButtonStyle}`}
					onClick={() => setShowState(false)}
				>
					{"Back"}
				</Button>
			</Section>
		</motion.div>
	);
}

function Government({ setShowState }: { setShowState: (state: boolean) => void }) {
	const [showFormOfGovernment, setShowFormOfGovernment] = useState(false);

	const containerStyle = "lg:w-1/2 p-10";

	return (
		<motion.div
			initial={{ x: "-100%" }}
			animate={{ x: 0 }}
			exit={{ x: "-100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className="bg-slate-800 py-10 px-6 sm:px-20 gap-5 relative">
				<div className="flex flex-col sm:flex-row mb-10">
					<div className={`${containerStyle}`}>
						<h1 className={`${HeaderStyle} py-6`}>Government</h1>
						<p>
							The institution through which the state maintains order, provides public services, and enforces decisions. Governments can
							vary in structure and function, ranging from centralized to federal systems.
						</p>
					</div>
					<div className={`${containerStyle}`}>
						<img src="./lesson2_imgs/s2-img4.png" alt="" />
					</div>
				</div>
				<div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-5">
					<Button
						className={`w-full sm:w-1/6 h-14 bg-gray-300 hover:bg-gray-400 text-black font-semibold ${BackButtonStyle}`}
						onClick={() => setShowState(false)}
					>
						{"Back"}
					</Button>
					<Button
						className={`${BackButtonStyle} w-full sm:w-2/6 bg-gray-300 hover:bg-gray-400 text-black font-semibold`}
						onClick={() => setShowFormOfGovernment(true)}
					>
						Forms of Government
					</Button>
				</div>
			</Section>
			<AnimatePresence>{showFormOfGovernment && <FormsOfGovernment setShowState={setShowFormOfGovernment} />}</AnimatePresence>
		</motion.div>
	);
}

function FormsOfGovernment({ setShowState }: { setShowState: (state: boolean) => void }) {
	return (
		<motion.div
			initial={{ x: "-100%" }}
			animate={{ x: 0 }}
			exit={{ x: "-100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className="bg-slate-800 py-10 px-6 sm:px-20 gap-5 relative">
				<div className="flex flex-col gap-5">
					<h1 className={`${HeaderStyle} py-6`}>Forms of Government</h1>
					<p>
						<strong>Monarchy</strong>: Rule by a single sovereignty, which can be absolute or constitutional.
					</p>
					<p>
						<strong>Oligarchy</strong>: Rule by a small group of individuals or families.
					</p>
					<p>
						<strong>Democracy</strong>: Rule by the people, typically through elected representatives. Variation includes direct and
						representative democracy.
					</p>
				</div>
				<div className="w-full flex flex-col-reverse sm:flex-row justify-between mt-10 gap-5">
					<Button
						className={`w-full sm:w-1/6 h-14 bg-gray-300 hover:bg-gray-400 text-black font-semibold ${BackButtonStyle} place-self-start`}
						onClick={() => setShowState(false)}
					>
						{"Back"}
					</Button>
				</div>
			</Section>
		</motion.div>
	);
}

function Sovereignty({ setShowState }: { setShowState: (state: boolean) => void }) {
	const [powerOfState, setPowerOfState] = useState(false);

	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className="bg-[url(/lesson2_imgs/s2-bg-3.png)] py-10 px-6 sm:px-20 gap-5 relative">
				<div className="flex flex-col mb-10">
					<h1 className={`${HeaderStyle} py-6`}>Sovereignty</h1>
					<p>
						The supreme authority of the state to govern itself without external interference. This includes the power to make laws,
						enforce them, and maintain order within its territory.
					</p>
				</div>
				<div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-5">
					<Button
						className={`${BackButtonStyle} w-full sm:w-1/6 bg-gray-300 hover:bg-gray-400 text-black font-semibold`}
						onClick={() => setShowState(false)}
					>
						{"Back"}
					</Button>
					<Button
						className={`${BackButtonStyle} w-full sm:w-2/6 bg-gray-300 hover:bg-gray-400 text-black font-semibold`}
						onClick={() => setPowerOfState(true)}
					>
						{"Powers of Government"}
					</Button>
				</div>
			</Section>
			<AnimatePresence>{powerOfState && <PowerOfState setShowState={setPowerOfState} />}</AnimatePresence>
		</motion.div>
	);
}

function PowerOfState({ setShowState }: { setShowState: (state: boolean) => void }) {
	return (
		<motion.div
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 1 }}
			className="absolute top-0 left-0 right-0 bottom-0 w-full z-10"
		>
			<Section className="bg-slate-800 py-10 px-6 sm:px-20 gap-5 relative">
				<div className="flex flex-col gap-5">
					<h1 className={`${HeaderStyle} py-6`}>Inherent Power of State</h1>
					<p>
						<strong>Police Power</strong>: The capacity to regulate behavior and enforce order within its territory for the welfare of its
						citizens.
					</p>
					<p>
						<strong>Power of Eminent Domain</strong>: The right to expropriate private property for public use, with compensation,
						ensuring that private property is used for the greater public good.
					</p>
					<p>
						<strong>Power of Taxation</strong>: The authority to impose taxes on individuals and businesses to fund public services and
						infrastructure.
					</p>
				</div>
				<div className="w-full flex flex-col-reverse sm:flex-row justify-between gap-5">
					<Button
						className={`${BackButtonStyle} w-full sm:w-1/6 bg-gray-300 hover:bg-gray-400 text-black font-semibold mt-10 sm:mt-0 place-self-start`}
						onClick={() => setShowState(false)}
					>
						{"Back"}
					</Button>
				</div>
			</Section>
		</motion.div>
	);
}
