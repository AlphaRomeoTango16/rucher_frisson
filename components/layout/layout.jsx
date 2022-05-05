import Header from '../header/Header'
import Footer from '../footer/Footer'
import propTypes from 'prop-types'
import MobileMenuButton from '../mobileMenu/MobileMenuButton'

Layout.propTypes = {
  desktopDevice: propTypes.bool.isRequired,
  mobileDevice: propTypes.bool.isRequired
}

export default function Layout({ children, desktopDevice, mobileDevice }) {
    return (
      <>
        <Header 
          desktopDevice={desktopDevice}
          mobileDevice={mobileDevice}
        />
        {mobileDevice &&
          <MobileMenuButton
          
          />
        }
            <main>{children}</main>
        <Footer
          mobileDevice={mobileDevice}
        />
      </>
    )
  }