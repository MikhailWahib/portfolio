import { AiFillHtml5 } from 'react-icons/ai'
import {
	BiLogoCss3,
	BiLogoTailwindCss,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoTypescript,
	BiLogoNodejs,
	BiLogoPostgresql,
	BiLogoMongodb,
} from 'react-icons/bi'
import { FaVuejs, FaPython } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import {
	SiExpress,
	SiRubyonrails,
	SiFlask,
	SiFastapi,
	SiRedis,
} from 'react-icons/si'
import { FaGolang } from 'react-icons/fa6'
import { FaRust } from 'react-icons/fa'

const skills = [
	{ name: 'JavaScript', icon: <BiLogoJavascript /> },
	{ name: 'TypeScript', icon: <BiLogoTypescript /> },
	{ name: 'Go', icon: <FaGolang /> },
	{ name: 'Rust', icon: <FaRust /> },
	{ name: 'Python', icon: <FaPython /> },
	{ name: 'NodeJS', icon: <BiLogoNodejs /> },
	{ name: 'ExpressJs', icon: <SiExpress /> },
	{ name: 'Ruby on Rails', icon: <SiRubyonrails /> },
	{ name: 'PostgreSQL', icon: <BiLogoPostgresql /> },
	{ name: 'MongoDB', icon: <BiLogoMongodb /> },
	{ name: 'Redis', icon: <SiRedis /> },
	{ name: 'HTML', icon: <AiFillHtml5 /> },
	{ name: 'CSS', icon: <BiLogoCss3 /> },
	{ name: 'React', icon: <BiLogoReact /> },
	{ name: 'NextJS', icon: <TbBrandNextjs /> },
	{ name: 'VueJS', icon: <FaVuejs /> },
	{ name: 'TailwindCSS', icon: <BiLogoTailwindCss /> },
]

const Technologies = () => {
	return (
		<ul className='flex flex-wrap gap-x-4 gap-y-1 text-6xl mt-5'>
			{skills.map((skill, i) => {
				return (
					<li
						key={i}
						className='transition-all duration-300 hover:scale-105 hover:text-primary group animate-fade-in'
						style={{ animationDelay: `${i * 100}ms` }}
					>
						<div className='inline-flex flex-col items-center'>
							{skill.icon}
							<p className='text-primary text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								{skill.name}
							</p>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default Technologies
