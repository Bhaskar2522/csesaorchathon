import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the local network IP for mobile device testing
  allowedDevOrigins: ['192.168.0.109'],
  // Allow images and resources from Spline CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.spline.design',
      },
      {
        protocol: 'https',
        hostname: 'prod.spline.design',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Allow Spline WebGL content (needed for mobile Chrome's stricter CSP)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: https://*.spline.design https://prod.spline.design https://my.spline.design https://www.youtube.com https://s.ytimg.com",
              "worker-src 'self' blob: https://*.spline.design",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com https://*.spline.design",
              "img-src 'self' data: blob: https://*.spline.design https://prod.spline.design https://i.ytimg.com https://www.youtube.com",
              "connect-src 'self' data: https://*.spline.design https://prod.spline.design wss://*.spline.design",
              "media-src 'self' blob: https://*.spline.design https://prod.spline.design",
              // Required for WebGL on mobile browsers
              "child-src 'self' blob: https://*.spline.design",
              "frame-src 'self' https://*.spline.design https://my.spline.design https://www.youtube.com https://youtube.com",
              "frame-ancestors 'self'",
              "object-src 'none'",
            ].join('; '),
          },
          // Enable cross-origin isolation for high-performance WebGL on mobile
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
