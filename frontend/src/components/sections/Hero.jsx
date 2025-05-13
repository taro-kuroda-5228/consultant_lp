import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-hero-gradient overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-dark">
              <span className="text-primary-600">最適な医師との連携</span>で<br />
              貴社のメディカル戦略を加速
            </h1>
            
            <p className="text-lg md:text-xl text-dark-light mb-8 max-w-xl">
              現役医師である私が、貴社の戦略的ニーズに合わせて、若手からトップクラスまで最適な医師を直接サーチし、ご紹介します。
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="#contact" 
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                無料相談を申し込む
              </motion.a>
              
              <motion.a 
                href="#service" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                サービス詳細を見る
              </motion.a>
            </div>
            
            <div className="mt-10 flex items-center space-x-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-soft">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm font-medium">現役医師が直接対応</span>
              </div>
              
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-soft">
                <span className="text-primary-600 mr-2">✓</span>
                <span className="text-sm font-medium">完全機密保持</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-secondary-100 rounded-full filter blur-3xl opacity-50"></div>
            
            <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="医師がノートパソコンで情報を確認している様子" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/10"></div>
              
              <motion.div 
                className="absolute -right-20 -bottom-20 w-64 h-64 bg-white bg-opacity-30 backdrop-blur-lg rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-grid-pattern opacity-10 z-0"></div>
    </section>
  );
};

export default Hero;