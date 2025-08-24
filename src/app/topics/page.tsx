import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TopicsPage() {
  const topics = [
    {
      id: 1,
      name: "Technology",
      description: "Discuss the latest tech trends, gadgets, and innovations",
      participants: 245,
      level: "Intermediate",
      color: "indigo",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      name: "Travel",
      description: "Share travel experiences, destinations, and cultural insights",
      participants: 189,
      level: "Beginner",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      name: "Food & Cooking",
      description: "Talk about recipes, cuisines, and culinary adventures",
      participants: 156,
      level: "Beginner",
      color: "orange",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zM6 10h7a2 2 0 012 2v4H6v-4z" />
        </svg>
      )
    },
    {
      id: 4,
      name: "Movies & Entertainment",
      description: "Discuss films, TV shows, music, and pop culture",
      participants: 203,
      level: "Intermediate",
      color: "purple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M6 4h12M6 20h12M6 12h12M6 16h12" />
        </svg>
      )
    },
    {
      id: 5,
      name: "Business & Career",
      description: "Professional development, entrepreneurship, and workplace topics",
      participants: 178,
      level: "Advanced",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      )
    },
    {
      id: 6,
      name: "Sports & Fitness",
      description: "Athletics, workouts, and healthy lifestyle discussions",
      participants: 134,
      level: "Beginner",
      color: "red",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 7,
      name: "Education & Learning",
      description: "Academic topics, study tips, and educational resources",
      participants: 167,
      level: "Intermediate",
      color: "teal",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 8,
      name: "Environment & Nature",
      description: "Environmental issues, sustainability, and nature conservation",
      participants: 98,
      level: "Intermediate",
      color: "emerald",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      indigo: "bg-indigo-100 text-indigo-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600",
      red: "bg-red-100 text-red-600",
      teal: "bg-teal-100 text-teal-600",
      emerald: "bg-emerald-100 text-emerald-600"
    };
    return colorMap[color] || "bg-gray-100 text-gray-600";
  };

  const getLevelColor = (level: string) => {
    const levelMap: { [key: string]: string } = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800"
    };
    return levelMap[level] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Explore
              <span className="block text-indigo-600">Conversation Topics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih topik yang menarik minat Anda dan mulai berlatih bahasa Inggris dengan pembelajar dari seluruh dunia
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics..."
                  className="w-full px-6 py-4 pl-12 bg-white rounded-2xl shadow-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-lg"
                />
                <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                All Topics
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                Beginner
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                Intermediate
              </button>
              <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                Advanced
              </button>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic) => (
              <div key={topic.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${getColorClasses(topic.color)} rounded-2xl flex items-center justify-center`}>
                    {topic.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(topic.level)}`}>
                    {topic.level}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{topic.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{topic.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="font-medium">{topic.participants} active</span>
                  </div>
                  
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:bg-gray-50 transition-colors font-semibold shadow-lg">
              Load More Topics
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Topics Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">2.5K+</div>
              <div className="text-gray-600">Active Conversations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">15K+</div>
              <div className="text-gray-600">Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Active Community</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
