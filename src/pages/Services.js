import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/bird-3.jpg';

function Services() {
    return (
        <div>
            <Header />
            <Hero image={Image} title='Experience Nature' desc='Once in a Lifetime'/>
            Services
        </div>
    )
}

export default Services
