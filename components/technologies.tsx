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
import { TbBrandCpp } from "react-icons/tb"
import { FaVuejs, FaPython } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import {
	SiExpress,
	SiRubyonrails,
	SiFlask,
	SiJest,
	SiRedis,
} from "react-icons/si"
import { DiRuby } from "react-icons/di"
import PopupSpan from "@/framer-components/popup-span"

const skills = [
	{ name: "C++", icon: <TbBrandCpp /> },
	{ name: "JavaScript", icon: <BiLogoJavascript /> },
	{ name: "TypeScript", icon: <BiLogoTypescript /> },
	{ name: "Python", icon: <FaPython /> },
	{ name: "Ruby", icon: <DiRuby /> },
	{ name: "HTML", icon: <AiFillHtml5 /> },
	{ name: "CSS", icon: <BiLogoCss3 /> },
	{ name: "React", icon: <BiLogoReact /> },
	{ name: "NextJS", icon: <TbBrandNextjs /> },
	{ name: "VueJS", icon: <FaVuejs /> },
	{ name: "TailwindCSS", icon: <BiLogoTailwindCss /> },
	{ name: "NodeJS", icon: <BiLogoNodejs /> },
	{ name: "ExpressJs", icon: <SiExpress /> },
	{ name: "Ruby on Rails", icon: <SiRubyonrails /> },
	{ name: "Flask", icon: <SiFlask /> },
	{ name: "MongoDB", icon: <BiLogoMongodb /> },
	{ name: "PostgreSQL", icon: <BiLogoPostgresql /> },
	{ name: "Redis", icon: <SiRedis /> },
	{ name: "Jest", icon: <SiJest /> },
]

const Technologies = () => {
	return (
		<ul className='flex flex-wrap gap-x-4 gap-y-1 text-6xl mt-5'>
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
