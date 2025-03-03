
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured: boolean;
  rtl?: boolean;
}

// Sample article data - in a real implementation this would be fetched from an API or JSON file
export const articles: Article[] = [
  {
    id: "1",
    title: "The Art of Minimalism in Modern Design",
    subtitle: "How less became more in contemporary aesthetics",
    author: "Alex Morgan",
    date: "June 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80",
    excerpt: "Exploring the principles of minimalism and how they've shaped our modern aesthetic sensibilities across architecture, product design, and digital interfaces.",
    content: `
      <p>Minimalism as a design philosophy has permeated virtually every creative discipline in the modern world. From the sleek lines of contemporary architecture to the intuitive interfaces of our digital devices, the principle of "less is more" has become a cornerstone of what we consider good design.</p>
      
      <h2>The Origins of Minimalist Design</h2>
      
      <p>While minimalism as a term gained popularity in the 1960s art scene, its principles in design can be traced back to early 20th century movements like the Bauhaus and De Stijl. These pioneering schools rejected ornamental excess in favor of functional clarity.</p>
      
      <p>The Bauhaus mantra that "form follows function" established the groundwork for what would later evolve into minimalist design principles. This approach prioritized utility and simplicity, stripping away anything that didn't serve a clear purpose.</p>
      
      <h2>Minimalism in Technology</h2>
      
      <p>Perhaps nowhere has minimalism found a more natural home than in modern technology design. The clean interfaces pioneered by companies like Apple demonstrated that simplicity wasn't just aesthetically pleasing—it made products more intuitive and accessible.</p>
      
      <p>The influence of designers like Dieter Rams and Jony Ive has been profound, establishing principles that continue to guide product design across the technology sector. Their work proved that reducing visual noise doesn't diminish functionality but rather enhances the user experience.</p>
      
      <h2>The Future of Minimalist Design</h2>
      
      <p>As we move forward, minimalism continues to evolve. Today's interpretation incorporates subtle animations, thoughtful micro-interactions, and careful use of white space to create experiences that feel both simple and sophisticated.</p>
      
      <p>The challenge for contemporary designers is balancing minimalist principles with the increasing complexity of our digital tools. The most successful designs manage to hide complexity behind simplicity, creating interfaces that are powerful yet approachable.</p>
      
      <p>Ultimately, the enduring appeal of minimalism lies in its focus on the essential. By eliminating distraction and emphasizing what matters most, minimalist design creates experiences that respect the user's attention and intelligence—a quality that remains as valuable today as ever.</p>
    `,
    tags: ["Design", "Architecture", "Technology"],
    featured: true
  },
  {
    id: "2",
    title: "Sustainable Architecture: Building for Tomorrow",
    subtitle: "How eco-conscious design is reshaping our cities",
    author: "Jordan Lee",
    date: "May 22, 2023",
    imageUrl: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "From green roofs to passive houses, sustainable architecture is transforming urban landscapes while addressing environmental challenges.",
    content: `
      <p>As climate concerns intensify globally, architects and urban planners are reimagining how our buildings interact with the environment. Sustainable architecture represents more than a trend—it's becoming an imperative for responsible development.</p>
      
      <h2>Principles of Sustainable Design</h2>
      
      <p>Modern sustainable architecture balances several key considerations: energy efficiency, renewable materials, minimized carbon footprint, and harmony with the surrounding environment. Rather than imposing structures upon landscapes, today's eco-conscious architects seek to integrate buildings with their natural context.</p>
      
      <p>Passive design strategies—such as building orientation, thermal mass, and natural ventilation—are being rediscovered and enhanced with modern technology. These approaches maximize comfort while minimizing energy consumption.</p>
      
      <h2>Materials Revolution</h2>
      
      <p>The sustainable building movement has catalyzed innovation in construction materials. From bamboo flooring to recycled steel, mass timber to mycelium insulation, architects now have access to materials that drastically reduce environmental impact without compromising structural integrity or aesthetics.</p>
      
      <h2>Notable Examples</h2>
      
      <p>Around the world, pioneering projects showcase the potential of sustainable architecture. The Edge in Amsterdam, considered one of the greenest office buildings globally, generates more energy than it consumes through solar panels and efficient systems.</p>
      
      <p>In Singapore, the Oasia Hotel Downtown features a living façade with 21 species of tropical vines and flowers, creating a vertical ecosystem that cools the building naturally while supporting urban biodiversity.</p>
      
      <h2>The Future Outlook</h2>
      
      <p>As sustainable building practices mature, we're seeing a shift from isolated showcase projects to codified standards and regulations. Net-zero and even net-positive buildings are becoming increasingly feasible targets rather than aspirational concepts.</p>
      
      <p>The challenge ahead lies in applying these principles at scale, particularly in rapidly developing regions. Sustainable architecture must balance environmental ideals with economic realities and cultural contexts to create truly viable solutions for tomorrow's built environment.</p>
    `,
    tags: ["Architecture", "Sustainability", "Urban Planning"],
    featured: true
  },
  {
    id: "3",
    title: "העיצוב המינימליסטי בעולם המודרני",
    subtitle: "איך פחות הפך ליותר באסתטיקה העכשווית",
    author: "אלכס מורגן",
    date: "15 ביוני, 2023",
    imageUrl: "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80",
    excerpt: "חקירת עקרונות המינימליזם וכיצד הם עיצבו את הרגישויות האסתטיות המודרניות שלנו באדריכלות, עיצוב מוצר וממשקים דיגיטליים.",
    content: `
      <p>המינימליזם כפילוסופיית עיצוב חדר לכל דיסציפלינה יצירתית בעולם המודרני. מהקווים החלקים של האדריכלות העכשווית ועד לממשקים האינטואיטיביים של המכשירים הדיגיטליים שלנו, העיקרון של "פחות הוא יותר" הפך לאבן פינה במה שאנו מחשיבים כעיצוב טוב.</p>
      
      <h2>מקורות העיצוב המינימליסטי</h2>
      
      <p>בעוד שהמינימליזם כמונח זכה לפופולריות בסצנת האמנות של שנות ה-60, עקרונותיו בעיצוב ניתן לעקוב אחריהם חזרה לתנועות מתחילת המאה ה-20 כמו באוהאוס ודה סטיל. בתי ספר חלוציים אלה דחו עודף קישוטי לטובת בהירות פונקציונלית.</p>
      
      <p>המנטרה של באוהאוס ש"הצורה נובעת מהפונקציה" יצרה את התשתית למה שלאחר מכן התפתח לעקרונות עיצוב מינימליסטיים. גישה זו העדיפה שימושיות ופשטות, והסירה כל דבר שלא משרת מטרה ברורה.</p>
      
      <h2>מינימליזם בטכנולוגיה</h2>
      
      <p>אולי בשום מקום המינימליזם לא מצא בית טבעי יותר מאשר בעיצוב הטכנולוגיה המודרנית. הממשקים הנקיים שחברות כמו אפל חלצו הדגימו כי פשטות אינה רק נעימה אסתטית - היא הפכה מוצרים לאינטואיטיביים ונגישים יותר.</p>
      
      <p>ההשפעה של מעצבים כמו דיטר ראמס וג'וני אייב הייתה עמוקה, והיא ייסדה עקרונות שממשיכים להנחות את עיצוב המוצרים בכל מגזר הטכנולוגיה. עבודתם הוכיחה כי הפחתת הרעש החזותי אינה מפחיתה את הפונקציונליות אלא דווקא משפרת את חוויית המשתמש.</p>
      
      <h2>עתיד העיצוב המינימליסטי</h2>
      
      <p>כשאנו מתקדמים קדימה, המינימליזם ממשיך להתפתח. הפרשנות של היום משלבת אנימציות עדינות, מיקרו-אינטראקציות מחושבות, ושימוש זהיר בחלל לבן כדי ליצור חוויות שמרגישות פשוטות ומתוחכמות כאחד.</p>
      
      <p>האתגר למעצבים עכשוויים הוא לאזן בין עקרונות מינימליסטיים לבין המורכבות הגוברת של הכלים הדיגיטליים שלנו. העיצובים המוצלחים ביותר מצליחים להסתיר מורכבות מאחורי פשטות, ויוצרים ממשקים שהם חזקים אך נגישים.</p>
      
      <p>בסופו של דבר, הקסם המתמשך של המינימליזם טמון בהתמקדות במה שחיוני. על ידי ביטול הסחות דעת והדגשת מה שחשוב ביותר, עיצוב מינימליסטי יוצר חוויות המכבדות את תשומת הלב והאינטליגנציה של המשתמש - תכונה שנשארת יקרת ערך היום כבעבר.</p>
    `,
    tags: ["עיצוב", "אדריכלות", "טכנולוגיה"],
    featured: false,
    rtl: true
  },
  {
    id: "4",
    title: "Digital Photography: Capturing the Moment",
    subtitle: "Techniques for unforgettable images",
    author: "Sarah Chen",
    date: "April 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "From composition to lighting, master the essential techniques that elevate everyday photography to compelling visual storytelling.",
    content: `
      <p>Digital photography has democratized image-making, putting powerful cameras in billions of pockets worldwide. Yet the fundamental principles that separate compelling images from forgettable snapshots remain consistent regardless of equipment.</p>
      
      <h2>Beyond Technical Specifications</h2>
      
      <p>While camera technology continues to advance at a remarkable pace, the most impactful photographs often result not from technical specifications but from the photographer's eye and understanding of visual language.</p>
      
      <p>Great photography begins with learning to see—developing the ability to recognize interesting light, compelling compositions, and decisive moments before raising the camera to your eye.</p>
      
      <h2>Light: The Essential Element</h2>
      
      <p>Photography, at its core, is the capture of light. Understanding how different qualities of light—harsh midday sun versus golden hour glow, directional versus diffused—affect mood and dimension can transform ordinary scenes into extraordinary images.</p>
      
      <p>Learning to see light as a subject itself, rather than simply a means to illuminate subjects, opens new creative possibilities. The interplay of shadows and highlights often tells a more compelling story than perfect even lighting.</p>
      
      <h2>Composition: The Framework</h2>
      
      <p>While rules like the rule of thirds provide useful starting points, composition is ultimately about creating visual relationships within the frame that guide the viewer's eye and communicate your intended message.</p>
      
      <p>Simple techniques like including foreground elements, finding natural frames, establishing clear subjects, and eliminating distractions can dramatically improve the impact of your images.</p>
      
      <h2>Moment: The Magic</h2>
      
      <p>The decisive moment—that split second when all elements align perfectly—remains the most elusive and rewarding aspect of photography. Developing the patience to wait for these moments and the reflexes to capture them comes with practice and intentionality.</p>
      
      <p>Even in still life or landscape photography, there are optimal moments—when light breaks through clouds or when wind briefly calms—that elevate images from documentary to poetic.</p>
      
      <h2>Post-Processing: The Refinement</h2>
      
      <p>Digital editing offers unprecedented control over the final image, but the most effective processing often enhances rather than transforms. Understanding the principles of contrast, color theory, and visual weight allows for subtle adjustments that honor the original scene while emphasizing its essential qualities.</p>
      
      <p>Like a writer editing a draft, the photographer's work in post-processing is about clarity and emphasis—removing distractions and strengthening the core visual story.</p>
    `,
    tags: ["Photography", "Art", "Technology"],
    featured: false
  },
  {
    id: "5",
    title: "The Evolution of User Experience Design",
    subtitle: "From usability to emotional engagement",
    author: "Morgan Zhang",
    date: "March 5, 2023",
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "How UX design has transformed from basic usability principles to creating meaningful, emotionally resonant digital experiences.",
    content: `
      <p>The field of user experience design has undergone a profound evolution since its emergence in the late 20th century. What began as a focus on basic usability has expanded to encompass a holistic approach to how people interact with and feel about digital products.</p>
      
      <h2>From Usability to Experience</h2>
      
      <p>Early digital interfaces prioritized function over form, with usability experts focused primarily on efficiency and error prevention. The question was simple: "Can users complete tasks successfully?"</p>
      
      <p>As digital products became more integrated into daily life, this limited perspective expanded. Designers began asking not just whether users could accomplish goals, but how they felt during and after the interaction. This shift marked the birth of user experience as a distinct discipline.</p>
      
      <h2>The Science and Art of UX</h2>
      
      <p>Modern UX design represents a unique blend of analytical and creative thinking. It draws on cognitive psychology, human factors research, and data analysis while also incorporating principles from visual design, storytelling, and even theater.</p>
      
      <p>This interdisciplinary approach recognizes that truly effective digital experiences engage both the rational and emotional aspects of the human mind. Users make decisions based not only on functionality but on trust, delight, and personal connection.</p>
      
      <h2>Beyond Screens</h2>
      
      <p>As technology continues to evolve beyond traditional screens, UX designers face new challenges and opportunities. Voice interfaces, augmented reality, haptic feedback, and ambient computing all require rethinking fundamental assumptions about how humans and technology interact.</p>
      
      <p>This expansion has led to a broader conception of experience design that considers the entire ecosystem of touchpoints a person might have with a product or service, both digital and physical.</p>
      
      <h2>Ethical Dimensions</h2>
      
      <p>With greater influence comes greater responsibility. Today's UX practitioners increasingly grapple with ethical questions about attention economics, persuasive design, accessibility, and inclusivity.</p>
      
      <p>The most forward-thinking designers now recognize that creating responsible experiences requires considering not just what technology makes possible or what businesses desire, but what genuinely improves people's lives without unintended negative consequences.</p>
      
      <h2>The Future of UX</h2>
      
      <p>As artificial intelligence and machine learning play larger roles in shaping experiences, UX designers will need to become adept at designing systems that learn and adapt rather than just static interfaces.</p>
      
      <p>The next evolution may well involve creating experiences that seamlessly integrate technology into human lives without demanding constant attention—technology that augments human capabilities while respecting human limitations.</p>
    `,
    tags: ["Design", "Technology", "Psychology"],
    featured: false
  },
  {
    id: "6",
    title: "The Renaissance of Craft Cocktails",
    subtitle: "How bartenders are reviving lost techniques",
    author: "Jamie Rivera",
    date: "February 18, 2023",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    excerpt: "Inside the global movement reintroducing forgotten spirits, traditional techniques, and innovative flavors to create a new golden age of cocktail culture.",
    content: `
      <p>Over the past two decades, a remarkable revival has transformed bars around the world. What began as a niche interest among cocktail enthusiasts has blossomed into a full-fledged cultural movement centered around craft cocktails.</p>
      
      <h2>Rediscovering the Past</h2>
      
      <p>At the heart of the craft cocktail renaissance lies a profound respect for history. Bartenders have become historians and archivists, digging through dusty cocktail manuals from the 19th and early 20th centuries to rediscover forgotten recipes, techniques, and ingredients.</p>
      
      <p>This archaeological approach has resurrected classics like the Aviation, Last Word, and Corpse Reviver #2—complex, balanced cocktails that had been all but forgotten during the decades when sweetened vodka drinks dominated bar menus.</p>
      
      <h2>The Craft in Craft Cocktails</h2>
      
      <p>Beyond recipes, today's cocktail movement has revived the notion of bartending as a skilled craft. From house-made bitters and syrups to hand-carved ice and carefully calibrated dilution, every element is subject to thoughtful consideration.</p>
      
      <p>Many bartenders now approach their work with the same attention to detail as fine dining chefs, considering flavor combinations, texture, aroma, and presentation as integral parts of the experience.</p>
      
      <h2>The Spirits Renaissance</h2>
      
      <p>The cocktail revival has coincided with—and helped fuel—an explosion in artisanal spirits production. Small distilleries crafting gin, whiskey, rum, and formerly obscure spirits like mezcal and rhum agricole have provided bartenders with a vastly expanded palette of flavors.</p>
      
      <p>Meanwhile, imports and resurrections of traditional European spirits like amari, eau de vie, and genever have further broadened the possible flavor profiles available to creative drink makers.</p>
      
      <h2>Global Influences and Local Character</h2>
      
      <p>While the craft cocktail movement began primarily in cities like New York, San Francisco, and London, it has evolved into a global phenomenon with distinct regional characteristics.</p>
      
      <p>From Tokyo bars known for precision and minimalism to Latin American establishments highlighting indigenous ingredients and traditions, local bartenders increasingly draw on their culinary heritage while maintaining a dialogue with the global cocktail community.</p>
      
      <h2>Beyond Exclusivity</h2>
      
      <p>As the movement has matured, many of its practitioners have worked to shed the pretension that sometimes characterized its early years. Today's best cocktail bars balance technical excellence with warm hospitality, recognizing that even the most perfectly constructed drink fails if it doesn't create a welcoming experience.</p>
      
      <p>This evolution reflects a broader understanding that craft cocktails aren't simply about showing off technical skill or historical knowledge—they're about creating moments of connection and pleasure through thoughtfully prepared drinks.</p>
    `,
    tags: ["Food & Drink", "Culture", "History"],
    featured: false
  }
];

export const getFeaturedArticles = () => articles.filter(article => article.featured);
export const getRecentArticles = () => [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export const getArticleById = (id: string) => articles.find(article => article.id === id);
export const getArticlesByTag = (tag: string) => articles.filter(article => article.tags.includes(tag));
