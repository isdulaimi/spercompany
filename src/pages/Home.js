import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Spercompany</h2>
      <p style={styles.paragraph}>Innovative Solutions for a Modern World.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    maxWidth: '600px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

// Additional CSS for responsiveness can be added in your CSS file:
// @media (max-width: 600px) {
//   h2 {
//     font-size: 1.5rem;
//   }
//   p {
//     font-size: 1rem;
//   }
// }

export default Home;
