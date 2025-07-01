import Script from 'next/script';

export default function BannerAd() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://your-ad-network.com/script.js"
      />
      <div id="banner-ad" className="my-4 text-center">
        {/* This space is for ads */}
      </div>
    </>
  );
}
