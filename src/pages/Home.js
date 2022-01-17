import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/bird-1.jpg';

function Home() {
    return (
        <>
            <Header />
            <Hero image={Image} title='Experience Nature' desc='Once in a Lifetime' />
        </>
    )
}

export default Home
