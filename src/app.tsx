import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home } from './pages/Home/home'
import { Projects } from './pages/Projects/projects'
import { Contact } from './pages/Contact/contact'
import { ErrorPage } from './components/error404'
import { AnimatePresence } from 'framer-motion'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export const App = () => {
  const location = useLocation()
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </QueryClientProvider>
    </>
  )
}
