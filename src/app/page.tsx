import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-fuchsia-500 via-purple-600 to-sky-500 text-white font-sans px-6">
      <div className="backdrop-blur-xl bg-white/10 p-12 rounded-3xl shadow-2xl text-center w-full max-w-lg animate-fadeIn border border-white/20">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
          Coming Soon
        </h1>

        <p className="text-lg opacity-90 mb-10 max-w-md mx-auto leading-relaxed">
          We're crafting something exciting for you. Stay connected and be the
          first to experience it!
        </p>

        <div className="flex justify-center mb-10">
          <div className="animate-bounce h-4 w-4 rounded-full bg-white mx-1"></div>
          <div className="animate-bounce h-4 w-4 rounded-full bg-white mx-1 [animation-delay:150ms]"></div>
          <div className="animate-bounce h-4 w-4 rounded-full bg-white mx-1 [animation-delay:300ms]"></div>
        </div>

        <p className="text-sm opacity-90 mt-8 tracking-wide">Developed by</p>
        <p className="text-xl font-bold mt-1 tracking-widest drop-shadow-md">
          Syntrix
        </p>
      </div>
    </div>
  );
}
