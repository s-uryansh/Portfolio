import Nav from '@/components/Nav';
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import OpenSource from '@/components/OpenSource';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Experience />
      <Projects />
      <OpenSource />
      <Resume />
    </>
  );
}
