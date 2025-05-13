import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-display font-bold text-white">Dr.<span className="text-secondary-400">サーチ</span></span>
            </a>
            <p className="text-gray-400 mb-4 max-w-md">
              医師である私が、貴社の戦略的ニーズに合わせて、若手からトップクラスまで最適な医師を直接サーチし、ご紹介する専門コンサルティングサービスです。
            </p>
            <p className="text-gray-400">
              医師としての職業倫理に基づき、守秘義務を徹底します。
              個人情報保護法、職業安定法、医療法、医師法等の関連法規を完全に遵守します。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li><a href="#service" className="text-gray-400 hover:text-white transition-colors">サービス概要</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white transition-colors">ご利用の流れ</a></li>
              <li><a href="#why-choose" className="text-gray-400 hover:text-white transition-colors">選ばれる理由</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">料金体系</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせフォーム</a></li>
              <li><a href="mailto:info@drsearch-consulting.jp" className="text-gray-400 hover:text-white transition-colors">info@drsearch-consulting.jp</a></li>
              <li><a href="tel:+81312345678" className="text-gray-400 hover:text-white transition-colors">03-1234-5678</a></li>
              <li><span className="text-gray-400">受付時間: 平日 9:00-18:00</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Dr.サーチ・コンサルティング All Rights Reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-900 rounded-full filter blur-3xl opacity-10"></div>
    </footer>
  );
};

export default Footer;