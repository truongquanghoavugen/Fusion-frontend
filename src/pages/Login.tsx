export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-[360px] bg-white p-8 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Sign in to Fusion
        </h1>

        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          placeholder="Password"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Sign in
        </button>
      </div>
    </div>
  )
}

