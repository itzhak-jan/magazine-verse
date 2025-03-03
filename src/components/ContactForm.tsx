
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MotionDiv } from "@/utils/transitions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll be in touch soon.");
    reset();
    setIsSubmitting(false);
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              {...register("name")}
              className="bg-secondary/50 border-0"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <Input
              placeholder="Email Address"
              type="email"
              {...register("email")}
              className="bg-secondary/50 border-0"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <Input
              placeholder="Subject"
              {...register("subject")}
              className="bg-secondary/50 border-0"
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>
          
          <div>
            <Textarea
              placeholder="Your Message"
              rows={6}
              {...register("message")}
              className="bg-secondary/50 border-0 resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </MotionDiv>
  );
};

export default ContactForm;
