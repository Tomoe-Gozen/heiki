import TheHeader from '../the-header'
import TheFooter from '../the-footer'

export default function Default({ children }) {
  return (
    <>
      <TheHeader />
      {children}
      <div className="mt--100 mt_md--80 mt_sm--80">
        <TheFooter />
      </div>
    </>
  )
}
