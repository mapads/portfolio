// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {

  const teachingSubjects = [
    {
      name: 'Math',
      icon: '/images/icons/math.png',
    },
    {
      name: 'Coding',
      icon: '/images/icons/code.png',
    },
    {
      name: 'Accounting & Economics',
      icon: '/images/icons/finance.png',
    },
    {
      name: 'AI',
      icon: '/images/icons/ai.png',
    },
  ];

  return (
    <main className="p-8 space-y-24 bg-base-200">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <Image 
            src="/images/itamar-bubble.png" 
            alt="Itamar Kamar, Experienced Developer and Business Strategist" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-white-800">Welcome to Itamar Kamar&#39;s Portfolio</h1>
          <p className="text-lg text-white-600">
            With over 19 years as a dedicated educator, 
            13 years of experience in software development, 
            and 9 years in business development, 
            I bring a wealth of knowledge across these domains. 
            Here, you'll find a showcase of my work, 
            from impactful teaching methods to innovative development projects, and strategic business initiatives.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/teaching">
              <button className="btn btn-primary">Explore Teaching</button>
            </Link>
            <Link href="/development">
              <button className="btn btn-secondary">See Development Work</button>
            </Link>
            <Link href="/business-development">
              <button className="btn btn-accent">Business Development Journey</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold text-white-800">Dedicated Educator Across Multiple Disciplines</h2>
        <p className="text-lg text-white-600 mb-8">
          I&#39;ve taught subjects including Math, Coding, Accounting, Economics, and AI. <br/>
          Each course is designed to empower students with real-world skills.
        </p>
        <div className="flex justify-center gap-8">
          {
            teachingSubjects.map((subject, index) => (
              <div key={index} className="text-center">
                <div className='avatar'>
                  <div className='w-24 rounded-full bg-primary p-4'>
                    <Image src={subject.icon} alt={subject.name} width={80} height={80} />
                  </div>
                </div>
                <h4 className="mt-2">{subject.name}</h4>
              </div>
            ))
          }
        </div>
        <Link href="/teaching">
          <button className="btn btn-primary mt-6">Learn More</button>
        </Link>
      </section>

      {/* Development Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 space-y-4">
          {/* Project Thumbnails */}
          <Image src="/images/project1.jpg" alt="Project 1" width={250} height={180} className="rounded-lg shadow-md" />
          <Image src="/images/project2.jpg" alt="Project 2" width={250} height={180} className="rounded-lg shadow-md" />
          <Image src="/images/project3.jpg" alt="Project 3" width={250} height={180} className="rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">Innovative Software Development Projects</h2>
          <p className="text-lg text-gray-600">
            My development career spans from military infrastructure projects to consulting and freelance work, culminating in a suite of projects across finance, AI, education, and more. Each project showcases my technical expertise and commitment to innovative solutions.
          </p>
          <Link href="/development">
            <button className="btn btn-outline">Discover My Development Work</button>
          </Link>
        </div>
      </section>

      {/* Business Development Section */}
      <section className="text-center space-y-6">
        <Image 
          src="/images/business-development.jpg" 
          alt="Business Development Success" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg mx-auto"
        />
        <h2 className="text-3xl font-semibold text-gray-800 mt-8">Business Development with Proven Success</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          With expertise in technology scouting, innovation centers, and leading governmental projects, my business development journey has been defined by strategic growth and impactful solutions. From founding my own company to working as a partner in an investment fund, I help businesses identify and realize their full potential.
        </p>
        <Link href="/business-development">
          <button className="btn btn-primary">Explore My Business Development Journey</button>
        </Link>
      </section>

      {/* Contact Section */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch with Itamar Kamar</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          I&#39;m always open to new opportunities and connections. Whether you're interested in collaborating on a project, learning more about my work, or discussing business opportunities, feel free to reach out.
        </p>
        <Link href="/contact">
          <button className="btn btn-primary">Contact Me</button>
        </Link>
      </section>

    </main>
  );
}