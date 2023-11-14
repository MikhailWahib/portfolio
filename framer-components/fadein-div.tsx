"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const FadeinDiv = ({ children, ...props }: any) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.div
			ref={ref}
			{...props}
			initial={{ opacity: 0 }}
			animate={{ opacity: isInView ? 1 : 0 }}
			transition={{ duration: 1, ease: "anticipate" }}
		>
			{children}
		</motion.div>
	)
}

export default FadeinDiv
