import Layout from '../components/Layout'
import HomePageHero from '../components/HomePageHero'
import HomePageInfo from '../components/HomePageInfo'
import DateCallToAction from '../components/DateCallToAction';
import HomePageConsulate from '../components/HomePageConsulate';

export default() => (
  <Layout>
    <HomePageHero/>
    <HomePageInfo/>
    <DateCallToAction/>
    <HomePageConsulate/>
  </Layout>
)
