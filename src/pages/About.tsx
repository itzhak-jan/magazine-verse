
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdBanner from "@/components/AdBanner";
import { MotionSection, MotionDiv } from "@/utils/transitions";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <MotionSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container-custom py-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight mb-6">
              About Content Magazine
            </h1>
            <p className="text-xl text-muted-foreground">
              Where ideas, artistry, and insight converge to inspire the curious mind.
            </p>
          </div>
        </MotionSection>
        
        {/* Mission Section */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="container-custom py-12 md:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  Content Magazine was founded with a singular purpose: to provide thoughtful, well-crafted content that informs, inspires, and challenges conventional thinking.
                </p>
                <p className="text-muted-foreground">
                  We believe in the power of quality content to educate, entertain, and elevate discourse across various fields of interest, from design and architecture to technology and culture.
                </p>
              </MotionDiv>
            </div>
            
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Editorial team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </MotionSection>
        
        {/* Horizontal Ad Banner */}
        <div className="container-custom my-8">
          <AdBanner format="horizontal" />
        </div>
        
        {/* Our Values Section */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="container-custom py-12 md:py-16"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              title="Quality Over Quantity"
              description="We prioritize well-researched, thoughtfully crafted content over mass production. Every article is meticulously edited to ensure accuracy and insight."
              delay={0.5}
            />
            
            <ValueCard
              title="Diverse Perspectives"
              description="We seek out voices and viewpoints from various backgrounds, cultures, and disciplines to provide our readers with a rich, multifaceted understanding of our world."
              delay={0.6}
            />
            
            <ValueCard
              title="Aesthetic Excellence"
              description="We believe that how content is presented matters. Our commitment to visual design and user experience reflects our respect for our readers' time and attention."
              delay={0.7}
            />
          </div>
        </MotionSection>
        
        {/* Team Section */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="container-custom py-12 md:py-16 bg-secondary/30 rounded-lg"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-12 text-center">
            Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Alex Morgan"
              role="Editor in Chief"
              imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              delay={0.7}
            />
            
            <TeamMember
              name="Jordan Lee"
              role="Design Director"
              imageUrl="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              delay={0.8}
            />
            
            <TeamMember
              name="Sarah Chen"
              role="Senior Editor"
              imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              delay={0.9}
            />
            
            <TeamMember
              name="Jamie Rivera"
              role="Content Strategist"
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              delay={1}
            />
          </div>
        </MotionSection>
      </main>
      
      <Footer />
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ title, description, delay }: ValueCardProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-card p-6 rounded-lg border shadow-sm"
    >
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </MotionDiv>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay: number;
}

const TeamMember = ({ name, role, imageUrl, delay }: TeamMemberProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </MotionDiv>
  );
};

export default About;
