import InnerPageHero from '../components/InnerPageHero';
import ProgramInfo from '../components/ProgramInfo';
import Layout from '../components/Layout'

export default() => {
    return (
        <Layout>
            <InnerPageHero title={'Программа'}/>
            <ProgramInfo/>
        </Layout>
    )
}