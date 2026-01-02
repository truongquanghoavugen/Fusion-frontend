import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background mờ phía sau */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-[850px] aspect-[16/9] flex bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500">
        
        {/* Cột trái - Form */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center">
          <h1 className="text-[#0c66e4] text-4xl font-black tracking-tighter mb-10">FUSION</h1>
          
          <div className="w-full max-w-[280px] space-y-5">
            <div className="text-left">
              <label className="text-[11px] font-bold text-gray-500 uppercase ml-1">Campus</label>
              <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white">
                <option>Select a campus</option>
                <option>Ho Chi Minh</option>
                <option>Ha Noi</option>
                <option>Da Nang</option>
              </select>
            </div>

            <button className="w-full bg-[#0052cc] hover:bg-[#0747a6] text-white py-2.5 rounded font-medium text-sm transition-all shadow-lg shadow-blue-200">
              Login with Google
            </button>

            <div className="flex items-center gap-2 py-1">
              <div className="h-[1px] flex-1 bg-gray-200"></div>
              <span className="text-[10px] text-gray-400 font-medium">Or continue with more ▾</span>
              <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>

            <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded text-sm font-medium transition-colors">
              Sign in with email
            </button>

            <p className="text-[10px] text-gray-400 mt-6 leading-relaxed">
              By clicking continue, you agree to our <br/>
              <span className="text-blue-500 cursor-pointer">Terms of Service</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </div>

        {/* Cột phải - Image */}
        <div className="hidden md:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
            alt="Office" 
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
