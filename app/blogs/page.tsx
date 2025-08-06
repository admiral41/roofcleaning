export const metadata = {
  title: "Roof Cleaning Blog | Tips & Advice",
  description: "Read our blog for expert advice on roof maintenance, cleaning tips, and how to extend the life of your roof in Sydney's climate.",
  keywords: "roof cleaning blog, roof maintenance tips, Sydney roof care",
}

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Clean Your Roof in Sydney?",
    excerpt: "Learn the optimal cleaning frequency for Sydney roofs based on your location and roof type.",
    date: "May 15, 2024",
    slug: "how-often-clean-roof-sydney",
  },
  {
    id: 2,
    title: "The Dangers of Moss Growth on Your Roof",
    excerpt: "Discover why moss can be damaging to your roof and how to prevent its growth.",
    date: "April 28, 2024",
    slug: "dangers-moss-growth-roof",
  },
  {
    id: 3,
    title: "DIY vs Professional Roof Cleaning: What You Need to Know",
    excerpt: "We compare the pros and cons of DIY roof cleaning versus hiring professionals.",
    date: "March 10, 2024",
    slug: "diy-vs-professional-roof-cleaning",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Roof Cleaning Blog</h1>
      <p className="text-lg mb-8 max-w-3xl">
        Expert advice and tips on roof maintenance, cleaning, and restoration for Sydney homeowners.
      </p>
      
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/blogs/${post.slug}`} className="hover:text-blue-700">{post.title}</a>
            </h2>
            <p className="text-gray-500 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <a href={`/blogs/${post.slug}`} className="text-blue-700 font-medium hover:underline">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}