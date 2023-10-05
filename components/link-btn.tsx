interface Props {
	href: string
	title: string
	className?: string
}

const LinkBtn = ({ href, title, className }: Props) => {
	return (
		<a
			href={href}
			className={`block w-fit bg-background text-primary border-[1px] border-primary py-3 px-5 rounded text-base font-normal transition-all hover:shadow-linkBtnShadow hover:translate-x-1 hover:-translate-y-1 ${className}`}
		>
			{title}
		</a>
	)
}

export default LinkBtn
