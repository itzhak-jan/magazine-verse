
import { useState, useEffect } from "react";
import { MotionDiv } from "@/utils/transitions";

interface AdBannerProps {
  format: "horizontal" | "vertical" | "box";
  className?: string;
}

const AdBanner = ({ format, className = "" }: AdBannerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate ad loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const getDimensions = () => {
    switch (format) {
      case "horizontal":
        return "h-[90px] md:h-[90px] w-full";
      case "vertical":
        return "h-[600px] w-[160px] md:w-[300px]";
      case "box":
        return "h-[250px] w-[300px]";
      default:
        return "h-[250px] w-[300px]";
    }
  };
  
  const getPlaceholderText = () => {
    switch (format) {
      case "horizontal":
        return "Banner Ad (728x90)";
      case "vertical":
        return "Sidebar Ad (300x600)";
      case "box":
        return "Box Ad (300x250)";
      default:
        return "Advertisement";
    }
  };

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative flex items-center justify-center border border-border/60 rounded-md overflow-hidden bg-secondary/20 ${getDimensions()} ${className}`}
    >
      {!isLoaded ? (
        <div className="animate-pulse">
          <div className="h-full w-full bg-secondary rounded"></div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-4">
          <p className="text-xs text-muted-foreground uppercase mb-2">Advertisement</p>
          <p className="text-sm text-muted-foreground">{getPlaceholderText()}</p>
          <p className="text-xs text-muted-foreground mt-2">Google AdSense Integration</p>
        </div>
      )}
    </MotionDiv>
  );
};

export default AdBanner;
