import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-4 md:p-24 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-6xl text-center font-extrabold font-serif mt-24">
        <span className="text-indigo-700">BLUE BELL BAKERY</span>
      </h1>
      <p className="text-lg md:text-2xl text-center text-gray-600 mt-4">
        Baked goods and pastries by Hannah Worton
      </p>
      <div className="flex items-center gap-2">
        <button className="bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-800 transition-all">
          Order now
        </button>
        <button className="bg-black text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-all">
          Contact us
        </button>
      </div>
      <div className="flex items-center">
        <Image
          src="/cake.png"
          alt="Confetti cake"
          width={500}
          height={200}
          className="rounded-lg"
        />
      </div>
    </main>
  )
}
