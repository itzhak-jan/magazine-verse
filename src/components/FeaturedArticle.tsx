
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Article } from "@/utils/articles";
import { MotionDiv } from "@/utils/transitions";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-lg overflow-hidden"
    >
      <div className="relative aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden">
        <div className={`absolute inset-0 bg-muted ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 image-loading`}></div>
        <img
          src={article.imageUrl}
          alt={article.title}
          className={`w-full h-full object-cover ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-white mb-3">
          {article.title}
        </h2>
        
        <p className="text-white/80 mb-4 max-w-xl text-sm md:text-base">
          {article.excerpt}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-white/70 text-sm">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
          
          <Link
            to={`/article/${article.id}`}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <span className="mr-2">Read Article</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </MotionDiv>
  );
};

export default FeaturedArticle;
