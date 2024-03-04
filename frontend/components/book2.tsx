import React from 'react';

const book2: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The miracle of mindfull ness
          </h1>
          <p className="mb-8 leading-relaxed">"Breath is the bridge which connects life to consciousness, which unites your body to your thoughts.Whenever your mind becomes scattered, use your breath as the means to take hold of your mind again"</p>
          <p>- Thich Nhat Hanh</p>
    
        </div>
      </div>
    </section>
  );
};

export default book2;
