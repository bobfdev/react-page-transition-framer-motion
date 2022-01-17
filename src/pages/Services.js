import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/bird-3.jpg';
import { motion } from 'framer-motion';
import { animationThree } from '../animations';

function Services() {
    return (
        <motion.div
            initial='out'
            animate='end'
            exit='out'
            variants={animationThree}
        >
            <Header />
            <Hero image={Image} title='Experience Nature' desc='Once in a Lifetime'/>
            Services
        </motion.div>
    )
}

export default Services
