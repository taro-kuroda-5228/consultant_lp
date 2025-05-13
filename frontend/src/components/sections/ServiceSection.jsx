import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  {
    id: 1,
    title: 'ニーズに合致した多様な医師層へのアクセス',
    description: '現場の最前線で活躍する若手・中堅医師のリアルな知見から、トップクラスの専門医の深い洞察まで、貴社の多様なニーズに応じた医師をご紹介します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: '戦略的マッチング精度',
    description: '医師としての高度な専門知識と深い業界理解に基づき、貴社の戦略目標に真に貢献できる医師を厳選。単なるスキルマッチングを超えた、事業成果に繋がる連携を実現します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    id: 3,
    title: '効率性と時間価値の最大化',
    description: '探索・スクリーニング・初期折衝にかかる貴社側の時間とリソースを大幅に削減し、コア業務への集中を支援します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    id: 4,
    title: '絶対的な信頼性と機密保持',
    description: '医師としての職業倫理に基づき、最高水準の誠実性と厳格な守秘義務を遵守。機密性の高いプロジェクトも安心してお任せいただけます。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  }
];

const differentiators = [
  {
    id: 1,
    title: '現役医師によるダイレクトコンサルティング',
    description: '医師としての深い洞察力と共感力に基づき、貴社の潜在的ニーズまで汲み取り、医師側の視点も踏まえた最適なマッチングを実現します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: '厳格なスクリーニングと質の担保',
    description: '経歴や実績だけでなく、人物面やコミュニケーション能力、プロジェクトへの適合性まで含めた多角的な評価を実施します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    )
  },
  {
    id: 3,
    title: '柔軟なオーダーメイドアプローチ',
    description: '貴社ごとの固有の課題や目標に合わせた、完全にテーラーメイドされた探索戦略を策定・実行します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.869a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  },
  {
    id: 4,
    title: '長期的パートナーシップの志向',
    description: '単発の紹介に留まらず、貴社の継続的な成長とイノベーションを支援する長期的パートナーとしての関係構築を目指します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    )
  }
];

const FeatureItem = ({ item, index, type }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-xl ${
        type === 'benefit' ? 'bg-white shadow-soft' : 'border border-gray-200'
      }`}
    >
      <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${
        type === 'benefit' ? 'bg-primary-50 text-primary-600' : 'bg-secondary-50 text-secondary-600'
      }`}>
        {item.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
      <p className="text-dark-light">{item.description}</p>
    </motion.div>
  );
};

const ServiceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="service" className="section bg-light-dark relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-light to-light-dark"></div>
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">
            <span className="text-primary-600">Dr.サーチ・コンサルティング</span><br />
            医師と企業を戦略的に繋ぐ
          </h2>
          <p className="text-lg text-dark-light">
            クライアントの戦略的ニーズや具体的な要件を医師である私が直接ヒアリングし、
            最適な医師を特定・厳選してご紹介する、完全オーダーメイド型の専門コンサルティングサービスです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-secondary-100 rounded-full filter blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-soft-lg">
                <img
                  src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="企業と医師のミーティングの様子"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">サービス概要</h3>
            <p className="text-dark-light mb-6">
              クライアントの戦略的ニーズや具体的な要件（専門分野、サブスペシャルティ、研究実績、臨床経験年数、現場での役割、KOLとしての影響力、国際的活動経験、特定の術式や技術への習熟度など）を、医師である私が直接的かつ詳細にヒアリングします。
            </p>
            <p className="text-dark-light mb-6">
              その上で、私の持つ独自のネットワーク、専門学会や業界データベースの活用、リファレンスチェックを含む多角的な探索手法を駆使し、若手・中堅からトップクラスまで、最適な医師を特定・厳選し、クライアントにご紹介します。
            </p>
            <div className="flex space-x-4">
              <a href="#process" className="btn btn-primary">
                ご利用の流れを見る
              </a>
              <a href="#contact" className="btn btn-outline">
                相談する
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">提供価値・ベネフィット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureItem 
                key={benefit.id} 
                item={benefit} 
                index={index}
                type="benefit"
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">私たちの強み・差別化</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((diff, index) => (
              <FeatureItem 
                key={diff.id} 
                item={diff} 
                index={index}
                type="differentiator"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;