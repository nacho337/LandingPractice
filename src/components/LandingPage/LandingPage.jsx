import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Body from '../Body/Body';
import Layout from '../Layout/Layout';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Layout>
        <section id="whyus?">
          <Hero />
        </section>
        <Body />
      </Layout>
      <Footer />
    </div>
  );
}

export default LandingPage;