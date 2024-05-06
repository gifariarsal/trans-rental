import React, { useState } from 'react';
import { styles } from '../../styles';
import SectionTitle from '../common/SectionTitle';
import { Modal } from 'flowbite-react';
import { companyMembers, missionList } from '../../data';
import AboutLanding from './AboutLanding';
import CompanyMembers from '../about/CompanyMembers';
import Vision from '../about/Vision';
import Mission from '../about/Mission';

const About = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="about" className={`${styles.sectionContainer}`}>
      <SectionTitle title="YOUR TRUSTED PARTNER" subtitle="ABOUT US" />
      <AboutLanding setOpenModal={setOpenModal} />
      <Modal
        dismissible
        show={openModal}
        size="4xl"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="custom-shadow bg-black">
          <h3 className="text-primary font-semibold text-xl lg:text-2xl">
            About Us
          </h3>
        </Modal.Header>
        <Modal.Body className="custom-shadow bg-black">
          <section className="space-y-6">
            <CompanyMembers companyMembers={companyMembers} />
            <Vision />
            <Mission missionList={missionList} />
          </section>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default About;
