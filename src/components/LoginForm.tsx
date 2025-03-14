
const LoginForm = () => {
  return (
    <div className="flex items-center justify-center bg-blue-200 h-screen">
      <div className="bg-white p-6 rounded-2xl w-96 border-t-4 border-yellow-400">
    <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">Login</h2>
    <form>
      <input type="text" placeholder="Username" 
      className="w-full p-3 border border-blue-300 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      required />
      <input type="password" placeholder="Password"
      className="w-full p-3 border border-blue-300 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      required />
      <button type="submit"
      className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
      <a href="#"
      className="flex items-center justify-center text-blue-500 mt-4 hover:text-yellow-500 transition duration-300">Forgot your password?</a>
    </form>
  </div></div>
  )
}

export default LoginForm