import RedesRL from "../components/registroLogin/RedesRL";
import ImagenLogin from "../components/registroLogin/ImagenLogin";
import LoginForm from "../components/registroLogin/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-screen pt-[180px] flex items-center">
      <main className="max-w-[95%] w-[850px] m-auto flex justify-center text-center rounded-md md:shadow-md md:shadow-zinc-500">
        <div className="w-full md:w-1/2 max-w-[425px] mx-auto bg-white py-10 flex justify-center items-center rounded-md md:rounded-l-md md:rounded-none shadow-md shadow-zinc-500 md:shadow-none">
          <form className="w-full px-9 py-1">
            <h2 className="text-2xl font-semibold pt-3 pb-5">Iniciar Sesión</h2>
            <LoginForm />

            {/* Social login section */}
            <p className="text-zinc-500 pb-3 ">o inicia con</p>
            <RedesRL />
          </form>
        </div>

        {/* Sign in section */}
        <div className="hidden md:w-1/2 bg-gradient-to-t from-orange-300 to-yellow-200 md:flex justify-center items-center px-9 rounded-md md:rounded-r-md md:rounded-none">
          <ImagenLogin />
        </div>
      </main>
    </div>
  );
}
