import { AiFillHtml5 } from "react-icons/ai"
import {
	BiLogoCss3,
	BiLogoTailwindCss,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoTypescript,
	BiLogoNodejs,
	BiLogoPostgresql,
	BiLogoMongodb,
} from "react-icons/bi"
import { TbBrandNextjs } from "react-icons/tb"
import { SiExpress } from "react-icons/si"
import PopupSpan from "@/framer-components/popup-span"

const skills = [
	{ name: "HTML", icon: <AiFillHtml5 />, color: "#E34F26" },
	{ name: "CSS", icon: <BiLogoCss3 />, color: "#1572B6" },
	{ name: "JavaScript", icon: <BiLogoJavascript />, color: "#F7DF1E" },
	{ name: "TypeScript", icon: <BiLogoTypescript />, color: "#007ACC" },
	{ name: "React", icon: <BiLogoReact />, color: "#61DAFB" },
	{ name: "NextJS", icon: <TbBrandNextjs />, color: "#000000" },
	{ name: "TailwindCSS", icon: <BiLogoTailwindCss />, color: "#06B6D4" },
	{ name: "NodeJS", icon: <BiLogoNodejs />, color: "#339933" },
	{ name: "ExpressJs", icon: <SiExpress />, color: "#000000" },
	{ name: "MongoDB", icon: <BiLogoMongodb />, color: "#47A248" },
	{ name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#336791" },
]

const Technologies = () => {
	return (
		<ul className='flex flex-wrap gap-x-4 text-6xl mt-5'>
			{skills.map((skill, i) => {
				return (
					<li
						key={i}
						className={`flex flex-col items-center transition-transform hover:scale-105 hover:text-primary group`}
					>
						<PopupSpan delay={i * 0.1}>
							{skill.icon}
							<p className='text-primary text-xs opacity-0 group-hover:opacity-100'>
								{skill.name}
							</p>
						</PopupSpan>
					</li>
				)
			})}
		</ul>
	)
}

export default Technologies
