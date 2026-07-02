import styles from '../layout.module.css';

export default function AboutPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>About Us</h1>
      </header>
      <div className={styles.mainContainer} style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
        <h2 style={{ color: '#4CAF50', marginTop: 0 }}>Zoe Farming Ltd</h2>
        <p>
          Zoe Farming Ltd is a leading agricultural business dedicated to sustainable farming and livestock production. 
          We specialize in cultivating premium crop varieties and managing healthy livestock ecosystems to supply 
          our community with clean, fresh, and highly nutritious products.
        </p>
        <p>
          Our mission is centered around cultivating quality and growing opportunities for local farmers through modern, 
          eco-friendly agro-processing methodologies.
        </p>
      </div>
    </>
  );
}
