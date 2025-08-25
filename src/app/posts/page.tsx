import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PostsPage() {
  const posts = [
    {
      id: 1,
      title: "What's your favorite programming language and why?",
      content: "I'm curious to hear from developers around the world about their preferred programming languages. Personally, I love Python for its readability and versatility. What about you?",
      timeAgo: "2 hours ago",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Best hidden gems in Barcelona for food lovers",
      content: "I'm planning a trip to Barcelona next month and I want to discover some authentic local restaurants that tourists usually miss. Any recommendations for amazing tapas places or traditional Catalan cuisine?",
      timeAgo: "4 hours ago",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Recent movies that surprised you in a good way",
      content: "I just watched 'Everything Everywhere All at Once' and it completely blew my mind! What movies have you seen recently that exceeded your expectations? Looking for recommendations!",
      timeAgo: "6 hours ago",
      image: "https://images.unsplash.com/photo-1489599835382-957593cb2371?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Traditional Egyptian recipes to try at home",
      content: "I want to share some of my grandmother's traditional Egyptian recipes. Would anyone be interested in learning how to make authentic koshari or ful medames? These dishes are staples in Egyptian cuisine!",
      timeAgo: "8 hours ago",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Sustainable living tips that actually work",
      content: "I've been trying to reduce my environmental impact and I've found some really practical tips that don't require a huge lifestyle change. Would love to share and hear what others are doing!",
      timeAgo: "12 hours ago",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Remote work challenges and solutions",
      content: "Working remotely has been challenging but also rewarding. What are the biggest challenges you've faced with remote work and how have you overcome them?",
      timeAgo: "1 day ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
    }
  ];





  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="block text-indigo-600">Posts</span>
            </h1>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="text-black px-4 py-3 pl-10 bg-white rounded-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

                     {/* Posts Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {posts.map((post) => (
               <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                                                   {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                                   {/* Post Content */}
                  <div className="p-6">
                    {/* Post Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-gray-500">{post.timeAgo}</span>
                    </div>

                                   {/* Post Content */}
                   <div className="mb-4">
                     <a href={`/posts/${post.id}`} className="block">
                       <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors overflow-hidden text-ellipsis whitespace-nowrap">{post.title}</h2>
                     </a>
                     <p className="text-gray-600 text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{post.content}</p>
                   </div>

                   

                                       {/* Post Actions */}
                    <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                      <a href={`/posts/${post.id}`} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm">
                        Read More
                      </a>
                    </div>
                 </div>
               </div>
             ))}
           </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-2xl hover:bg-gray-50 transition-colors font-semibold shadow-lg">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
