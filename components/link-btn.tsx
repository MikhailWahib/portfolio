interface Props {
	href: string
	title: string
	download?: boolean
	padding?: string
	className?: string
}

const LinkBtn = ({ href, title, download, padding, className }: Props) => {
	return (
		<a
			download={download || false}
			href={href}
			className={`block w-fit bg-background text-primary border-[1px] border-primary rounded text-base font-normal transition-all hover:shadow-linkBtnShadow hover:translate-x-1 hover:-translate-y-1 ${
				padding || "py-3 px-5"
			} ${className}`}
		>
			{title}
		</a>
	)
}

export default LinkBtn
