import Header from "@/components/Header";
import Footer from "@/components/Footer";

const schedules = [
  {
    time: "09:08",
    date: "Today, 25 August",
    topic: "Any unforgettable memory related to swimming pool?",
  },
  {
    time: "09:17",
    date: "Today, 25 August",
    topic: "Tell me about an experience that you felt was utterly nonsense.",
  },
  {
    time: "09:25",
    date: "Today, 25 August",
    topic: "What is the popular song loved by everyone in your country?",
  },
  {
    time: "09:34",
    date: "Today, 25 August",
    topic: "Tell me about a traditional snack in your country people still enjoy.",
  },
];

export default function Topics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="mb-10 mt-15">
  {/* Top Section Full Width */}
  <div className="bg-white py-12">
    <div className="max-w-screen-xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Session Card */}
        <div className="relative bg-white border-2 border-red-700 rounded-2xl shadow-md p-8">
          <span className="absolute top-0 right-0 bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg rounded-tr-2xl">
            100% Free
          </span>

          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            Join next session!
          </h2>

          <div className="mb-4">
            <p className="text-gray-800 font-semibold">
              Next topic:{" "}
              <span className="font-normal text-gray-700">
                Feelings and Emotions 2
              </span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-800 font-semibold">Next conversation</p>
            <p className="text-red-700 text-2xl font-bold">0h 5m 38s</p>
          </div>

          <button className="px-6 py-3 bg-indigo-900 text-white rounded-lg font-semibold hover:bg-indigo-800 transition">
            Start Welcome session
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
            alt="Session Illustration"
            className="max-h-72 object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Next Topic Section */}
      <div className="mt-12 bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Next Topic{" "}
          <span className="font-normal text-gray-500 text-sm ml-2">
            You're gonna tell your life episode to your partner in the next
            session!
          </span>
        </h3>
        <p className="text-xl font-semibold text-gray-800">
          Feelings and Emotions 2
        </p>
      </div>
    </div>
  </div>

  {/* Schedule Section */}
  <div className="max-w-screen-xl mx-auto px-8 mt-8">
    <h3 className="text-gray-700 font-semibold mb-4">
      Read the topics below in advance and prepare your episodes.
    </h3>
    <div className="space-y-4">
      {schedules.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-4 flex flex-col"
        >
          <div className="text-xl font-bold text-gray-800">{item.time}</div>
          <div className="text-sm text-gray-500 mb-2">{item.date}</div>
          <p className="text-gray-700">
            <span className="font-semibold">Topic:</span> {item.topic}
          </p>
        </div>
      ))}
    </div>
  </div>
</main>


      <Footer />
    </div>
  );
}
