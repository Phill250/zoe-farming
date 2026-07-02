"use client";
import styles from './layout.module.css';

export default function Home() {
  return (
    <>
      {/* 1. BEAUTIFIED HERO BANNER WITH GREEN OVERLAY */}
      <header 
        className={styles.pageHeader} 
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/grr.jpg')" ,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '520px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 20px'
        }}
      >
        {/* Glassmorphic Container for clean readability */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '800px',
          textAlign: 'center',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{ 
            margin: '0 0 15px 0', 
            fontSize: '3.5rem', 
            fontWeight: '800',
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}>
            Welcome to Zoe Farm
          </h1>
          <p style={{ 
            fontSize: '1.35rem', 
            margin: 0, 
            fontWeight: '300',
            lineHeight: '1.6',
            color: '#e8f5e9'
          }}>
            Your local farm for fresh produce. Cultivating Quality, Growing Opportunities.
          </p>
        </div>
      </header>

      {/* 2. PREMIUM ABOUT SECTION CARD */}
      <div 
        className={styles.mainContainer} 
        style={{ 
          textAlign: 'center', 
          backgroundColor: '#4CAF50', 
          color: 'white',
          padding: '60px 40px',
          borderRadius: '16px',
          marginTop: '-40px', /* Elegant overlap effect over the hero image */
          position: 'relative',
          zIndex: '10',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
      >
        
        
        <h2 style={{ 
          color: '#ffffff', 
          fontSize: '2.5rem', 
          margin: '0 0 20px 0',
          fontWeight: '700'
        }}>
          Who We Are
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem', 
          lineHeight: '1.8', 
          marginBottom: '40px', 
          maxWidth: '750px', 
          margin: '0 auto 40px auto',
          color: '#f1f8e9'
        }}>
          Zoe Farming Ltd is a leading agricultural business dedicated to sustainable farming and premium livestock production. We merge modern technology with eco-friendly methods to deliver raw nutritional quality.
        </p>

        {/* 3. PREMIUM INTERACTIVE BUTTON */}
        <a 
          href="/about" 
          style={{ 
            display: 'inline-block', 
            backgroundColor: '#ffffff', 
            color: '#2e7d32', 
            fontSize: '1.1rem', 
            padding: '16px 40px', 
            textDecoration: 'none', 
            fontWeight: '700', 
            borderRadius: '50px', /* Modern pill shape */
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
            letterSpacing: '0.5px',
            transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
          }}
        >
          Explore Our Story &rarr;
        </a>
      </div>
    </>
  );
}
