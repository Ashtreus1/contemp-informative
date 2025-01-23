import { LeftAnim, RightAnim } from "@/components/anim/Animation";

// default styles
export const textStyle = "w-full text-justify text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl";
export const titleStyle = "w-full text-center text-3xl lg:text-4xl font-bold";
export const containerStyle = "w-4/6 sm:w-1/2 flex flex-col gap-5";
export const imgStyle = "w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/3 max-h-[200px] sm:max-h-max rounded-2xl object-scale-down";
export const imgSmallStyle = "w-[30%] sm:w-[20%] xl:w-[20%] rounded-2xl object-scale-down";
export const center = "flex flex-col justify-center items-center";

export function Section({ children, className }: any) {
	return (
		<div
			className={`bg-[#181C14] sm:bg-[#181C14] overflow-hidden w-full py-16 sm:py-0 flex flex-col sm:flex-row justify-center items-center px-2 sm:px-20 gap-10 ${textStyle} ${className} `}
		>
			{children}
		</div>
	);
}

export function Img({ src, alt, cImgStyle, cContainerStyle }: any) {
	return (
		<div className={`${center} ${cContainerStyle}`}>
			<img src={src} alt={alt} className={`${center} ${imgStyle} ${cImgStyle}`} />
		</div>
	);
}

export function Temps({ title, article, src, tempNo }: any) {
	const imgStyle = "sm:w-4/5";
	return tempNo == 1 ? (
		<div className={`${center} flex sm:flex-row gap-10`}>
			<LeftAnim values="50" duration={1.2} className={containerStyle}>
				<img src={src} className={imgStyle} />
			</LeftAnim>
			<RightAnim values="100" duration={1.2} className={containerStyle}>
				<h1 className={`text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#7BEF00]`}>{title}</h1>
				<p className={`text-justify text-base sm:text-lg md:text-xl`}>{article}</p>
			</RightAnim>
		</div>
	) : (
		<div className={`${center} flex flex-col-reverse sm:flex-row gap-10`}>
			<LeftAnim values="100" duration={1.2} className={containerStyle}>
				<h1 className={`text-center text-lg sm:text-xl md:text-2xl font-semibold text-[#7BEF00]`}>{title}</h1>
				<p className={`text-justify text-base sm:text-lg md:text-xl`}>{article}</p>
			</LeftAnim>
			<RightAnim values="50" duration={1.2} className={containerStyle}>
				<img src={src} className={imgStyle} />
			</RightAnim>
		</div>
	);
}
