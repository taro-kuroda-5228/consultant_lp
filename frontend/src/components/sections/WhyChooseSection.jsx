import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    id: 1,
    metric: '10+',
    label: '年間の臨床経験',
  },
  {
    id: 2,
    metric: '50+',
    label: '企業コンサルティング実績',
  },
  {
    id: 3,
    metric: '200+',
    label: '医師ネットワーク',
  },
  {
    id: 4,
    metric: '100%',
    label: '守秘義務遵守率',
  }
];

const WhyChooseSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="why-choose" className="section bg-light relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="医師がデータを分析している様子" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent"></div>
            </div>
            
            <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-70"></div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="section-title mb-8">
              なぜ、<span className="text-primary-600">私のコンサルティング</span>が<br />
              選ばれるのか
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">現役医師による直接的な専門サービス</h3>
                  <p className="text-dark-light">
                    医師としての現場感覚と深い専門知識を活かして、貴社のニーズを医学的・臨床的視点から正確に理解し、最適な医師とのマッチングを実現します。
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">最高水準の誠実性と倫理感</h3>
                  <p className="text-dark-light">
                    医師として培った職業倫理と高い誠実性に基づき、クライアントと医師双方の最善の利益を追求。関連法規（医師法、個人情報保護法など）を完全に遵守し、機密情報を厳格に管理します。
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">幅広い医師ネットワーク</h3>
                  <p className="text-dark-light">
                    若手からベテランまで、幅広い年代・専門分野の医師とのネットワークを保有。KOLだけでなく、現場の最前線で活躍する医師へのアクセスも可能です。
                  </p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary inline-block">
              相談してみる
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 bg-white rounded-2xl shadow-soft p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-3">実績</h3>
            <p className="text-dark-light max-w-3xl mx-auto">
              医師としての臨床経験と企業コンサルティングの実績を活かし、最適な医師と企業のマッチングを実現します。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{item.metric}</div>
                <div className="text-dark-light">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30 -mt-48 -mr-48"></div>
    </section>
  );
};

export default WhyChooseSection;