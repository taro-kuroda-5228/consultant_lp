import React, { useState } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });
  
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // In a real implementation, you would send the data to a server
    // For demonstration, we'll simulate an API call with a timeout
    setTimeout(() => {
      // This would typically be where you'd make an API call
      // to send the email to samurai.kuroda5228@gmail.com
      // and send a confirmation to the user's email
      console.log("Email would be sent to: samurai.kuroda5228@gmail.com");
      console.log("Confirmation would be sent to:", formData.email);
      console.log("Form data:", formData);
      
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false
      });
      
      // Clear the form
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        inquiry: '',
        message: '',
        privacy: false
      });
      
      // After 5 seconds, reset the submission status
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: false
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft-lg p-8">
      <h3 className="text-2xl font-bold mb-6">お問い合わせ</h3>
      
      {formStatus.submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
          <p className="font-medium">お問い合わせありがとうございます！</p>
          <p>内容を確認次第、折り返しご連絡いたします。また、ご入力いただいたメールアドレスに確認メールをお送りしました。</p>
        </div>
      ) : formStatus.error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
          <p className="font-medium">エラーが発生しました</p>
          <p>お手数ですが、時間をおいて再度お試しいただくか、直接メールでお問い合わせください。</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              会社名 <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              お名前 <span className="text-accent-red">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              メールアドレス <span className="text-accent-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
          </div>
          
          <div>
            <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
              お問い合わせ内容 <span className="text-accent-red">*</span>
            </label>
            <select
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              required
            >
              <option value="">お問い合わせの種類を選択してください</option>
              <option value="search">医師探しについて</option>
              <option value="service">サービス内容について</option>
              <option value="price">料金について</option>
              <option value="other">その他</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              メッセージ <span className="text-accent-red">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder="お問い合わせ内容を詳しくお書きください。求める医師の専門性やプロジェクトの概要など、できるだけ具体的にお伝えいただくと、より適切なご提案が可能です。"
              required
            ></textarea>
          </div>
          
          <div className="flex items-start">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={formData.privacy}
              onChange={handleChange}
              className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1"
              required
            />
            <label htmlFor="privacy" className="ml-3 text-sm text-gray-700">
              <span className="text-accent-red">*</span> プライバシーポリシーに同意します
            </label>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full btn btn-primary btn-lg"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? '送信中...' : '送信する'}
            </button>
          </div>
        </div>
      </form>
      
      <p className="text-sm text-gray-600 mt-6">
        <span className="text-accent-red">*</span> は必須項目です。送信いただいた内容については、通常24時間以内にご返信いたします。
      </p>
      
      <div className="text-xs text-gray-500 mt-4">
        <p>※フォーム送信により、samurai.kuroda5228@gmail.com 宛にお問い合わせ内容が送信されます。</p>
        <p>※ご入力いただいたメールアドレス宛に確認メールをお送りします。</p>
      </div>
    </div>
  );
}