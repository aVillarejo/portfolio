/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
  // Si tu repo no está en la raíz del dominio, descomenta y ajusta:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/'
}

module.exports = nextConfig