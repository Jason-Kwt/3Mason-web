'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText } from '../components';

import { staggerContainer } from '../utils/motion';

const About = () => (
  <section
    id="about"
    className={`${styles.yPaddings} bg-black sm:pl-16 pl-6 h-screen snap-start snap-always `}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex flex-col`}
    >
      <div className=" h-screen flex justify-center items-center flex-col relative z-10">
        <TitleText title={123} textStyles="text-center" />
      </div>
    </motion.div>
  </section>
);

export default About;
