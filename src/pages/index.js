import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ProjectsVideo from '../components/ProjectsVideo/ProjectsVideo';
import Timeline from '../components/TimeLine/TimeLine';
import Certificate from '../components/Certificate/Certificate';
import AboutMe from '../components/AboutMe/AboutMe';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <AboutMe/>
      <Timeline/>
      <Certificate/>
      <Projects />
      <ProjectsVideo/>
    </Layout>
  );
};

export default Home;
