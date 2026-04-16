export interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  liveLink: string;
  github_client: string;
  github_server?: string;
  challenges?: string[];
  highlights?: string[];
  keyFeatures: string[];
}

export const projects: Project[] = [
  {
    name: "TutorByte",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Better Auth",
    ],
    image: "/images/projects/TutorByte online tutoring platform homepage.png",
    description:
      "A full-featured online tutor booking platform where students find and book tutors, manage sessions, and leave reviews — backed by secure role-based authentication.",
    liveLink: "https://tutorbyte.vercel.app/",
    github_client: "https://github.com/abubakar308/TutorByte-Frontend",
    github_server: "https://github.com/abubakar308/TutorByte-Backend",
    highlights: [
      "End-to-end tutor discovery, session booking, and review workflow.",
      "Availability management dashboard for tutors with conflict-free scheduling.",
      "Role-based access control with separate dashboards for students, tutors, and admins.",
    ],
    challenges: [
      "Implemented role-based auth (student, tutor, admin) with protected routes using Better Auth and middleware guards.",
      "Designed a conflict-free time-slot booking engine with transactional safety using Prisma transactions.",
    ],
    keyFeatures: ["Role-based Auth", "Slot Booking", "Tutor Reviews"],
  },
  {
    name: "FoodHub",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/images/projects/FoodHub homepage with vibrant food display.png",
    description:
      "A multi-vendor meal ordering platform where users browse meals, place orders, and track delivery while providers manage menus and orders through a dedicated dashboard.",
    liveLink: "https://foodhub-client-six.vercel.app/",
    github_client: "https://github.com/abubakar308/FoodHub-Client",
    github_server: "https://github.com/abubakar308/FoodHub-server",
    highlights: [
      "Vendor dashboard for full menu, pricing, and order management.",
      "Real-time order progress tracking for customers from placement to delivery.",
      "AI-powered search suggestions for meals, categories, and providers.",
    ],
    challenges: [
      "Modeled a complex multi-vendor order lifecycle with provider-user relations in Prisma schemas.",
      "Secured all API routes with JWT and role-aware authorization middleware.",
    ],
    keyFeatures: ["Multi-vendor", "Order Tracking", "AI Search"],
  },
  {
    name: "Certificate Management System",
    stack: [
      "React",
      "TypeScript",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    image: "/images/projects/Certificate management dashboard overview.png",
    description:
      "A secure, role-based academic portal that automates certificate request workflows and multi-level approval processes for students and faculty.",
    liveLink: "https://certificate-management-system-front.vercel.app/",
    github_client:
      "https://github.com/City-University-BD/certificate-management-system-front-end",
    github_server:
      "https://github.com/City-University-BD/certificate-management-system-back-end",
    highlights: [
      "Automated certificate request and multi-level approval pipeline.",
      "Role-based access controls for students, faculty, and admins.",
      "Status tracking for every request stage from submission to issuance.",
    ],
    challenges: [
      "Built a multi-level approval workflow that routes requests across admin and faculty roles in the correct sequence.",
      "Ensured consistent certificate state transitions with server-side validation to prevent invalid state changes.",
    ],
    keyFeatures: ["Auto Approvals", "RBAC System", "Live Tracking"],
  },
  {
    name: "MediVendor",
    stack: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
    image: "/images/projects/Medicine delivery app interface design.png",
    description:
      "A medical e-commerce platform with secure payment integration, live inventory tracking, and real-time order management for buyers and sellers.",
    liveLink: "https://medivendor-2b953.web.app/",
    github_client: "https://github.com/abubakar308/medivendor-client",
    github_server: "https://github.com/abubakar308/medivendor-server",
    highlights: [
      "Secure checkout with payment-ready purchase flow.",
      "Admin controls for product listing, inventory, and order operations.",
      "Query-based medicine filtering by category, brand, and price range.",
    ],
    challenges: [
      "Implemented real-time inventory synchronization to keep stock states accurate across concurrent purchases.",
      "Optimized query-based filtering with indexed fields to handle large medicine catalogs efficiently.",
    ],
    keyFeatures: ["Medical Shop", "Payments", "Inventory"],
  },
  {
    name: "Learn Together",
    image: "/images/projects/Learn Together platform homepage preview.png",
    stack: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Firebase",
    ],
    description:
      "A tutor booking platform allowing students to explore tutors, book sessions, and manage their learning progress with Firebase-backed authentication.",
    liveLink: "https://online-tutor-booking-pla-5a98e.web.app",
    github_client: "https://github.com/abubakar308/learn-together-client",
    github_server: "https://github.com/abubakar308/learn-together-server",
    highlights: [
      "Tutor browsing with a streamlined, multi-step booking journey.",
      "Student-friendly flow for session scheduling and progress management.",
      "Secure authentication and auth-protected booking routes.",
    ],
    challenges: [
      "Protected booking routes with authentication-aware guards to prevent unauthenticated session bookings.",
      "Handled session-based tutor booking with schedule validation to avoid double-bookings.",
    ],
    keyFeatures: ["Tutor Discovery", "Secure Booking", "Auth Guards"],
  },
  {
    name: "AllStar Equipment Store",
    image: "/images/projects/Allstar Equipment sports gear collection.png",
    stack: [
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
    ],
    description:
      "A sports equipment marketplace with Firebase authentication, category filtering, cart management, and an optimized checkout experience.",
    liveLink: "https://sport-equipment-online-store.web.app",
    github_client: "https://github.com/abubakar308/AllStar-Equipment-client",
    github_server: "https://github.com/abubakar308/AllStar-Equipment-server",
    highlights: [
      "Category-based product browsing with a responsive and intuitive UX.",
      "Authentication-enabled personalized cart and wishlist management.",
      "Consistent filtering and checkout behavior across all device sizes.",
    ],
    challenges: [
      "Stabilized cart state persistence across page refreshes and auth state changes.",
      "Maintained consistent category filtering and checkout behavior across desktop and mobile viewports.",
    ],
    keyFeatures: ["Equipment Shop", "Cart System", "Mobile First"],
  },
  {
    name: "Career Advice",
    image: "/images/projects/Career advice infographic redesign.png",
    stack: [
      "React",
      "React Router",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
      "Context API",
    ],
    description:
      "A platform for career growth offering resume tools, interview preparation resources, and coaching session booking — all in one place.",
    liveLink: "https://career-advice-3eaf3.firebaseapp.com/",
    github_client: "https://github.com/abubakar308/career-addvice",
    github_server: "#",
    highlights: [
      "Career resources covering resume building, interview prep, and coaching.",
      "Simple, clear booking experience with prominent call-to-actions.",
      "Auth-protected advisors and coaching sessions using Firebase Auth.",
    ],
    challenges: [
      "Managed shared booking and user state across multiple route transitions using React Context API.",
      "Integrated auth-protected actions with client-side route guards for coaching bookings.",
    ],
    keyFeatures: ["Resume Tools", "Coaching Flow", "Career Radar"],
  },
];
