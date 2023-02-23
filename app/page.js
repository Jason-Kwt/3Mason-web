import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
