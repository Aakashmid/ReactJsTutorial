import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='w-full relative h-[100dvh]  mx-auto '>
      <div className={`${styles.paddingX}  absolute inset-0 top-[7.5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-40 sm:h-80 violet-gradient"></div>
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm  <span className="text-[#915eff]"> Aakash</span></h1>
          <p className={`${styles.heroSubText}`}>I develop 3D visuals , user interfaces and web applications</p>
        </div>
      </div>

      <ComputersCanvas/>
    </section>
  )
}

export default Hero;