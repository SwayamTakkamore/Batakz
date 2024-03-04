// "use client";
// import React, { useState } from 'react';


// export const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (username == 'admin' && password == 'password') {
//             // document.getElementById("output").innerHTML = "Login Successful";
//             window.location.href = "/profile";

//         } else {
//             document.getElementById("output").innerHTML = "Login failed";
//         }
//     };

//     return (
//         <div>
//             <section className="text-gray-600 body-font flex">
//                 <div className="container px-5 py-24 mx-auto flex align-middle absolute">
//                     <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
//                         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="relative mb-4">
//                                 <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
//                                 <input type="text" value={username} onChange={handleUsernameChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                             </div>
//                             <div className="relative mb-4">
//                                 <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
//                                 <input type="password" value={password} onChange={handlePasswordChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                             </div>
//                             <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//                         </form>
//                         <p className="text-xs text-gray-500 mt-3">Login To </p>
//                     </div>
//                 </div>
//                 <h1 className='text-center' id='output'></h1>
//             </section>
//         </div>
//     );
// };

// export default Login;





"use client";
import React, { useState } from 'react';

interface LoginProps {}

interface FormState {
    username: string;
    password: string;
}

export const Login: React.FC<LoginProps> = () => {
    const [formState, setFormState] = useState<FormState>({
        username: '',
        password: ''
    });

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            username: event.target.value
        });
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            password: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formState.username === 'admin' && formState.password === 'password') {
            // document.getElementById("output")?.innerHTML = "Login Successful";
            window.location.href = "/profilecard";

        } //else {
        //     document.getElementById("output")?.innerHTML = "Login failed";
        // }
    };

    return (
        <div>
            <section className="text-gray-600 body-font flex bg-gray-100">
                <div className="container px-5 py-24 mx-auto flex align-middle absolute">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
                                <input type="text" value={formState.username} onChange={handleUsernameChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input type="password" value={formState.password} onChange={handlePasswordChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3" id='output'></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;