export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      }}
    >
      {/* Overlay blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-xl shadow-xl flex w-[900px] max-w-[95%] overflow-hidden">
        {/* LEFT */}
        <div className="w-1/2 p-10">
          <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            FUSION
          </h1>

          {/* Campus */}
          <label className="text-sm font-medium">Campus</label>
          <select className="w-full border rounded px-3 py-2 mt-1 mb-4">
            <option>Select a campus</option>
            <option>HCM</option>
            <option>Hanoi</option>
          </select>

          {/* Google login */}
          <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700">
            Login with Google
          </button>

          <div className="text-center text-sm text-gray-400 my-4">
            Or continue with more
          </div>

          {/* Email login */}
          <button className="w-full border border-blue-600 text-blue-600 py-2 rounded font-medium hover:bg-blue-50">
            Sign in with email & password
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-400 mt-6">
            By clicking continue, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="office"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
