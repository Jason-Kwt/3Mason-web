'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

import styles from '../styles';
import logo from '../public/logo.png';

const Navbar = () => {
  const navigation = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PEDIGREE', href: '#pedigree' },
    { name: 'BIBLE', href: '#bible' },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 absolute w-full bg-transparent`}
    >
      <div className="absolute w-[50%] inset-0" />

      {/* Navbar Logo section */}
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between  gap-8`}
      >
        <Link href="#home">
          <Image
            src={logo}
            alt="logo"
            className="w-[110px] h-[74] object-contain"
          />
        </Link>

        {/* burger Icon section */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navbar Items section */}
        <div className="hidden lg:flex lg:gap-x-24 lg:flex-1 lg:justify-end">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* mobile Navbar section */}
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Link href="#home" className="-m-1.5 p-1.5">
              <Image src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/*  Close menu */}
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root text-center">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.nav>
  );
};

export default Navbar;
