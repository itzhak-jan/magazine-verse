
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import { getArticleById, getRecentArticles, Article } from "@/utils/articles";
import { MotionDiv, MotionSection } from "@/utils/transitions";
import { toast } from "sonner";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      // Simulate loading delay
      setIsLoading(true);
      
      setTimeout(() => {
        const foundArticle = getArticleById(id);
        setArticle(foundArticle || null);
        
        // Get related articles (excluding current one)
        if (foundArticle) {
          const recent = getRecentArticles().filter(a => a.id !== id);
          setRelatedArticles(recent.slice(0, 3));
        }
        
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 300);
    }
  }, [id]);

  const handleShare = () => {
    // In a real app, implement proper sharing functionality
    if (navigator.share) {
      navigator
        .share({
          title: article?.title,
          text: article?.excerpt,
          url: window.location.href,
        })
        .catch(() => {
          // Fallback if share fails
          copyToClipboard();
        });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-3xl px-4">
            <div className="h-8 bg-secondary rounded-md w-3/4"></div>
            <div className="h-64 bg-secondary rounded-lg w-full"></div>
            <div className="space-y-4">
              <div className="h-4 bg-secondary rounded-md w-full"></div>
              <div className="h-4 bg-secondary rounded-md w-full"></div>
              <div className="h-4 bg-secondary rounded-md w-5/6"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center flex-col p-4">
          <h1 className="text-2xl font-medium mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <article className={article.rtl ? "rtl" : ""}>
          {/* Article Header */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container-custom mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Articles
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/?tag=${tag}`}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 max-w-4xl">
              {article.subtitle}
            </p>
            
            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">{article.author}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </div>
              
              <button
                onClick={handleShare}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Share article"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </button>
            </div>
          </MotionDiv>
          
          {/* Featured Image */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="container-custom mb-12"
          >
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
              <div 
                className={`absolute inset-0 bg-muted ${
                  imageLoaded ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-500 image-loading`}
              ></div>
              <img
                src={article.imageUrl}
                alt={article.title}
                className={`w-full h-full object-cover ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </MotionDiv>
          
          {/* Article Content */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="container-custom mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Article Body */}
              <div className="lg:col-span-8">
                <div 
                  className={`article-content ${article.rtl ? 'rtl' : ''}`}
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                <AdBanner format="vertical" className="mx-auto" />
              </div>
            </div>
          </MotionDiv>
          
          {/* Horizontal Ad Banner */}
          <div className="container-custom my-12">
            <AdBanner format="horizontal" />
          </div>
        </article>
        
        {/* Related Articles */}
        <MotionSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="container-custom py-12 border-t"
        >
          <h2 className="text-2xl font-serif font-medium tracking-tight mb-8">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} index={index} />
            ))}
          </div>
        </MotionSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePage;
