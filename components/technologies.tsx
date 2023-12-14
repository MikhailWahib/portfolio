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
import { FaVuejs } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { SiExpress } from "react-icons/si"
import PopupSpan from "@/framer-components/popup-span"

const skills = [
	{ name: "HTML", icon: <AiFillHtml5 />, color: "html" },
	{ name: "CSS", icon: <BiLogoCss3 />, color: "css" },
	{ name: "JavaScript", icon: <BiLogoJavascript />, color: "js" },
	{ name: "TypeScript", icon: <BiLogoTypescript />, color: "ts" },
	{ name: "React", icon: <BiLogoReact />, color: "react" },
	{ name: "NextJS", icon: <TbBrandNextjs />, color: "next" },
	{ name: "VueJS", icon: <FaVuejs />, color: "vue" },
	{ name: "TailwindCSS", icon: <BiLogoTailwindCss />, color: "tailwind" },
	{ name: "NodeJS", icon: <BiLogoNodejs />, color: "node" },
	{ name: "ExpressJs", icon: <SiExpress />, color: "express" },
	{ name: "MongoDB", icon: <BiLogoMongodb />, color: "mongodb" },
	{ name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "postgres" },
]

const Technologies = () => {
	return (
		<ul className='flex flex-wrap gap-x-4 text-6xl mt-5'>
			{skills.map((skill, i) => {
				return (
					<li
						key={i}
						className={` transition-transform hover:scale-105 hover:text-primary group`}
					>
						<PopupSpan
							delay={i * 0.1}
							className='inline-flex flex-col items-center'
						>
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
