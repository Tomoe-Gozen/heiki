import TheHeader from '../the-header'
import TheFooter from '../the-footer'

export default function Default({ children }) {
  return (
    <>
      <TheHeader />
      {children}
      <TheFooter />
    </>
  )
}
