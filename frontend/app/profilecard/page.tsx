import Navbar from '@/components/navbar';
import React from 'react';

const profile: React.FC = () => {
    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center space-x-5">
                            <div className="h-14 w-14 bg-blue-200 rounded-full flex flex-shrink-0 justify-center items-center text-blue-500 text-2xl font-mono">JD</div>
                            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 className="leading-relaxed">John Doe</h2>
                                <p className="text-sm text-gray-500 font-normal leading-relaxed">Web Developer</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>Age: 25</p>
                                <p>Email: john.doe@example.com</p>
                                <p>Location: New York City</p>
                                <p>Interests: Web development, UI/UX design</p>
                            </div>
                            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <p>Contact</p>
                            </div>
                            <div className="py-4 space-y-4">
                                <p>Phone: +1 123 456 7890</p>
                                <p>LinkedIn: <a href="https://www.linkedin.com/in/" target="_blank" className="text-blue-500">linkedin.com/in/johndoe</a></p>
                                <p>GitHub: <a href="https://github.com/" target="_blank" className="text-blue-500">github.com/johndoe</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default profile;