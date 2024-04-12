'use client'
import { $searchModal } from '@/context/modals'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useUnit } from 'effector-react'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import { Header } from '../modules/Header/Header'
import { SearchModal } from '../modules/Header/SearchModal/SearchModal'
import { MobileNavbar } from '../modules/MobileNavbar/MobileNavbar'
import { handleCloseSearchModal } from '@/lib/utils/common'
import { Footer } from '../modules/Footer/Footer'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const searchModal = useUnit($searchModal)
  const isMedia800 = useMediaQuery(800)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      {searchModal && (
        <motion.div
          initial={{ opacity: 0, zIndex: 102 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SearchModal />
        </motion.div>
      )}
      <div
        onClick={handleCloseSearchModal}
        className={`header__search-overlay ${searchModal ? ' overlay-active' : ''}`}
      />
      <Footer />
    </>
  )
}
