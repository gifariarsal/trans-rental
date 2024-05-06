import React from 'react';
import { styles } from '../../styles';
import { Accordion } from 'flowbite-react';
import SectionTitle from '../common/SectionTitle';
import { faqData } from '../../data';

const FrequentlyAQ = () => {
  return (
    <section id="faq" className={`${styles.sectionContainer}`}>
      <SectionTitle title="YOUR QUESTIONS ANSWERED" subtitle="FAQ" />
      <div className="w-[65%] mx-auto">
        <Accordion collapseAll>
          {faqData.map(({ id, question, answer }) => (
            <Accordion.Panel key={id}>
              <Accordion.Title className="text-primary bg-black hover:bg-blackShade transition duration-300 z[-1]">
                {question}
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-white">{answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FrequentlyAQ;
