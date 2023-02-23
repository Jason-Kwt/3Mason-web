'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, ExploreCard } from '../components';
import { exploreNFTs } from '../constants';
import bg05LogoText from '../public/bg05-LogoText.png';

const Explore = () => {
  const [active, setActive] = useState('nft-2');

  return (
    <section
      id="pedigree"
      className={`${styles.paddings} bg-black  h-screen snap-start snap-always border-2 border-red-600`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col border-2 border-red-600`}
      >
        <TitleText title={<>Explore</>} textStyles="text-center" />
        <div className="nt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-1">
          {exploreNFTs.map((nft, index) => (
            <ExploreCard
              key={nft.id}
              {...nft}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
