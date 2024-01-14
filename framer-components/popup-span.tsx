"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const PopupSpan = ({ children, delay = 0, ...props }: any) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.span
			ref={ref}
			{...props}
			initial={{ translateY: 20, opacity: 0 }}
			animate={{ translateY: isInView ? 0 : 20, opacity: isInView ? 1 : 0 }}
			transition={{ duration: 0.2, delay: delay }}
		>
			{children}
		</motion.span>
	)
}

export default PopupSpan
