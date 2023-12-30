import React from 'react'
import { NextSeo } from "next-seo"
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: "-10vw" },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0 },
}

const Layout = ({ children, title, description }) => (
    <div>
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "tween" }}
            className="text-center place-content-center"
        >
            {children}
        </motion.main>
    </div>
)

export default Layout