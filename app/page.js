import styles from "./styles/Landing.module.scss";
import ImagesContainer from "./components/ImagesContainer";
import Intro from "./components/Intro";
import HowTo from "./components/HowTo";
import WhyTo from "./components/WhyTo";
import Services from "./components/Services";
import HowAreWeDifferent from "./components/HowAreWeDifferent";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <ImagesContainer />
      <Intro />
      <HowTo />
      <WhyTo />
      <Services />
      <HowAreWeDifferent />
    </main>
  );
};

export default HomePage;