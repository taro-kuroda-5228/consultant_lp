import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    id: 1,
    question: 'どのような専門分野・経験年数の医師を紹介可能ですか？',
    answer: '内科、外科、小児科、産婦人科、精神科、放射線科、病理学、麻酔科など主要な診療科はもちろん、それぞれのサブスペシャルティ領域まで幅広くカバーしています。経験年数も若手（5年目程度）から中堅、ベテラン、指導的立場の医師まで、貴社のニーズに合わせて最適な医師をご紹介可能です。特定の専門領域や希少な専門性についても、ご相談ください。'
  },
  {
    id: 2,
    question: 'KOLだけでなく、現場の若手・中堅医師の紹介も可能ですか？',
    answer: 'はい、可能です。医学界のKOL（キーオピニオンリーダー）だけでなく、日々の臨床現場で活躍する若手・中堅医師へのアクセスも当サービスの強みの一つです。特に製品開発の初期段階や実際のユーザビリティ評価など、現場視点が重要なプロジェクトでは、第一線で診療に従事する医師からの率直なフィードバックが非常に価値があります。'
  },
  {
    id: 3,
    question: '紹介までのおおよその期間はどれくらいですか？',
    answer: 'プロジェクトの複雑さや求める医師像の希少性により異なりますが、初回ヒアリングから候補者紹介まで通常2〜4週間程度です。緊急性の高い案件については、可能な限り迅速に対応いたしますので、ご相談ください。特殊な専門性や複数の条件を満たす医師を必要とする場合は、より時間を要する場合があります。'
  },
  {
    id: 4,
    question: '個人に依頼するメリットは何ですか？',
    answer: '現役医師である私が直接サービスを提供することには、以下のようなメリットがあります：1）医学的専門知識に基づいた正確なニーズ理解と医師選定、2）医師同士の共通言語による円滑なコミュニケーション、3）大手エージェンシーでは見落とされがちな現場のニュアンスや医師の人間性の把握、4）中間マージンのない合理的な料金体系、5）機密性の高い案件における高度な守秘義務の徹底。個人だからこそ提供できる、きめ細やかで専門性の高いサービスを体験いただけます。'
  },
  {
    id: 5,
    question: '機密情報の取り扱いはどのように行われますか？',
    answer: '医師としての職業倫理と守秘義務を最重視し、最高水準の機密保持対策を講じています。具体的には：1）クライアント情報と案件詳細は厳格に管理されたシステムで保護、2）秘密保持契約（NDA）の締結、3）情報共有は必要最小限の範囲に限定、4）医療情報・個人情報保護法の完全遵守、5）定期的なセキュリティ対策の見直しと強化を行っています。貴社の機密情報は医療情報と同レベルの厳格さで管理されますのでご安心ください。'
  },
  {
    id: 6,
    question: '医師への報酬はどのように決まりますか？',
    answer: '医師への報酬は、プロジェクトの内容、必要とされる専門性のレベル、拘束時間、市場相場などを総合的に考慮して、公正かつ適切に設定されます。報酬は事前に医師とクライアント双方に明示され、合意の上で決定されます。業界標準や相場感などの情報提供も行い、双方にとって納得のいく条件となるよう調整支援いたします。また、継続的な協力関係を念頭に置いた持続可能な報酬体系についてもアドバイスしています。'
  },
  {
    id: 7,
    question: '地方在住の医師も紹介可能ですか？',
    answer: 'はい、全国各地の医師とのネットワークを有しており、地方在住の医師も紹介可能です。特に地域特有の医療事情や患者層に関する知見が必要なプロジェクトでは、該当地域で活躍する医師の紹介が効果的です。また、リモートでの協力が可能な案件であれば、地理的制約を超えた最適なマッチングを実現します。特定の地域の医師を希望される場合は、ヒアリング時にお知らせください。'
  },
  {
    id: 8,
    question: '医師との契約形態はどのようなものがありますか？',
    answer: 'プロジェクトの性質や期間に応じて、様々な契約形態が可能です：1）単発のコンサルティング契約、2）アドバイザリー契約（定期的な助言・相談）、3）研究/開発プロジェクトへの参画契約、4）講演・セミナー登壇契約、5）製品評価・臨床試験関連の契約、6）継続的な顧問契約など。貴社のニーズと予算に合わせた最適な契約形態をご提案し、契約条件の調整もサポートいたします。法的観点からのアドバイスが必要な場合は、専門家との連携も可能です。'
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button 
        className="w-full py-6 flex justify-between items-start text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
        <span className={`flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-primary-50 text-primary-600 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-dark-light">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section bg-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-light"></div>
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">
            <span className="text-primary-600">よくある質問</span>
          </h2>
          <p className="text-lg text-dark-light">
            サービスについてよくいただくご質問にお答えします。
            その他ご不明点は、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-soft overflow-hidden"
        >
          <div className="p-1">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="mb-6 text-dark-light">他にご質問がありましたら、お気軽にお問い合わせください。</p>
          <a href="#contact" className="btn btn-primary">
            お問い合わせ
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30 -mb-48 -mr-48"></div>
    </section>
  );
};

export default FaqSection;