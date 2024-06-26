import React, { useState } from 'react';
import { styles } from '../../styles';
import SectionTitle from '../common/SectionTitle';
import { Modal } from 'flowbite-react';
import { companyMembers, missionList } from '../../data';
import CompanyMembers from '../about/CompanyMembers';
import Vision from '../about/Vision';
import Mission from '../about/Mission';
import AboutLanding from '../about/AboutLanding';

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
          <p className="text-primary font-semibold text-xl lg:text-2xl xl:text-3xl">
            About Us
          </p>
        </Modal.Header>
        <Modal.Body className="custom-shadow bg-black">
          <section className="space-y-6">
            <CompanyMembers companyMembers={companyMembers} />
            <Vision />
            <Mission missionList={missionList} />
          </section>
          <footer className="flex justify-end items-center mt-10">
            <button
              onClick={() => setOpenModal(false)}
              className="text-primary"
            >
              Close
            </button>
          </footer>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default About;
