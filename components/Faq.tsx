import React, { useState } from 'react';
import { FAQS } from '../constants';

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-light-text/10 dark:border-dark-text/10">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="font-semibold text-lg">{question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-light-text/70 dark:text-dark-text/70">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FAQS[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const handleTabClick = (category: string) => {
    setActiveTab(category);
    setOpenIndex(0);
  }

  const activeFaqs = FAQS.find(f => f.category === activeTab)?.items || [];

  return (
    <section className="py-8 md:py-12 bg-light-secondary-bg dark:bg-dark-secondary-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-garamond text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8 border-b border-light-text/10 dark:border-dark-text/10">
            {FAQS.map(({ category }) => (
              <button
                key={category}
                onClick={() => handleTabClick(category)}
                className={`pb-3 text-lg font-semibold transition-colors duration-300 border-b-2 ${
                  activeTab === category
                    ? 'border-light-accent dark:border-dark-accent'
                    : 'border-transparent text-light-text/50 dark:text-dark-text/50 hover:text-light-text dark:hover:text-dark-text'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div>
            {activeFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;