import React from 'react';

const Book1: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Atomic habits</h1>
          <p className="mb-8 leading-relaxed">"Every action you take is a vote for the type of person you wish to become. No single instance will transform your beliefs. But as the votes build up, so does the evidence of your new identity."</p>
          <p>-James clear</p>
          <div className="flex justify-center">
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
      </div>
    </section>
  );
};

export default Book1;
