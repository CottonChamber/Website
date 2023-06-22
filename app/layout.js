import './styles/globals.scss'
import { Poppins } from 'next/font/google'
import Header from './components/Header';
import Footer from './components/Footer';

const poppins = Poppins({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  subsets: ["latin"]
 });

export const metadata = {
  title: 'Cotton Chamber - Quality Clothes Manufacturing Company',
  description: 'Discover Cotton Chamber, a leading clothes manufacturing company dedicated to providing high-quality garments for men, women, and children. Experience unmatched comfort, durability, and sustainable fashion with our stylish clothing crafted from natural fibers. Explore our wide range of products, including loungewear, everyday essentials, formal attire, and seasonal fashion trends. Shop online and join our commitment to quality and style.',
  keywords: 'Cotton Chamber, clothes manufacturing company, high-quality garments, sustainable fashion, natural fibers, loungewear, everyday essentials, formal attire, seasonal fashion trends, online shopping'  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='app-container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}