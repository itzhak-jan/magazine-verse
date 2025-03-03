import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import AdBanner from "@/components/AdBanner";
import { getFeaturedArticles, getRecentArticles, getArticlesByTag, Article } from "@/utils/articles";
import { MotionSection, MotionDiv } from "@/utils/transitions";

const Index = () => {
  const [searchParams] = useSearchParams();
  const tagFilter = searchParams.get("tag");
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  
  useEffect(() => {
    if (tagFilter) {
      const filteredArticles = getArticlesByTag(tagFilter);
      setArticles(filteredArticles);
      setFeaturedArticle(filteredArticles.length > 0 ? filteredArticles[0] : null);
    } else {
      const featured = getFeaturedArticles();
      setFeaturedArticle(featured.length > 0 ? featured[0] : null);
      setArticles(getRecentArticles());
    }
    
    window.scrollTo(0, 0);
  }, [tagFilter]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="container-custom pt-8 pb-16">
          {featuredArticle ? (
            <FeaturedArticle article={featuredArticle} />
          ) : (
            <div className="h-[300px] flex items-center justify-center bg-secondary rounded-lg">
              <p className="text-lg text-muted-foreground">No featured articles available</p>
            </div>
          )}
        </section>
        
        <div className="container-custom my-8">
          <AdBanner format="horizontal" />
        </div>
        
        <MotionSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="container-custom py-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 gap-4">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-serif font-medium tracking-tight">
                {tagFilter ? `Articles in ${tagFilter}` : "Latest Articles"}
              </h2>
              <p className="text-muted-foreground mt-2">
                {tagFilter
                  ? `Exploring our collection of ${tagFilter} content`
                  : "Discover our most recent stories and insights"}
              </p>
            </MotionDiv>
            
            {tagFilter && (
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a 
                  href="/"
                  className="text-sm inline-flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-secondary/70 transition-colors"
                >
                  Clear Filter
                </a>
              </MotionDiv>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
          
          {articles.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </MotionSection>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
