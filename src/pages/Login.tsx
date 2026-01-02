import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069')" }}>
      
      {/* Overlay làm mờ nền phía sau */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-[900px] flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Cột trái: Form đăng nhập */}
        <div className="w-full md:w-1/2 p-10 flex flex-col items-center justify-center">
          <h1 className="text-[#0c66e4] text-3xl font-bold mb-10 tracking-wider">FUSION</h1>
          
          <div className="w-full space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Campus</label>
              <select className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                <option>Select a campus</option>
                <option>Campus 1</option>
                <option>Campus 2</option>
              </select>
            </div>

            <button className="w-full bg-[#0c66e4] hover:bg-[#0055cc] text-white font-semibold py-2.5 rounded-md transition-colors text-sm shadow-md">
              Login with Google
            </button>

            <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs">Or continue with more ▾</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button className="w-full border border-[#0c66e4] text-[#0c66e4] hover:bg-blue-50 font-semibold py-2.5 rounded-md transition-colors text-sm">
              Sign in with email & password
            </button>

            <p className="text-[10px] text-gray-400 text-center leading-relaxed px-4">
              By clicking continue, you agree to our <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>

        {/* Cột phải: Hình ảnh minh họa */}
        <div className="hidden md:block md:w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
            alt="Office" 
            className="h-full w-full object-cover"
          />
          {/* Một lớp phủ nhẹ lên ảnh để đồng bộ với UI */}
          <div className="absolute inset-0 bg-blue-900/10"></div>
        </div>

      </div>
    </div>
  );
};

export default Login;
