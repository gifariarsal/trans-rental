import React from 'react';

const Mission = ({ missionList }) => {
  return (
    <article id="mission" className="mb-4">
      <h4 className="text-primary font-semibold text-lg xl:text-2xl">
        Mission
      </h4>
      <p className="text-white leading-loose mb-2">
        With initial capital to develop and advance Indonesian tourism,
        especially in the Riau Islands, we provide a variety of solutions for
        the travel and tou needs you want.
      </p>
      <ul className="list-disc list-inside">
        {missionList.map((item, index) => (
          <li key={index} className="text-primary leading-loose">
            <span className='text-white'>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Mission;
