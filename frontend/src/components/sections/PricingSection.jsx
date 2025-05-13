import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="section bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">
            <span className="text-primary-600">料金体系</span>について
          </h2>
          <p className="text-lg text-dark-light">
            プロジェクトの複雑さや要件に応じた柔軟な料金体系をご用意しています。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-soft-lg overflow-hidden"
          >
            <div className="bg-primary-600 text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">プロジェクトベースの個別お見積り</h3>
              <p className="opacity-90">
                お客様の要件や求める医師の専門性に応じた最適なプランをご提案します
              </p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">初回相談は無料</h4>
                    <p className="text-dark-light">
                      お客様のニーズや求める医師像について詳細にヒアリングし、最適なアプローチ方法をご提案します。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">成功報酬型プラン</h4>
                    <p className="text-dark-light">
                      実際に医師とのマッチングが成立した場合に料金が発生する、リスクの少ないプランです。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">プロジェクト一括型プラン</h4>
                    <p className="text-dark-light">
                      プロジェクトの規模や求める医師の専門性、希少性に応じた一括料金です。複数の医師紹介が必要な場合に最適です。
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold mb-1">リテイナー契約</h4>
                    <p className="text-dark-light">
                      継続的に医師との連携が必要な企業向けの長期契約プランです。定期的なコンサルティングと医師紹介を含みます。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 border-t border-gray-200 pt-6">
                <p className="text-center text-dark-light mb-6">
                  ※ 具体的な料金はプロジェクトの特性や要件によって異なります。まずはお気軽にご相談ください。
                </p>
                
                <div className="text-center">
                  <motion.a
                    href="#contact"
                    className="btn btn-primary btn-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    無料相談を申し込む
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-gray-50 rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">透明性のある料金設定</h3>
                <p className="text-dark-light">
                  料金体系は常に透明性を保ち、事前に詳細な見積りをご提示します。追加料金が発生する場合も、必ず事前にご相談の上で進めますので、ご安心ください。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30 -mb-48 -ml-48"></div>
    </section>
  );
};

export default PricingSection;