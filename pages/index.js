import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unisoko</title>
        <meta
          name="description"
          content="The University Marketplace is a platform for buying clothes from virtual shops owned by student retailers. Explore a variety of unique styles and support your campus community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to the University Marketplace</h1>
        <p>
          Discover a wide variety of clothing and fashion items from virtual shops
          owned and operated by our talented student retailers.
        </p>

        <div style={{ marginTop: '30px' }}>
          <h2>Why Shop With Us?</h2>
          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '15px', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <li>✅ Unique styles and designs created by students</li>
            <li>✅ Support entrepreneurial students on campus</li>
            <li>✅ Affordable prices and convenient online shopping</li>
            <li>✅ Safe and secure transactions</li>
          </ul>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2>How It Works</h2>
          <p>
            Our platform connects buyers with student-owned virtual shops. Simply browse the
            catalog, select your favorite items, and place an order to support your peers!
          </p>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h2>Contact Us</h2>
          <p>
            Got questions or need support? Reach out to us at <strong>shaabandaudi@gmail.com</strong> or at +255 687 361 535.
          </p>
        </div>
      </main>

      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <p>© 2024 Unisoko. All rights reserved.</p>
      </footer>
    </div>
  );
}
