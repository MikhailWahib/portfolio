import { cn } from "@/lib/utils"

interface Props {
	href: string
	title: string
	padding?: string
	className?: string
	variant?: 'primary' | 'secondary'
}

const LinkBtn = ({ href, title, padding, className, variant = 'primary' }: Props) => {
	const baseStyles = "block w-fit rounded text-base font-normal transition-all"
	const paddingStyles = padding || "py-3 px-5"

	const variants = {
		primary: "bg-primary text-black hover:bg-primary/80 border-[1px] border-black",
		secondary: "bg-background text-primary border-[1px] border-primary hover:shadow-linkBtnShadow hover:translate-x-1 hover:-translate-y-1"
	}

	return (
		<a
			href={href}
			className={cn(
				baseStyles,
				paddingStyles,
				variants[variant],
				className
			)}
		>
			{title}
		</a>
	)
}

export default LinkBtn
