import { HERO_CONTENT } from "../constants"
import portfolioPhoto from "../assets/developer.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
})

const Hero = () => {
    return (
        <div className="border-neutral-900 pb-4 lg:mb-36">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-10 text-6xl font-semibold tracking-tighter lg:mt-16 lg:text-7xl ">Priya Pritam Behera</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Java Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="rounded w-full lg:w-1/2 lg:p-1">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={portfolioPhoto} alt="Priya Pritam Behera" height={500} width={500} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero