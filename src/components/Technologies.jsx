import { RiReactjsLine } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { SiOracle } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { motion } from "framer-motion"

const sineWaveMotion = (duration, delay) => ({
    initial: { y: 0 },
    animate: {
        y: [0, 10, 5, -10, -5, 0],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: delay,
        },
    },
})

const Technologies = () => {
    return (
        <div className=" border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">

                {/* 1 */}
                <motion.div
                    variants={sineWaveMotion(2.5, 0)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </motion.div>

                {/* 2 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 0.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <DiJava className="text-7xl text-red-600"></DiJava>
                </motion.div>

                {/* 3 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 0.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <SiSpring className="text-7xl text-green-500"></SiSpring>
                </motion.div>

                {/* 4 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 0.6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <SiSpringboot className="text-7xl text-green-400"></SiSpringboot>
                </motion.div>

                {/* 5 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 0.8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <SiMongodb className="text-7xl text-green-600"></SiMongodb>
                </motion.div>

                {/* 6 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 1)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <DiMysql className="text-7xl text-blue-500"></DiMysql>
                </motion.div>

                {/* 7 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 1.2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <SiOracle className="text-7xl text-red-700"></SiOracle>
                </motion.div>

                {/* 8 */}

                <motion.div
                    variants={sineWaveMotion(2.5, 1.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 dark:border-white p-4">
                    <DiGit className="text-7xl text-orange-600"></DiGit>
                </motion.div>

            </motion.div >
        </div>
    )
}

export default Technologies