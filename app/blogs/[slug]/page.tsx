import { notFound } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    title: "How Often Should You Clean Your Roof in Sydney?",
    content: `
      <p>Maintaining a clean roof is essential for the longevity of your home in Sydney's varied climate. But how often should you clean your roof? The answer depends on several factors including your location, roof type, and surrounding environment.</p>
      
      <h2>Recommended Cleaning Frequency</h2>
      <p>For most Sydney homes, we recommend professional roof cleaning every 2-3 years. However, homes in certain areas may need more frequent cleaning:</p>
      
      <ul>
        <li><strong>Coastal areas (e.g., Bondi, Manly):</strong> Every 1-2 years due to salt spray and higher humidity</li>
        <li><strong>Bushland areas (e.g., North Shore, Hills District):</strong> Every 2 years due to increased organic matter</li>
        <li><strong>Urban areas:</strong> Every 3 years typically sufficient</li>
      </ul>
      
      <h2>Signs Your Roof Needs Cleaning</h2>
      <p>Watch for these indicators that your roof needs attention:</p>
      <ul>
        <li>Visible moss or algae growth</li>
        <li>Dark streaks or stains</li>
        <li>Clogged gutters with roof debris</li>
        <li>Excessive granule loss from asphalt shingles</li>
      </ul>
    `,
    date: "May 15, 2024",
    slug: "how-often-clean-roof-sydney",
    image: '/blog/roof-cleaning-frequency.jpg',
    metaDesc: "Learn the optimal cleaning frequency for Sydney roofs based on your location and roof type from professional roof cleaners.",
  },
  // Other posts would be here
];

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  
  return {
    title: `${post.title} | Sydney Roof Cleaning Blog`,
    description: post.metaDesc,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-500">{post.date}</p>
        </header>
        
        <div className="mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}