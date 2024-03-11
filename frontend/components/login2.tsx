// frontend/pages/login.tsx
'use state';
'use client';    
import { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Store token in local storage
      // Redirect to profile page on successful login
      window.location.href = '/profile';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

return (
    <div>
        <section className="text-gray-600 body-font flex bg-gray-100">
            <div className="container px-5 py-24 mx-auto flex align-middle absolute">
                <div className="w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mt-10 items-center">
                    <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="username" className="leading-7 text-sm text-gray-600">Username</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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