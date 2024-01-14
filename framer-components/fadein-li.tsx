"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const FadeinLi = ({ children, ...props }: any) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.li
			ref={ref}
			{...props}
			initial={{ opacity: 0 }}
			animate={{ opacity: isInView ? 1 : 0 }}
			transition={{ duration: 1, ease: "anticipate" }}
		>
			{children}
		</motion.li>
	)
}

export default FadeinLi
