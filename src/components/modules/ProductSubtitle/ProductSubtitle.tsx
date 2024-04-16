import { useLang } from '@/hooks/useLang'
import styles from './ProductSubtitle.module.scss'

export const ProductSubtitle = () => {
  const { lang, translations } = useLang()
  const descriptionSlicePosition = lang === 'ru' ? 5 : 2

  return (
    <div className={styles.product_subtitle__subtitle}>
      <div className={styles.product_subtitle__subtitle__rect} />
      <span>
        {translations[lang].main_page.hero_description.slice(
          0,
          descriptionSlicePosition
        )}
      </span>
      <br />
      <span>
        {translations[lang].main_page.hero_description.slice(
          descriptionSlicePosition
        )}
      </span>
    </div>
  )
}
