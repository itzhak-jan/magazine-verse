
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Article } from "@/utils/articles";
import { MotionDiv } from "@/utils/transitions";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link to={`/article/${article.id}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
          <div className={`absolute inset-0 bg-muted ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 image-loading`}></div>
          <img
            src={article.imageUrl}
            alt={article.title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="mb-2 flex flex-wrap gap-2">
            {article.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className={`text-xl font-medium font-serif mb-2 group-hover:text-primary/80 transition-colors ${article.rtl ? 'text-right' : ''}`}>
            {article.title}
          </h3>
          
          <p className={`text-muted-foreground text-sm mb-3 line-clamp-2 ${article.rtl ? 'text-right' : ''}`}>
            {article.excerpt}
          </p>
          
          <div className={`mt-auto flex items-center text-sm text-muted-foreground ${article.rtl ? 'justify-end' : ''}`}>
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default ArticleCard;
