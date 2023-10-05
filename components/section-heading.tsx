const SectionHeading = ({ title }: { title: string }) => {
	return (
		<h2 className='relative w-fit mx-auto text-center text-2xl font-bold after:content-[""] after:absolute after:left-[10%] after:top-10 after:w-[80%] after:h-[4px] after:bg-primary after:rounded-xl'>
			{title}
		</h2>
	)
}

export default SectionHeading
