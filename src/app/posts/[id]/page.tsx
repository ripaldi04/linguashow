import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PostDetailPage({ params }: { params: { id: string } }) {
  // Mock data untuk postingan detail
  const post = {
    id: params.id,
    title: "What's your favorite programming language and why?",
    content: `I'm curious to hear from developers around the world about their preferred programming languages. Personally, I love Python for its readability and versatility. 

I've been coding for about 5 years now, and I've tried many languages including JavaScript, Java, C++, and Go. But Python has always been my go-to language for most projects. Here's why:

**Readability**: Python's syntax is incredibly clean and readable. It's almost like writing pseudocode that actually runs!

**Versatility**: You can use Python for web development (Django, Flask), data science (Pandas, NumPy), machine learning (TensorFlow, PyTorch), automation, and so much more.

**Community**: The Python community is amazing. There are so many helpful resources, libraries, and developers willing to help.

**Learning Curve**: It's perfect for beginners but powerful enough for complex applications.

What about you? What's your favorite programming language and what makes it special to you? I'd love to hear about your experiences and maybe discover some new languages to learn!`,
    timeAgo: "2 hours ago",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=400&fit=crop"
  };







  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <a href="/" className="hover:text-indigo-600 transition-colors">Home</a>
                <span>/</span>
                <a href="/posts" className="hover:text-indigo-600 transition-colors">Posts</a>
                <span>/</span>
                <span className="text-gray-900">Post #{params.id}</span>
              </nav>
            </div>

                         {/* Post Content */}
             <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
               

                             {/* Post Image */}
               <div className="mb-8">
                 <img
                   src={post.image}
                   alt={post.title}
                   className="w-full h-64 object-cover rounded-xl"
                 />
               </div>

                               {/* Post Title and Meta */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{post.timeAgo}</span>
                  </div>
                </div>

              {/* Post Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {post.content}
                </div>
              </div>

              

                                             {/* Post Actions */}
                <div className="flex items-center justify-end pt-6 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
