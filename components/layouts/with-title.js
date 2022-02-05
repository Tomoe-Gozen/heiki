import TheHeader from '../the-header'
import TheFooter from '../the-footer'

export default function WithTitle({ children, title }) {
  return (
    <>
      <TheHeader />
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">{title}</h5>
            </div>
          </div>
        </div>
      </div>
      {children}
      <TheFooter />
    </>
  )
}
