'use client'
import { Logo } from '@/components/elements/Logo/Logo'
import { openMenu, openSearchModal } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { addOverflowHiddenToBody } from '@/lib/utils/common'
import Link from 'next/link'
import CartPopup from './CartPopup/CartPopup'
import { Menu } from './Menu/Menu'

export const Header = () => {
  const { lang, translations } = useLang()

  const handelOpenMenu = () => {
    openMenu()
    addOverflowHiddenToBody()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHiddenToBody('0')
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button onClick={handelOpenMenu} className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              onClick={handleOpenSearchModal}
              className='btn-reset header__links__item__btn header__links__item__btn--search'
            />
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--favorites'
              href='/favorites'
            ></Link>
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--compare'
              href='/comparison'
            ></Link>
          </li>
          <li className='header__links__item'>
            <CartPopup />
          </li>
          <li className='header__links__item header__links__item--profile'>
            <Link
              className='header__links__item__btn header__links__item__btn--profile'
              href='/profile'
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
