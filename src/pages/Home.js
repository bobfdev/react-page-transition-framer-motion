import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/bird-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

function Home() {
    return (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            variants={animationOne}
            transition={transition}
        >
            <Header />
            <Hero image={Image} title='Experience Nature' desc='Once in a Lifetime' />
        </motion.div>
    )
}

export default Home
