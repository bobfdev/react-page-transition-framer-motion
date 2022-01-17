import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/bird-2.jpg';

function About() {
    return (
        <div>
            <Header />
            <Hero image={Image} title='Beautiful Birds' desc='Rarely seen before' />
            About
        </div>
    )
}

export default About
