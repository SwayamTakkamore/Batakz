import React from 'react';

const Books: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed">"Breath is the bridge which connects life to the conosciouness. Which unites your thoughts. Whenever your mind becomes scattered, use your breath as the means to take hold of your mind again"</p>
          <p>-Thich Nhat Hanh</p>
          <br/>
          
        </div>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          <div className="text-center lg:w-2/3 w-full">
            <p className="mb-8 leading-relaxed">"Every action you take is a vote for the type of person you wish to become.No single instance will transform your beliefs, but as the notes build up, so does the evidence of your new identify"</p>
            <p className="mb-8 leading-relaxed">"-James clear, Atomic habits"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;