import Header from '../partials/Header'
import Hero from '../partials/Hero'
import AllChallenges from '../partials/AllChallenges'
import Cta from '../partials/Cta'
import Footer from '../partials/Footer'

function Home() {
    return (
      <>
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="grow">
          {/*  Page sections */}
          <Hero />
          {/* <Clients /> */}
          <AllChallenges />
          {/* <Services /> */}
         
          <Cta path="https://github.com/aureliengremy" btnText="Github" title="Voir mon Github"/>
        </main>
  
        {/*  Site footer */}
        <Footer />
      </>
    );
  }
  
  export default Home;