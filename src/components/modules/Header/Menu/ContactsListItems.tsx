import Link from 'next/link'
import { useLang } from '@/hooks/useLang'

export const ContactsListItems = () => {
  const { lang, translations } = useLang()

  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+375 29 359 3485'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +375 29 359 3485
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='yanskv35@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link
          href='https://t.me/YanSkvoroda'
          className='nav-menu__accordion__item__link'
        >
          {translations[lang].main_menu.tg}
        </Link>
      </li>
      <li className='nav-menu__accordion__item'>
        <Link href='https://vk.com' className='nav-menu__accordion__item__link'>
          {translations[lang].main_menu.vk}
        </Link>
      </li>
    </>
  )
}
