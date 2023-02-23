'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import bg01 from '../public/bg01.png';
import bg01LogoText01 from '../public/bg01-LogoText-01.png';
import bg01LogoText02 from '../public/bg01-LogoText-02.png';

const Hero = () => (
  <section
    id="home"
    className={`${styles.yPaddings} sm:pl-16 pl-6 h-screen snap-start snap-always`}
    style={{ backgroundImage: `url(${bg01.src})` }}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      classNam={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className=" h-screen flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading} pt-[300px ]`}
        >
          <Image src={bg01LogoText01} alt="" unoptimized />
        </motion.h1>
        <motion.div variants={textVariant(1.3)} className={styles.heroHeading}>
          <Image src={bg01LogoText02} alt="" unoptimized />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
