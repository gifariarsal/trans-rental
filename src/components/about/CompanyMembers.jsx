import React from 'react';

const CompanyMembers = ({ companyMembers }) => {
  return (
    <article id="company-members" className="mb-8 space-y-4">
      <h4 className="text-primary font-semibold text-lg xl:text-2xl">Company Members</h4>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {companyMembers.map(({ name, image, role }) => (
          <div key={name} className="flex flex-col justify-center items-center">
            <img
              src={image}
              alt={name}
              className="custom-shadow rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
            />
            <p className="text-white xl:text-xl font-semibold uppercase mt-4">{name}</p>
            <p className="text-primary xl:text-lg">{role}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default CompanyMembers;
