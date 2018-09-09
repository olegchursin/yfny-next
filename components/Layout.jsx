import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'
import {BackTop} from 'antd';

const styles = {
  appContent: {
    flex: 1
  },
  appWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  }
}

export default({children}) => <div>
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <meta charSet='utf-8'/>
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:300,400,700"
      rel="stylesheet"/>
    <link rel='stylesheet' href='/_next/static/style.css'/>
  </Head>
  <div style={styles.appWrapper}>
    <Navigation/>
    <div style={styles.appContent}>{children}<BackTop/></div>
    <Footer/>
  </div>

</div>