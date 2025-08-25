import Link from 'next/link';

export default function Navbar() {
  return (
    <>
        <div className='content-top flex justify-between py-2 px-10 font-sans'>
            <div className='left-content-top space-x-6 flex'>
                <div className="left-content-top-1 space-x-1">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:istafoundation.in@gmail.com">istafoundation.in@gmail.com</a>
                </div>
                <div className="left-content-top-2 space-x-1">
                    <i className="fa-solid fa-location-dot"></i>
                    <a href="#">Durgapur</a>
                </div>
            </div>
            <div className="right-content-top space-x-6">
                <a>Let's Talk</a>
                <a href="#">+91 00000 00000</a>
            </div>
        </div>
        
        <nav className="flex items-center px-10 py-4 space-x-4 bg-gray-100 sticky justify-between">
            <img src="logo.png" alt="ISTA Foundation Logo" className="w-56 h-auto" />
            <ul className="flex flex-row items-center space-x-10 mx-auto font-sans font-medium">
                <li className=''>Home</li>
                <li>About Us</li>
                <li>Programmes</li>
                <li>Gallery</li>
                <li>Feed</li>
                <li>Contact</li>
            </ul>
            
            <Link href="#">
                <button className="font-mono w-56 h-12 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-101 font-semibold bg-amber-200 px-4 py-2 hover:bg-amber-300 focus:outline-2 focus:outline-offset-2 rounded-3xl text-1xl">Become a Volunteer</button>
            </Link>
        </nav>
    </>
  );
}
