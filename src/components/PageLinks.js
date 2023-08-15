import { pageLinks } from '../data'
import Pagelink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return (
          <Pagelink key={link.id} link={link} itemClass={itemClass}></Pagelink>
        )
      })}
    </ul>
  )
}
export default PageLinks
