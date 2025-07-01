import Navbar from './Navbar';
import Footer from './Footer';
import BannerAd from './BannerAd';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <BannerAd /> {/* Ad on top */}
        {children}
        <BannerAd /> {/* Ad at bottom */}
      </main>
      <Footer />
    </>
  );
}
