import { Suspense } from 'react'
import { LoadingDots } from '../../components/loading'
import { ProjectCards } from '../../components/project-cards'

import { motion } from 'framer-motion'
export function Projects() {
  const containerVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -window.innerWidth,
      transition: { ease: 'easeInOut' },
    },
  }
  return (
    <section className="overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col "
      >
        <h1 className="text-4xl ml-4 mt-4 p-3 font-bold">Meus Projetos</h1>
        <div className="w-full min-h-screen flex justify-center items-center">
          <Suspense fallback={<LoadingDots />}>
            <ProjectCards />
          </Suspense>
        </div>
      </motion.div>
    </section>
  )
}
