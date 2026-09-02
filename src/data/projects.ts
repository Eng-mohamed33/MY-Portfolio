export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  year: string;
  scope: string;
  description: string;
  challenge?: string;
  solution?: string;
  image: string;
  gallery?: string[];
  tags: string[];
  github?: string;
  liveUrl?: string;
  demoVideo?: string;
  featured?: boolean;
}

// Add new projects here — each one automatically appears in the
// homepage grid, the full Portfolio page, and gets its own detail page.
export const projects: Project[] = [
  {
    slug: "sales-analytics-dashboard",
    title: "Sales & Business Analytics Dashboard",
    category: "Data Analysis",
    role: "Data Analyst",
    year: "2026",
    scope: "Power BI, Data Visualization",
    description:
      "A professional Power BI dashboard analyzing sales trends, tracking KPIs, and delivering actionable business insights through interactive visualizations.",
    challenge:
      "The business had raw sales data scattered across spreadsheets with no clear way to track performance trends or make data-driven decisions.",
    solution:
      "Built an interactive Power BI dashboard consolidating sales data into clear KPI cards, trend charts, and drill-down views for regional and product-level performance.",
    image: "/powerbi-project.jpg.png",
    tags: ["Power BI", "Data Visualization", "Excel"],
    featured: true,
  },
  {
    slug: "audi-price-prediction",
    title: "Audi Car Price Prediction",
    category: "Machine Learning",
    role: "Machine Learning Developer",
    year: "2026",
    scope: "Regression, Scikit-Learn",
    description:
      "Led the regression phase of a collaborative ML project, achieving an R² score of 0.93 with Random Forest across 10,000+ Audi listings.",
    challenge:
      "Predicting used car prices accurately from noisy, real-world listing data with many categorical and numerical features.",
    solution:
      "Performed thorough EDA and feature engineering, then trained and tuned a Random Forest Regressor, benchmarking it against linear and gradient boosting baselines to reach a 0.93 R² score.",
    image: "/ml-project.jpg.png",
    tags: ["Random Forest", "Scikit-Learn", "EDA", "Python"],
    github: "https://github.com/Eng-mohamed33/Audi-Price-Prediction-",
    featured: true,
  },
  {
    slug: "ai-skills-recognition",
    title: "Team-Based AI Skills Recognition",
    category: "Deep Learning",
    role: "Deep Learning Engineer",
    year: "2026",
    scope: "InceptionV3, Deep Learning",
    description:
      "Built the InceptionV3 architecture for a team deep-learning project, implementing multi-scale feature extraction to optimize recognition accuracy.",
    challenge:
      "Recognizing fine-grained visual skill categories reliably across a varied, team-collected image dataset.",
    solution:
      "Implemented and fine-tuned an InceptionV3-based model, leveraging its multi-scale feature extraction to improve classification accuracy over a baseline CNN.",
    image: "/placeholder.svg",
    tags: ["InceptionV3", "Deep Learning", "Multi-scale Features"],
    github: "https://github.com/Eng-mohamed33/-AI-Skills-Recognition/tree/main",
  },
  {
    slug: "secure-student-records-system",
    title: "Secure Student Records System (SRMS)",
    category: "Security & Backend",
    role: "Security & Backend Developer",
    year: "2026",
    scope: "Python, SQL Server, RBAC",
    description:
      "A secure records management system built with Python and SQL Server, with SHA-256 hashing and Role-Based Access Control (RBAC).",
    challenge:
      "Universities need a way to store sensitive student records securely while giving different staff roles only the access they need.",
    solution:
      "Designed a desktop GUI application backed by SQL Server, using SHA-256 password hashing and a role-based access control layer to restrict actions by user role.",
    image: "/placeholder.svg",
    tags: ["Python", "SQL Server", "CyberSecurity", "Desktop GUI"],
    demoVideo: "/srms-demo.mp4",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
