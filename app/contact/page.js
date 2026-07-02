import styles from '../layout.module.css';

export default function ContactPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <h1>Contact Us</h1>
      </header>
      <div className={styles.mainContainer} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop:'100px', height:'600px' }}>
        <div>
          <h2 style={{ color: '#4CAF50', marginTop: 0 }}>Get in Touch</h2>
          <p style={{ lineHeight: '1.6' }}>Have questions about our agricultural products or programs? Reach out to us directly.</p>
          <p><strong>📧 Email:</strong> info@zoefarming.com</p>
          <p><strong>📞 Phone:</strong> +250 788 889 999 / +250 788 309 491</p>
          <p><strong>📍 Location:</strong> Eastern Province, Rwanda</p>
        </div>
        <div>
          <h2 style={{ color: '#4CAF50', marginTop: 0 }}>Send a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Full Name" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="email" placeholder="Email Address" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <textarea placeholder="Your Message" rows="4" required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'sans-serif' }}></textarea>
            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
