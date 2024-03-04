import React from 'react';

export default function Articles(): JSX.Element {
  return (
<section className="text-gray-600 body-font  bg-gray-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Why is Mental health so important?</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Mindful Leadership</h2>
          <p className="leading-relaxed text-base">Research consistently shows that organizations led by mindful leaders witness improved employee well-being...</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Intersection of Technology and Mental Health</h2>
          <p className="leading-relaxed text-base">The ethical dimensions of utilizing technology for mental health purposes are crucial to address...</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Beyond the Surface</h2>
          <p className="leading-relaxed text-base">Visual arts, such as painting and drawing, provide a canvas for self-discovery and concluded by the scientist that...</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Cultivating Emotional Intelligence</h2>
          <p className="leading-relaxed text-base">Cultivating emotional intelligence is a dynamic and ongoing process and  This section provides practical  strategies for nurturing EI in everyday life,...</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}