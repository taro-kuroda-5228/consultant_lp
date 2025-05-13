import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-soft py-2'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-display font-bold text-primary-600">Dr.<span className="text-secondary-500">サーチ</span></span>
        </a>

        <nav className="hidden md:flex space-x-8">
          <a href="#problems" className="text-dark hover:text-primary-600 transition-colors">課題</a>
          <a href="#service" className="text-dark hover:text-primary-600 transition-colors">サービス</a>
          <a href="#process" className="text-dark hover:text-primary-600 transition-colors">ご利用の流れ</a>
          <a href="#why-choose" className="text-dark hover:text-primary-600 transition-colors">選ばれる理由</a>
          <a href="#pricing" className="text-dark hover:text-primary-600 transition-colors">料金</a>
          <a href="#faq" className="text-dark hover:text-primary-600 transition-colors">よくある質問</a>
        </nav>

        <a 
          href="#contact" 
          className="btn btn-primary"
        >
          無料相談を申し込む
        </a>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;