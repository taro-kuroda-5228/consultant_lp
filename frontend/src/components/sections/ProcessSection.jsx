import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const processSteps = [
  {
    id: 1,
    title: '戦略的ニーズヒアリング',
    description: 'お客様の事業戦略や具体的なプロジェクト内容、求める医師像について詳細にヒアリングします。単なる条件だけでなく、潜在的なニーズまで引き出します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'リサーチ・サーチ戦略策定',
    description: 'ヒアリング内容に基づき、最適な医師を見つけるための探索戦略を策定。独自のネットワーク、専門学会や業界データベースなど、複数の手法を組み合わせます。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    )
  },
  {
    id: 3,
    title: '候補医師のリストアップ',
    description: '条件に合致する可能性のある医師を広範囲にリストアップ。公開情報だけでなく、業界内の評判や専門性の深さなども考慮します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    )
  },
  {
    id: 4,
    title: '厳格なスクリーニング・インタビュー',
    description: 'リストアップした医師に対し、私自身が直接コンタクトし、スクリーニングインタビューを実施。専門性はもちろん、人柄やコミュニケーション能力、プロジェクトへの適合性を評価します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'クライアントへの候補医師紹介・推薦',
    description: '厳選した候補医師について、詳細なプロフィールと推薦理由を含むレポートを作成し、クライアントに提出します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    )
  },
  {
    id: 6,
    title: '面談設定・同席サポート',
    description: 'クライアントと候補医師の面談をアレンジし、希望に応じて同席します。医学専門用語の通訳や、円滑なコミュニケーションをサポートします。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>
    )
  },
  {
    id: 7,
    title: '契約条件調整支援・締結',
    description: '両者の合意形成をサポートし、適切な契約条件の調整を支援します。業界標準や相場感などの情報提供も行います。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'オンボーディングサポート・フォローアップ',
    description: '契約後も、医師とクライアントの円滑な協働をサポート。定期的なフォローアップを行い、長期的な関係構築を支援します。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    )
  }
];

const ProcessStep = ({ step, index, totalSteps }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isLastStep = index === totalSteps - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 z-10">
            {step.icon}
          </div>
          {!isLastStep && (
            <div className="w-px h-full bg-gray-300 -mt-2"></div>
          )}
        </div>
        <div className="ml-6 mb-12">
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-dark-light">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-light-dark to-white"></div>
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">
            <span className="text-primary-600">ご利用の流れ</span><br />
            徹底したプロセスで最適なマッチングを実現
          </h2>
          <p className="text-lg text-dark-light">
            医師である私が、ニーズのヒアリングから候補医師の厳選、マッチング後のフォローまで一貫してサポートします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-0">
            {processSteps.slice(0, 4).map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                totalSteps={4}
              />
            ))}
          </div>
          <div className="space-y-0">
            {processSteps.slice(4).map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                totalSteps={4}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-3xl mx-auto bg-primary-50 rounded-xl p-8 border border-primary-100"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary-100 p-3 rounded-full text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">プロジェクト期間について</h3>
              <p className="text-dark-light">
                案件の複雑さや求める医師像の希少性により異なりますが、初回ヒアリングから候補者紹介まで通常2〜4週間程度です。
                緊急性の高い案件については、可能な限り迅速に対応いたしますので、ご相談ください。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full filter blur-3xl opacity-30 -mb-48 -mr-48"></div>
    </section>
  );
};

export default ProcessSection;