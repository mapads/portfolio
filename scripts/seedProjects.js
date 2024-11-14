// scripts/seedProjects.js
const mongoose = require('mongoose');
const DevProject = require('../lib/models/DevProject');
require('dotenv').config();

dotenv.config();

const projects = [
  {
    title: "8200 Intelligence Infrastructure",
    startDate: new Date("2012-01-01"),
    finishDate: new Date("2015-12-31"),
    techStack: ["C#", ".NET", "Python"],
    description: "Developed mission-critical infrastructure for intelligence gathering and processing, creating robust systems that met high-security standards and optimized information flow for sensitive data.",
    tags: ["Infrastructure", "Intelligence", "High Security"]
  },
  {
    title: "Cyber Automation Testing Tool",
    startDate: new Date("2015-01-01"),
    finishDate: new Date("2015-12-31"),
    techStack: ["React.js", "Selenium", "Python"],
    description: "Built a dynamic automation testing tool for blackhat solutions, including a dashboard for scheduling, environment selection, and multi-browser testing for seamless QA.",
    tags: ["Automation", "Testing", "Cyber Security"]
  },
  {
    title: "Eden Block Crypto Analysis",
    startDate: new Date("2015-01-01"),
    finishDate: new Date("2016-12-31"),
    techStack: ["Python", "Express", "React.js", "AWS", "BeautifulSoup", "Selenium"],
    description: "Created web crawlers and sentiment analysis tools to track high-interest coins, analyze sentiment, and provide detailed insights for investment strategies. Also developed the company website.",
    tags: ["Cryptocurrency", "Data Analysis", "Web Crawling"]
  },
  {
    title: "David D'or Website and Shopify Store",
    startDate: new Date("2015-01-01"),
    finishDate: new Date("2015-12-31"),
    techStack: ["Webflow", "Shopify"],
    description: "Developed an engaging website for renowned singer David D'or and set up a Shopify store to showcase and sell his art, expanding his digital presence.",
    tags: ["E-commerce", "Web Development", "Art"]
  },
  {
    title: "CompassVGG Investment Analysis Platform",
    startDate: new Date("2016-01-01"),
    finishDate: new Date("2020-12-31"),
    techStack: ["Python", "React.js", "AWS", "BeautifulSoup", "Selenium"],
    description: "Built a suite of tools for analyzing investment opportunities, including sentiment analysis, company web presence monitoring, and OCR for financial reports to assist in investment decisions.",
    tags: ["Investment Analysis", "OCR", "Sentiment Analysis"]
  },
  {
    title: "Zestty Real-Time Advertising Platform",
    startDate: new Date("2020-01-01"),
    finishDate: new Date("2021-12-31"),
    techStack: ["Python", "TensorFlow", "Selenium", "OAuth2.0", "AWS (Cognito, DynamoDB, Lambda, API Gateway)", "React.js", "React Native"],
    description: "Developed two apps, two web applications, and a real-time advertising platform with ML-based customer targeting for brick-and-mortar businesses.",
    tags: ["Advertising", "Real-Time", "Machine Learning"]
  },
  {
    title: "RLM Social Network Platform",
    startDate: new Date("2022-01-01"),
    finishDate: new Date("2022-12-31"),
    techStack: ["React.js", "AWS (API Gateway, DynamoDB, Lambda)", "GraphQL"],
    description: "Built a unique social network where users can connect in real-time by uploading an image to verify identity at the time of joining.",
    tags: ["Social Network", "Real-Time", "User Authentication"]
  },
  {
    title: "Python Complete Educational Platform",
    startDate: new Date("2023-01-01"),
    finishDate: new Date("2023-12-31"),
    techStack: ["React.js", "AWS (Lambda, Cognito, API Gateway, DynamoDB)", "OAuth2.0"],
    description: "Developed a comprehensive coding education platform, including recorded lessons, dynamic links, and secure access to educational content.",
    tags: ["Education", "E-Learning", "Secure Content"]
  },
  {
    title: "Algorithmic Trading Platform",
    startDate: new Date("2022-01-01"),
    finishDate: new Date("2023-12-31"),
    techStack: ["Python", "TensorFlow"],
    description: "Created a machine learning model to predict volatile stock prices using neural networks for high-frequency trading strategies.",
    tags: ["Algorithmic Trading", "ML", "Financial Modeling"]
  },
  {
    title: "MathBot AI Homework Assistant",
    startDate: new Date("2024-01-01"),
    finishDate: new Date("2024-12-31"),
    techStack: ["React.js", "Next.js", "Vercel"],
    description: "Built an AI-powered platform to help students with math homework, providing real-time solutions and explanations through a chatbot.",
    tags: ["Education", "AI", "Homework Assistant"]
  },
  {
    title: "Emersive Game Platform",
    startDate: new Date("2024-01-01"),
    finishDate: new Date("2024-12-31"),
    techStack: ["React.js", "AWS (S3)", "Socket.io"],
    description: "Developed a co-op game with a lobby and shared sessions, allowing players to use their phones as remotes and screen gameplay on a TV.",
    tags: ["Gaming", "Real-Time", "Remote Control"]
  },
  {
    title: "Invoice OCR System",
    startDate: new Date("2023-01-01"),
    finishDate: new Date("2023-12-31"),
    techStack: ["Python", "TensorFlow (CNN)", "LLM"],
    description: "Created an OCR-based platform that scans invoices and outputs structured financial data into Excel for streamlined accounting.",
    tags: ["OCR", "Accounting", "Data Processing"]
  }
];

// Connect to MongoDB and insert projects
async function seedDatabase() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    // Clear existing data
    await DevProject.deleteMany({});
    console.log("Database cleared");

    // Insert projects
    await DevProject.insertMany(projects);
    console.log("Projects have been added successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();