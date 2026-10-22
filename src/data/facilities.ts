export interface FacilitySpec {
  label: string;
  value: string;
}

export interface FacilityItem {
  id: string;
  slug: string;
  title: string;
  category: 'stem' | 'adventure' | 'academic' | 'care';
  categoryLabel: string;
  img: string;
  extraImages: string[];
  tagline: string;
  specs: FacilitySpec[];
  highlights: string[];
  content: string;
}

export const facilitiesData: FacilityItem[] = [
  {
    id: 'fac-1',
    slug: 'physical-laboratories',
    title: 'Physical Laboratories',
    category: 'stem',
    categoryLabel: 'STEM & Technology',
    img: '/facilities/1.jpg',
    extraImages: [
      '/facilities/deep/5.jpg',
      '/facilities/deep/4.jpg',
      '/facilities/deep/3-1.jpg',
      '/facilities/deep/2-1.jpg',
      '/facilities/deep/1-1.jpg'
    ],
    tagline: 'State-of-the-art experimental chambers for Physics, Chemistry, Biology, and Mathematics.',
    specs: [
      { label: 'Laboratories', value: 'Physics, Chem, Bio, Math' },
      { label: 'Safety Standard', value: 'CBSE & NBC Compliant' },
      { label: 'Capacity', value: '40+ Students per Lab' },
      { label: 'Curriculum', value: 'CBSE Experiential STEM' }
    ],
    highlights: [
      'Individual workstation setups with gas, water, and electrical ports',
      'Advanced optical microscopes, chemical reagents, and electrical measurement kits',
      'Dedicated mathematical manipulatives and 3D geometric modeling tools',
      'Strict fire safety, eyewash stations, and emergency neutralization kits'
    ],
    content: `
      <p>For students who are curious about the sciences, our advanced laboratories offer the perfect setting for hands-on learning. Fully equipped with the latest scientific equipment and safety measures, these labs provide an ideal environment for conducting experiments and exploring the wonders of biology, chemistry, physics, and more.</p>
      <p>Scientific inquiry and a taste for innovation can only be infused by giving students the necessary openings to do and learn the concepts. Keeping this in mind, the school has designed Physics, Chemistry, Biology, and Mathematics Laboratories that are aligned to the curriculum at hand. Students also have provisions to explore, investigate, and conduct research.</p>
      <p>Each laboratory is maintained by qualified lab attendants and subject teachers, ensuring that practical experimentation bridges the gap between theoretical textbook concepts and tangible reality.</p>
    `
  },
  {
    id: 'fac-2',
    slug: 'xperimentor-lab',
    title: 'Xperimentor Lab',
    category: 'stem',
    categoryLabel: 'STEM & Technology',
    img: '/facilities/th-20.jpg',
    extraImages: [
      '/facilities/deep/1-38.jpg',
      '/facilities/deep/2-24.jpg',
      '/facilities/deep/3-18.jpg',
      '/facilities/deep/4-12.jpg',
      '/facilities/deep/5-6.jpg',
      '/facilities/deep/6-5.jpg'
    ],
    tagline: 'Mobile hands-on STEM science experimentation kits transforming classrooms into experiential hubs.',
    specs: [
      { label: 'Target Grades', value: 'Grade VI to Grade X' },
      { label: 'Format', value: 'Mobile Laboratory Stations' },
      { label: 'Group Ratio', value: '6 Student Cohorts per Kit' },
      { label: 'Pedagogy', value: 'Inquiry-Based Learning' }
    ],
    highlights: [
      'Comprehensive experiment kits directly matched to CBSE textbook chapters',
      'Individual inquiry workbooks for hypothesis testing, observation, and deduction',
      'Empowers collaborative teamwork, peer discussion, and critical deduction',
      'Brings complex chemical reactions, physics mechanics, and biological dissections to desk-level'
    ],
    content: `
      <p>Xperimentor mobile laboratories are in place for the students of grades VI to X. Xperimentor revolutionizes Science Education with a dynamic blend of hands-on tools, modern pedagogy, and technology to cultivate a genuine love for science, fostering essential 21st-century skills in students.</p>
      <p>Curiosity knows no bounds in our future-focused learning environment. Xperimentor brings a blend of hands-on learning with curriculum-based content, assessment, and training to offer a holistic learning experience. It has transformed classrooms into the best STEM learning spaces.</p>
      <p>Xperimentor has tools and kits configured for 6 groups in a class for every experiment given in the science syllabus. Students are given an inquiry-based workbook where they record findings and master scientific concepts through practical discovery.</p>
    `
  },
  {
    id: 'fac-3',
    slug: 'adventure-classes',
    title: 'Adventure Classes',
    category: 'adventure',
    categoryLabel: 'Active & Adventure',
    img: '/facilities/2.jpg',
    extraImages: [
      '/facilities/deep/1-4.jpg',
      '/facilities/deep/2-3.jpg',
      '/facilities/deep/3-3.jpg',
      '/facilities/deep/4-2.jpg',
      '/facilities/deep/5-2.jpg',
      '/facilities/deep/6-1.jpg',
      '/facilities/deep/7-1.jpg',
      '/facilities/deep/8.jpg'
    ],
    tagline: 'Professional tactical obstacle courses, survival skills, and commando rope activities by PODAC Bootcamp.',
    specs: [
      { label: 'Participation', value: 'Grade I to Grade IX' },
      { label: 'Training Partner', value: 'PODAC Bootcamp Pvt Ltd' },
      { label: 'Instructors', value: 'Ex-Police Public School Veterans' },
      { label: 'Activities', value: 'Archery, Rope, Obstacles' }
    ],
    highlights: [
      'Professional training in Olympic Archery, concentration, and precision target shooting',
      'Obstacle courses: Commando Walk, Commando Crawl, Rope Climbing, and Ladder Scaling',
      'Tarzan Swing, balance beams, and tactical survival agility circuits',
      'Builds resilience, grit, teamwork, and fear-mastery under certified safety instructors'
    ],
    content: `
      <p>The school has introduced adventure skill training sessions to all students from grades 1 to 9. These are conducted by PODAC Bootcamp Private Limited. The entire course is run under the guidance of Director Fahmida Begam and founder Sheik Irfan, who previously trained at Police Public School, Karnataka State Reserve Police 3rd Battalion, Bangalore.</p>
      <p>This program encourages students to engage with nature, develop practical survival skills, and participate in physically challenging, adventurous tasks. This training is more than recreation; it plays a crucial role in building physical endurance, mental grit, and collaborative leadership.</p>
      <p>Children master archery, obstacle bootcamps, and rope activities like commando walk, commando crawl, rope climbing, rope ladder climbing, and Tarzan swing under international-standard safety harnesses.</p>
    `
  },
  {
    id: 'fac-4',
    slug: 'ai-robotics',
    title: 'AI & Robotics Lab',
    category: 'stem',
    categoryLabel: 'STEM & Technology',
    img: '/facilities/3.jpg',
    extraImages: [
      '/facilities/deep/1-37.jpg',
      '/facilities/deep/2-23.jpg',
      '/facilities/deep/3-17.jpg',
      '/facilities/deep/4-11.jpg'
    ],
    tagline: 'Coding, machine learning, and robotics engineering powered by Tinker Space curriculum.',
    specs: [
      { label: 'Covered Grades', value: 'Grade V to Grade X' },
      { label: 'Program Partner', value: 'Tinker Space Learning' },
      { label: 'Tech Stack', value: 'Microcontrollers, Block & Python' },
      { label: 'Skills Focus', value: 'Algorithmic Thinking & Automation' }
    ],
    highlights: [
      'Hands-on assembly of autonomous rovers, robotic arms, and sensor-based devices',
      'Introduction to artificial intelligence logic, decision trees, and machine perception',
      'Block-based and Python programming for real-world hardware integration',
      'Preparation for regional and national STEM robotics exhibitions and hackathons'
    ],
    content: `
      <p>By integrating AI and robotics into our school curricula, we equip the next generation with the knowledge, skills, and mindset necessary to thrive in an increasingly technological world. Today is the era of Artificial Intelligence, and developing technical literacy is essential for tomorrow’s leaders.</p>
      <p>AI and robotics require students to think critically and solve complex problems. These subjects encourage analytical thinking, creativity, and logical reasoning—skills that are valuable across various disciplines. This fosters a mindset of entrepreneurship and continuous innovation.</p>
      <p>Grades from V to X are provided with AI, Coding, and Robotics classes conducted by Tinker Space, ensuring students master algorithms, sensor arrays, machine learning fundamentals, and micro-controller automation.</p>
    `
  },
  {
    id: 'fac-5',
    slug: 'boscos-adventure-park',
    title: 'Bosco’s Adventure Park',
    category: 'adventure',
    categoryLabel: 'Active & Adventure',
    img: '/facilities/th.jpg',
    extraImages: [
      '/facilities/deep/1-6.jpg',
      '/facilities/deep/2-5.jpg',
      '/facilities/deep/3-5.jpg',
      '/facilities/deep/4-4.jpg',
      '/facilities/deep/5-3.jpg',
      '/facilities/deep/6-2.jpg',
      '/facilities/deep/7-2.jpg',
      '/facilities/deep/IMG_0099.jpg'
    ],
    tagline: 'Custom-designed indoor adventure play world promoting motor development and cognitive agility in kids.',
    specs: [
      { label: 'Target Audience', value: 'Kindergarten to Primary' },
      { label: 'Facility Type', value: 'All-Weather Indoor Park' },
      { label: 'Flooring', value: 'Cushioned Anti-Shock Vinyl Mats' },
      { label: 'Safety Feature', value: 'Child-Safe Rounded Modules' }
    ],
    highlights: [
      'Multi-level ball pools, spiral slides, crawling tunnels, and sensory rockers',
      'Soft-obstacle hurdles, balance caterpillars, and collaborative puzzle stations',
      'Weather-independent indoor play space accessible year-round in all seasons',
      'Develops fine and gross motor agility, balance, and positive socialization'
    ],
    content: `
      <p>Bosco’s Adventure Park is an indoor adventure park created especially for our younger students. This is more than just a playground; it’s a comprehensive environment designed to promote physical activity, cognitive development, social skills, and emotional well-being.</p>
      <p>In today’s fast-paced world, providing children with safe, engaging, and active play environments is more important than ever. An indoor adventure park offers an exciting space where they can explore, learn, and have fun year-round, regardless of weather conditions.</p>
      <p>Activities include spiral slides, rope climbing bridges, ball pools, rockers, puzzles, catch-and-throw targets, caterpillar crawlers, and agility hurdles. Equipped with soft vinyl protective mats, the park ensures maximum safety and joyful physical expression.</p>
    `
  },
  {
    id: 'fac-6',
    slug: 'computer-lab',
    title: 'Computer Lab',
    category: 'stem',
    categoryLabel: 'STEM & Technology',
    img: '/facilities/th-1.jpg',
    extraImages: [
      '/facilities/deep/1-7.jpg'
    ],
    tagline: 'High-speed networked computing workstations for programming, multimedia design, and digital literacy.',
    specs: [
      { label: 'PC Ratio', value: '1:1 Individual Workstation' },
      { label: 'Capacity', value: 'Full Class Strength (50+ PCs)' },
      { label: 'Connectivity', value: 'High-Speed Fiber Broadband' },
      { label: 'Software', value: 'Coding, Design & Office Tools' }
    ],
    highlights: [
      'Each student has an individual high-performance PC with zero sharing during lab sessions',
      'Curriculum covers typing proficiency, algorithmic coding, presentation design, and cyber safety',
      'High-speed filtered broadband with strict firewall protections for child safety',
      'UPS power backup ensuring uninterrupted digital learning sessions'
    ],
    content: `
      <p>In today’s digital age, technological literacy is paramount. Our school boasts cutting-edge computing facilities including computer labs equipped with modern hardware and educational software suites.</p>
      <p>Students have access to coding classes, multimedia design tools, and digital productivity programs that prepare them for success in a digitized global environment. Our computer lab hosts full class strength with each student assigned an individual PC.</p>
      <p>Students make full use of the opportunity to discover their inherent digital talents, mastering applications in digital art, programming, presentation creation, and web research.</p>
    `
  },
  {
    id: 'fac-7',
    slug: 'smart-classes',
    title: 'Smart Classes',
    category: 'academic',
    categoryLabel: 'Academics & Culture',
    img: '/facilities/th-2.jpg',
    extraImages: [
      '/facilities/deep/1-9.jpg',
      '/facilities/deep/2-7.jpg'
    ],
    tagline: 'Interactive digital classrooms with HD projectors, touch displays, and audiovisual curriculum modules.',
    specs: [
      { label: 'Technology', value: 'Interactive Smart Boards & HD Projectors' },
      { label: 'Audio System', value: 'In-Room Acoustic Amplification' },
      { label: 'Coverage', value: 'Campus-wide Classrooms' },
      { label: 'Content', value: 'CBSE Digitized 2D/3D Curriculum' }
    ],
    highlights: [
      '3D animated explanations for complex scientific, mathematical, and historical concepts',
      'High-definition projection screens and interactive stylus annotation boards',
      'Ergonomically designed desks with spacious, natural cross-ventilation',
      'Transforms passive lectures into dynamic, participatory multimedia discussions'
    ],
    content: `
      <p>Our classrooms are more than just learning spaces; they are hubs of innovation and creativity. Equipped with interactive whiteboards, high-definition projectors, and seamless digital connectivity, these rooms facilitate engaging lessons that bring learning to life.</p>
      <p>Spacious, well-illuminated, and ventilated, each classroom is engineered to maximize student comfort, posture, and concentration throughout the school day.</p>
      <p>Digital content libraries mapped directly to CBSE standards allow teachers to illustrate abstract ideas with vibrant simulations, historical footage, and real-time assessments.</p>
    `
  },
  {
    id: 'fac-8',
    slug: 'eca-activities',
    title: 'ECA Activities (Extracurricular Arts & Martial Skills)',
    category: 'adventure',
    categoryLabel: 'Active & Adventure',
    img: '/facilities/th-3.jpg',
    extraImages: [
      '/facilities/deep/1-20.jpg',
      '/facilities/deep/1-21.jpg',
      '/facilities/deep/1-22.jpg',
      '/facilities/deep/1-23.jpg',
      '/facilities/deep/2-16.jpg',
      '/facilities/deep/3-11.jpg',
      '/facilities/deep/1-24.jpg',
      '/facilities/deep/2-17.jpg',
      '/facilities/deep/1-25.jpg',
      '/facilities/deep/1-26.jpg',
      '/facilities/deep/1-27.jpg'
    ],
    tagline: 'Comprehensive Saturday bagless day enrichment covering Music, Classical Dance, Culinary Arts, and Martial Arts.',
    specs: [
      { label: 'Disciplines', value: 'Music, Dance, Culinary, Martial Arts' },
      { label: 'Schedule', value: 'Dedicated Saturday Bagless Days' },
      { label: 'Clubs', value: 'Scouts, Guides, Cubs & Bulbuls' },
      { label: 'Instructors', value: 'Professional Master Coaches' }
    ],
    highlights: [
      'Instrumental Music: Structured Keyboard and Guitar training with live performances',
      'Classical Dance: Bharatanatyam mudras, expressive footwork, and spiritual heritage',
      'Crafts & Culinary: Needlework, embroidery design, and Home Science practical cooking',
      'Self-Defense & Speed: Karate, Taekwondo belt gradings, and competitive Speed Skating'
    ],
    content: `
      <p>Beyond academics lies a world of extracurricular activities that enrich student life. From music academies to martial dojos; from culinary labs to classical dance studios—our school provides dedicated spaces where every student discovers their latent passion.</p>
      <p>We offer a rich palette of programs on our Saturday "Bagless Days", allowing students to focus on hands-on talent development. Disciplines include:</p>
      <ul>
        <li><strong>Keyboard & Guitar Music:</strong> Personalized training in rhythm, sight-reading, chords, and live stage recitals.</li>
        <li><strong>Bharatanatyam Classical Dance:</strong> Indian classical tradition focusing on mudras, balance, rhythm, and expressive storytelling.</li>
        <li><strong>Stitching & Embroidery:</strong> Master guided textile decoration, decorative pillowcases, patches, and fine motor dexterity.</li>
        <li><strong>Home Science & Culinary Arts:</strong> Kitchen safety, meal planning, nutrition, and annual "Cooking Test & Exhibition" showcases.</li>
        <li><strong>Karate & Taekwondo:</strong> Traditional martial arts emphasizing discipline, kata, sparring, stamina, and self-defense.</li>
        <li><strong>Speed & Artistic Skating:</strong> Balance, agility, and endurance training preparing students for state and district meets.</li>
      </ul>
    `
  },
  {
    id: 'fac-9',
    slug: 'transport-facility',
    title: 'Transport Facility',
    category: 'care',
    categoryLabel: 'Health & Campus Care',
    img: '/facilities/th-4.jpg',
    extraImages: [
      '/facilities/deep/1-10.jpg'
    ],
    tagline: 'Safe, punctual, GPS-monitored fleet of 14 school buses serving over 600 students across Kaup and Udupi.',
    specs: [
      { label: 'Bus Fleet', value: '14 Modern Buses' },
      { label: 'Daily Commuters', value: '600+ Students Daily' },
      { label: 'Staffing', value: 'Trained Driver & Attendant on Every Bus' },
      { label: 'Coverage', value: 'Wide Taluk Radius (Shirva, Kaup, Udupi)' }
    ],
    highlights: [
      'Responsible verified drivers and caring female conductors on every route',
      'Fixed pickup and drop-off schedules with strict safety protocols during transit',
      'First aid kits, emergency fire extinguishers, and speed governors installed in every vehicle',
      'Safe door-to-door transit for rural and urban neighborhoods across the district'
    ],
    content: `
      <p>The school transportation facility is designed to provide a safe, dependable, and comfortable mode of transport. Every bus is staffed with a responsible driver and an attentive conductor to ensure student welfare throughout the journey.</p>
      <p>The school reaches out to students across extensive commutable distances. Our fleet of 14 dedicated buses safely transports more than 600 students to school and back every single day.</p>
      <p>Regular vehicle maintenance, speed governance, and strict behavioral guidelines on transit ensure utmost peace of mind for parents.</p>
    `
  },
  {
    id: 'fac-10',
    slug: 'counselling',
    title: 'Guidance & Student Counselling',
    category: 'care',
    categoryLabel: 'Health & Campus Care',
    img: '/facilities/th-5.jpg',
    extraImages: [
      '/facilities/deep/1-11.jpg',
      '/facilities/deep/2-8.jpg',
      '/facilities/deep/3-6.jpg'
    ],
    tagline: 'Certified adolescent guidance, emotional wellness support, and family counseling.',
    specs: [
      { label: 'Counsellors', value: '3 Dedicated Professional Mentors' },
      { label: 'Scope', value: 'Emotional, Academic & Career Guidance' },
      { label: 'Confidentiality', value: '100% Private Counselling Suite' },
      { label: 'Parent Engagement', value: 'Regular Family Consultation Sessions' }
    ],
    highlights: [
      'Empathetic one-on-one sessions helping students navigate stress and academic anxieties',
      'Career mapping and aptitude guidance for high school and senior secondary learners',
      'Interactive workshops on emotional intelligence, conflict resolution, and anti-bullying',
      'Collaborative parent counseling strengthening supportive home environments'
    ],
    content: `
      <p>Our student counselling center provides holistic development and creates an overwhelmingly positive impact on our school community. It prepares students to face challenges with confidence, instills moral integrity, and nurtures emotional resilience.</p>
      <p>The guidance facility has helped students discover constructive pathways, enlightened parents, and fostered stronger family bonds. We are proud to have dedicated, competent, and experienced counsellors available on campus.</p>
      <p>Sessions are held in a tranquil, confidential environment where young minds feel heard, supported, and empowered to flourish academically and personally.</p>
    `
  },
  {
    id: 'fac-11',
    slug: 'school-nurse',
    title: 'Campus Health Center & School Nurse',
    category: 'care',
    categoryLabel: 'Health & Campus Care',
    img: '/facilities/th-6.jpg',
    extraImages: [
      '/facilities/deep/1-12.jpg',
      '/facilities/deep/2-9.jpg'
    ],
    tagline: 'Full-time campus infirmary providing immediate first aid, triage, and preventative health monitoring.',
    specs: [
      { label: 'Staffing', value: 'Full-time Certified Resident Nurse' },
      { label: 'Facility', value: 'Equipped Multi-Bed Health Suite' },
      { label: 'Emergency Care', value: 'Ambulance & Hospital Tie-up' },
      { label: 'Checkups', value: 'Annual Pediatric Health Screenings' }
    ],
    highlights: [
      'Immediate first-aid intervention for minor injuries, fevers, and medical concerns',
      'Comprehensive maintenance of student health and medical immunization records',
      'Annual vision, dental, and general physical fitness checkup drives',
      'Health awareness workshops on personal hygiene, hydration, and nutrition'
    ],
    content: `
      <p>The health and well-being of our students is of paramount importance. Our on-campus health center is staffed by trained medical professionals who provide immediate attention for any health issues that arise during school hours.</p>
      <p>Regular health checkups and wellness programs ensure comprehensive physical well-being. The School Nurse is actively responsible for monitoring student physical health, emergency triage, and fostering clean hygiene habits.</p>
      <p>The infirmary is equipped with medical beds, essential pharmaceuticals, oxygen support, and immediate referral networks with nearby hospitals.</p>
    `
  },
  {
    id: 'fac-12',
    slug: 'school-band',
    title: 'School Brass & Pipe Band',
    category: 'academic',
    categoryLabel: 'Academics & Culture',
    img: '/facilities/th-7.jpg',
    extraImages: [
      '/facilities/deep/1-13.jpg',
      '/facilities/deep/2-10.jpg'
    ],
    tagline: 'Prestigious 50-member student ceremonial band leading parades, sports meets, and national celebrations.',
    specs: [
      { label: 'Cohort Size', value: '50 Talented Musicians' },
      { label: 'Eligibility', value: 'Grade VI Onwards with Musical Aptitude' },
      { label: 'Instruments', value: 'Drums, Bugles, Flutes, Cymbals' },
      { label: 'Appearances', value: 'Sports Day, Republic Day, Patron’s Feast' }
    ],
    highlights: [
      'Imparts rigorous training in tempo, musical timing, posture, and synchronized drill marching',
      'Leads ceremonial guard of honors for visiting dignitaries, bishops, and CBSE officials',
      'Nurtures team synergy, musical discipline, and pride in representing the institution',
      'Equipped with premium marching brass, snare drums, bass drums, and ceremonial uniforms'
    ],
    content: `
      <p>Being part of a well-structured school music program fosters discipline, rhythm, and lasting social camaraderie. Don Bosco School Shirva features a distinguished 50-student School Band that performs during all major institutional and national events.</p>
      <p>Students from Grade VI with musical aptitude and a keen ear are initiated into the band. Under professional bandmasters, they master marching drills, percussion cadence, and brass melodies.</p>
      <p>The band stands as a proud symbol of school tradition, inaugurating Annual Sports Meets, Independence Day, and Republic Day ceremonies with majestic fanfare.</p>
    `
  },
  {
    id: 'fac-13',
    slug: 'school-library',
    title: 'Central Knowledge Library',
    category: 'academic',
    categoryLabel: 'Academics & Culture',
    img: '/facilities/th-8.jpg',
    extraImages: [
      '/facilities/deep/1-14.jpg',
      '/facilities/deep/2-11.jpg',
      '/facilities/deep/3-7.jpg'
    ],
    tagline: 'Quiet sanctuary of wisdom housing 8,000+ volumes, 18 scholarly journals, and multilingual periodicals.',
    specs: [
      { label: 'Collection', value: '8,000+ Books & Reference Works' },
      { label: 'Journals', value: '18 Magazines & 4 Daily Newspapers' },
      { label: 'Reading Capacity', value: '150 Students Simultaneously' },
      { label: 'Languages', value: 'English, Kannada, Hindi' }
    ],
    highlights: [
      'Spacious, well-lit reading halls with individual study carrels and collaborative tables',
      'Extensive fiction, non-fiction, encyclopedias, competitive exam guides, and biographies',
      'Automated digital cataloging and barcode issue system for rapid borrowing',
      'Dedicated weekly library reading hours fostering lifelong literary appreciation'
    ],
    content: `
      <p>A school library is the heart and intellectual center of academic life. Our library is a treasure trove of knowledge, housing an extensive collection of books, academic journals, periodicals, and digital resources.</p>
      <p>Quiet reading areas and collaborative study spaces make it an ideal environment for in-depth research, recreational reading, and group projects. Accommodating 150 students simultaneously, the library caters to every grade level.</p>
      <p>We take pride in maintaining over 8,000 carefully curated titles, 18 national journals and magazines, and 4 daily newspapers in both English and Kannada, cultivating informed global perspectives.</p>
    `
  },
  {
    id: 'fac-14',
    slug: 'audio-visual-hall',
    title: 'Audio Visual Hall',
    category: 'academic',
    categoryLabel: 'Academics & Culture',
    img: '/facilities/th-9.jpg',
    extraImages: [
      '/facilities/deep/1-15.jpg',
      '/facilities/deep/2-12.jpg',
      '/facilities/deep/3-8.jpg',
      '/facilities/deep/4-5.jpg'
    ],
    tagline: 'Specialized 100-seat digital screening chamber for debates, seminars, and documentary screenings.',
    specs: [
      { label: 'Capacity', value: '100 Comfortable Theatre Seats' },
      { label: 'AV Setup', value: 'Surround Acoustic Sound & Large Projection' },
      { label: 'Function', value: 'Seminars, Debates, Film Studies' },
      { label: 'Ambiance', value: 'Acoustically Treated & Air-Cooled' }
    ],
    highlights: [
      'Acoustically balanced auditorium space tailored for crystal-clear debate and voice projection',
      'Large projection screen for scientific documentaries, historical footage, and guest lectures',
      'Platform for inter-house elocutions, quiz competitions, and teacher training seminars',
      'Encourages active discussion, critical inquiry, and analytical presentation skills'
    ],
    content: `
      <p>The school caters to the cultural and social development of students. Various curricular and co-curricular subjects involving role-play, geographical documentaries, and cultural symposiums require a dedicated multimedia space.</p>
      <p>Our Audio Visual Hall provides a modern arena where students participate in debates, group discussions, and film screenings to develop reasoned perspectives on world affairs.</p>
      <p>Equipped with acoustic sound management and comfortable stepped seating for 100 students, the AV hall is an indispensable asset for innovative pedagogy.</p>
    `
  },
  {
    id: 'fac-15',
    slug: 'auditorium',
    title: 'Grand School Auditorium',
    category: 'academic',
    categoryLabel: 'Academics & Culture',
    img: '/facilities/th-10.jpg',
    extraImages: [
      '/facilities/deep/1-16.jpg',
      '/facilities/deep/2-13.jpg',
      '/facilities/deep/3-9.jpg',
      '/facilities/deep/4-6.jpg'
    ],
    tagline: 'Vast 800-seat theatrical hall with elevated stage and professional stage lighting for school galas.',
    specs: [
      { label: 'Seating Capacity', value: '800 Audience Members' },
      { label: 'Stage', value: 'Large Elevated Performing Arts Stage' },
      { label: 'Lighting', value: 'Dynamic Stage Spotlights & Dimming' },
      { label: 'Usage', value: 'Annual Days, Convocation, Competitions' }
    ],
    highlights: [
      'Accommodates large gathering events including Annual Days, Kinder Expos, and Valedictory galas',
      'Spacious elevated stage with backstage green rooms for drama, dance, and musicals',
      'Professional sound engineering system delivering balanced audio to every seat',
      'Versatile venue hosting district conferences, inter-school fests, and musical concerts'
    ],
    content: `
      <p>The school boasts a vast and spacious auditorium with a capacity to comfortably seat 800 students and guests. A landmark of campus infrastructure, it is the heartbeat of student cultural expression.</p>
      <p>Various cultural, educational, and spiritual activities are held throughout the year, from glittering Annual Day dramas to inspirational convocation ceremonies.</p>
      <p>With an elevated proscenium stage, specialized acoustics, and generous seating aisles, the auditorium provides an inspiring venue for young performers to shine before large audiences.</p>
    `
  },
  {
    id: 'fac-16',
    slug: 'advance-ro-purification-and-sanitation-facilities',
    title: 'Advance RO Purification & Sanitation',
    category: 'care',
    categoryLabel: 'Health & Campus Care',
    img: '/facilities/th-11.jpg',
    extraImages: [
      '/facilities/deep/1-17.jpg',
      '/facilities/deep/2-14.jpg',
      '/facilities/deep/3-10.jpg'
    ],
    tagline: 'Multi-stage Reverse Osmosis drinking water filtration and hygienic restroom sanitation complexes.',
    specs: [
      { label: 'Purification System', value: 'Commercial Grade Multi-Stage RO' },
      { label: 'Testing Frequency', value: 'Certified Microbiological Lab Tests' },
      { label: 'Sanitation Units', value: '14 Modern Segregated Washrooms' },
      { label: 'Hygiene Maintenance', value: 'Continuous Disinfection Rounds' }
    ],
    highlights: [
      'Multi-stage RO purification removing dissolved impurities and pathogens for pure drinking water',
      'Stainless steel drinking fountains distributed across every floor and playground wing',
      'Segregated, hygienic restrooms for girls and boys with continuous running water and soap dispensers',
      'Eco-friendly waste disposal and strict campus cleanliness protocols'
    ],
    content: `
      <p>At our school, we prioritize the health and well-being of our students by ensuring continuous access to clean, safe drinking water. The school is equipped with a high-capacity commercial Reverse Osmosis (RO) purification system.</p>
      <p>The filtration process thoroughly removes contaminants, excess salts, and microbial impurities, supplying pure, refreshing drinking water at convenient points across the campus.</p>
      <p>We maintain immaculate, modern sanitation facilities. Restrooms are segregated, equipped with sanitary amenities, and sanitized on regular schedules to prevent the spread of infections and ensure student dignity.</p>
    `
  },
  {
    id: 'fac-17',
    slug: 'cctv-security',
    title: 'CCTV Surveillance & Campus Security',
    category: 'care',
    categoryLabel: 'Health & Campus Care',
    img: '/facilities/th-12.jpg',
    extraImages: [
      '/facilities/deep/1-18.jpg'
    ],
    tagline: '24/7 CCTV surveillance network, gated access control, and dedicated security guards.',
    specs: [
      { label: 'Camera Coverage', value: 'Classrooms, Corridors, Gates & Grounds' },
      { label: 'Monitoring', value: '24x7 Real-Time Security Desk' },
      { label: 'Guard Presence', value: 'Trained Uniformed Security Guards' },
      { label: 'Access Control', value: 'Visitor Logging & Controlled Entry' }
    ],
    highlights: [
      'Strategically positioned high-definition CCTV cameras capturing entry points, playgrounds, and halls',
      'Manned perimeter gates verifying all visitors, parents, and delivery vehicles',
      'Zero-tolerance child protection framework with strict authorization for student pickup',
      'Continuous security presence providing a safe, peaceful learning haven for children'
    ],
    content: `
      <p>The safety and security of our students, faculty, and visitors are of paramount importance. To ensure a vigilant and secure environment, we have implemented a comprehensive surveillance architecture.</p>
      <p>A network of high-resolution CCTV cameras monitors campus gates, corridors, playgrounds, and common zones 24 hours a day, recording footage with centralized backup.</p>
      <p>The campus is staffed by experienced security personnel stationed at all perimeter access points. This unwavering commitment to safety fosters trust and peace of mind for every family in our school.</p>
    `
  },
  {
    id: 'fac-18',
    slug: 'elevator',
    title: 'Campus Elevator & Barrier-Free Access',
    category: 'care',
    categoryLabel: 'Health & Campus Care',
    img: '/facilities/th-13.jpg',
    extraImages: [
      '/facilities/deep/1-19.jpg',
      '/facilities/deep/2-15.jpg'
    ],
    tagline: 'Modern passenger elevator ensuring smooth, inclusive vertical transit across all school floors.',
    specs: [
      { label: 'Standard', value: 'CBSE Barrier-Free Accessibility Norms' },
      { label: 'Coverage', value: 'Ground Floor to Upper Levels' },
      { label: 'Accessibility', value: 'Wheelchair Friendly with Auto Doors' },
      { label: 'Safety', value: 'Emergency Rescue & Power Backup' }
    ],
    highlights: [
      'Ensures barrier-free inclusive access for differently-abled students and injured children',
      'Spacious cabin accommodates wheelchairs and medical stretchers comfortably',
      'Equipped with automatic emergency leveling, alarm communication, and backup power',
      'Fulfills national and CBSE inclusion mandates for equitable school access'
    ],
    content: `
      <p>The school is equipped with a modern passenger elevator in strict alignment with CBSE guidelines for inclusive education and barrier-free access for differently-abled children.</p>
      <p>Students with physical limitations, injured children, staff members, and elderly visitors can easily access any floor of the school building without stairs.</p>
      <p>With automatic doors, smooth operation, safety sensors, and direct connection to backup generators, the elevator guarantees safe and equitable access for all.</p>
    `
  }
];

export const facilityStats = [
  { val: '18', label: 'Specialized Facilities', sub: 'Comprehensive Infrastructure' },
  { val: '5', label: 'Modern Laboratories', sub: 'STEM & Computer Suites' },
  { val: '8,000+', label: 'Library Volumes', sub: 'Books, Journals & Periodicals' },
  { val: '14', label: 'Safe Transit Buses', sub: '600+ Daily Commuters' }
];
