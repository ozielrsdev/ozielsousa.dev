import { motion } from 'framer-motion'

export const Contact = () => {
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
    <section className="overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="p-4 h-screen w-full  flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl mb-4" />
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
            🚧 Em breve 🚧
          </h1>
          <p className="text-white text-lg mb-8">Pagina em desenvolvimento!</p>
        </div>
      </motion.div>
    </section>
  )
}
