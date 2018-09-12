import InnerPageHero from '../components/InnerPageHero';
import ContactPageContent from '../components/ContactPageContent';
import Layout from '../components/Layout'

export default() => {
    return (
        <Layout>
            <InnerPageHero title={'Контакты'}/>
            <ContactPageContent/>
        </Layout>
    )
}
