import React from 'react'
import { NextSeo } from "next-seo"
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
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
            transition={{ type: "spring" }}
            className="text-center place-content-center"
        >
            {children}
        </motion.main>
    </div>
)

export default Layout