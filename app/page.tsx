import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="py-8 mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Ephemeral
        </h1>
        <p className="text-xl text-gray-600 text-center">
          Secure Chatting with Disappearing Messages
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <img
          src="hero-image.png" // Replace with your hero image
          alt="Ephemeral logo or chat screenshot"
          className="w-full rounded-lg shadow-md"
        />

        <div className="max-w-md text-center">
          <p className="text-lg text-gray-700">
            Ephemeral offers a secure and private messaging experience with
            disappearing messages. Set expiration dates for your messages to
            ensure they vanish after a specific timeframe, or send one-time view
            messages that self-destruct after being seen.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md">
            Download Now
          </button>
          <a
            href="https://www.example.com/learn-more" // Replace with your learn more link
            className="text-blue-500 hover:text-blue-700 font-bold"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="text-center text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Ephemeral Chat App
      </footer>
    </div>
  );
}
