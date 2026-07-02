"use client"; // <--- Add this exact line at the absolute top

import styles from '../layout.module.css';

const projectsList = [
  { 
    id: 1, 
    title: "Organic Crop Farming Initiative", 
    image: "/grr.jpg", 
    text: "We cultivate organic vegetables and fruits across 20+ hectares of land in the Eastern Province. Our crops are 100% pesticide-free and grown using sustainable irrigation methods." 
  },
  { 
    id: 2, 
    title: "Livestock Development Program", 
    image: "/livestock.jpg", 
    text: "Zoe Farming supports over 100 local farmers with livestock like goats, cows, and poultry. We provide veterinary support and training for animal care and dairy production." 
  },
  { 
    id: 3, 
    title: "Community Training & Empowerment", 
    image: "/community.jpg", 
    text: "We run monthly workshops to train youth and women in modern farming, greenhouse management, composting, and agribusiness entrepreneurship." 
  },
  { 
    id: 4, 
    title: "Greenhouse Technology", 
    image: "/green.jpeg", 
    text: "Using smart farming technologies, we’ve installed 5 greenhouses that increase productivity while conserving water and soil health." 
  }
];

export default function ProjectsPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Our Projects</h1>
      </header>
      
      <div className={styles.mainContainer} style={{ background: 'transparent', boxShadow: 'none', padding: '20px 0' }}>
        <div className={styles.projectGrid}>
          {projectsList.map((item) => (
            <div key={item.id} className={styles.projectCard}>
              <img 
                src={item.image} 
                alt={item.title} 
                className={styles.cardImage} 
                onError={(e) => {
                  e.target.src = 'https://placehold.co';
                }}
              />
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
