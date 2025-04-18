import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FrontPage() {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    if (role === 'customer') {
      navigate('/login');
    } else if (role === 'admin') {
      navigate('/admin_login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-200 max-w-4xl w-full mx-4">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">
          Welcome to <span className="text-blue-600">Finbanker</span>
        </h1>
        <p className="text-center text-gray-500 mb-12">
          Please select your role to continue
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Customer Box */}
          <div
            onClick={() => handleSelection('customer')}
            className="cursor-pointer bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-2xl p-8 w-72 text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-3">👤</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Customer</h2>
            <p className="text-sm text-gray-500">
              Login as a customer to view your accounts, balances, and transactions.
            </p>
          </div>

          {/* Admin Box */}
          <div
            onClick={() => handleSelection('admin')}
            className="cursor-pointer bg-gray-50 hover:bg-green-50 border border-gray-200 rounded-2xl p-8 w-72 text-center shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-3">🧑‍💼</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Admin</h2>
            <p className="text-sm text-gray-500">
              Login as an administrator to manage customers and their activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
