import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Preston Tang</h1>
          <p className={styles.subtitle}>
            Computer Science Student @ New York University
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Retopia" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/preston-tang" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <Linkedin />
            </a>
            <a href="mailto:prestonltang@nyu.edu" className={styles.socialIcon}>
              <Mail />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FileText />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.aboutText}>
            I'm a Computer Science student at NYU passionate about web development and AI
            <br />
            Currently working part time as a teaching assistant for Applied Internet Technology (CSCI-UA 467)
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectGrid}>
            {/* Project Card 1 */}
            <a href="https://eplanner.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
              <h3 className={styles.projectTitle}>ePlanner</h3>
              <p className={styles.projectDescription}>
                Event planning website
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Express</span>
                <span className={styles.tag}>MongoDB</span>
                <span className={styles.tag}>Google OAuth</span>
              </div>
            </a>

            {/* Project Card 2 */}
            <a href="https://github.com/Retopia/Aegis" target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Aegis</h3>
              <p className={styles.projectDescription}>
                Compact desktop application to secure your files and photos
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>JavaFX</span>
                <span className={styles.tag}>Java Security API</span>
              </div>
            </a>

            {/* Project Card 3 */}
            <a href="https://github.com/Retopia/Evolutionary-Boids" target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Evolutionary Boids</h3>
              <p className={styles.projectDescription}>
                2D simulated ecosystem
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Python</span>
                <span className={styles.tag}>Pygame</span>
              </div>
            </a>

            {/* Project Card 4 */}
            <a href="https://github.com/Retopia/Flappy-Bird-Neuroevolution" target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Flappy Bird Neuroevolution</h3>
              <p className={styles.projectDescription}>
                Teaching AI to play flappy bird using Neuroevolution
              </p>
              <div className={styles.tags}>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>JavaFX</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div>
              <h3 className={styles.skillCategory}>Languages</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillItem}>JavaScript</li>
                <li className={styles.skillItem}>Python</li>
                <li className={styles.skillItem}>Java</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>Frameworks</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillItem}>React</li>
                <li className={styles.skillItem}>Node.js</li>
                <li className={styles.skillItem}>Express</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>Tools</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillItem}>Git</li>
                <li className={styles.skillItem}>Docker</li>
                <li className={styles.skillItem}>Google Cloud Platform</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.skillCategory}>Databases</h3>
              <ul className={styles.skillList}>
                <li className={styles.skillItem}>SQL</li>
                <li className={styles.skillItem}>MongoDB</li>
                <li className={styles.skillItem}>Redis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.sectionContent} ${styles.footerContent}`}>
          <p>© 2025 Preston Tang. Built with React.</p>
          <a href="mailto:prestonltang@nyu.edu" className={styles.footerLink}>prestonltang@nyu.edu</a>
          <a href="https://www.linkedin.com/in/preston-tang" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>linkedin.com/in/preston-tang</a>
          <a href="https://github.com/Retopia" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>github.com/Retopia</a>
        </div>
      </footer>
    </div>
  );
}

export default App;