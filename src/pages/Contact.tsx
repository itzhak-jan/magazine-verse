
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AdBanner from "@/components/AdBanner";
import { MotionSection, MotionDiv } from "@/utils/transitions";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </MotionSection>
        
        {/* Contact Information & Form */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="container-custom py-12 md:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <MotionDiv
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8">Contact Us</h2>
                
                <div className="space-y-6 mb-8">
                  <ContactInfo
                    icon={<Mail size={20} />}
                    title="Email"
                    content="hello@contentmagazine.com"
                  />
                  
                  <ContactInfo
                    icon={<Phone size={20} />}
                    title="Phone"
                    content="+1 (555) 123-4567"
                  />
                  
                  <ContactInfo
                    icon={<MapPin size={20} />}
                    title="Address"
                    content="123 Content Street, Publishing District, New York, NY 10001"
                  />
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Office Hours</h3>
                  <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                </div>
              </MotionDiv>
            </div>
            
            <div>
              <MotionDiv
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8">Send Us a Message</h2>
                <ContactForm />
              </MotionDiv>
            </div>
          </div>
        </MotionSection>
        
        {/* Horizontal Ad Banner */}
        <div className="container-custom my-8">
          <AdBanner format="horizontal" />
        </div>
        
        {/* FAQ Section */}
        <MotionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="container-custom py-12 md:py-16"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FaqItem
              question="How can I contribute an article?"
              answer="We welcome contributions from writers with expertise in our core topics. Please use our contact form and select 'Article Submission' as the subject to receive our contribution guidelines."
              delay={0.6}
            />
            
            <FaqItem
              question="Do you accept guest posts?"
              answer="Yes, we consider high-quality guest posts that align with our content themes and quality standards. Please reach out with your proposal via the contact form."
              delay={0.7}
            />
            
            <FaqItem
              question="How can I advertise with Content Magazine?"
              answer="For advertising opportunities, please contact our advertising team at ads@contentmagazine.com with details about your brand and advertising goals."
              delay={0.8}
            />
            
            <FaqItem
              question="I found an error in an article. How can I report it?"
              answer="We strive for accuracy in all our content. Please use our contact form to report any errors, and our editorial team will review and address them promptly."
              delay={0.9}
            />
          </div>
        </MotionSection>
      </main>
      
      <Footer />
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="mt-1 text-primary mr-4">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FaqItem = ({ question, answer, delay }: FaqItemProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 rounded-lg border"
    >
      <h3 className="text-lg font-medium mb-3">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </MotionDiv>
  );
};

export default Contact;
