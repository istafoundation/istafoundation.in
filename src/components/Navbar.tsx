import Link from 'next/link';

export default function Navbar() {
  return (
    <>
        <nav className="flex items-center px-10 py-4 space-x-4 bg-gray-100 sticky justify-between">
            <img src="logo.png" alt="ISTA Foundation Logo" className="w-56 h-auto" />
            <ul className="flex flex-row items-center space-x-10 mx-auto font-mono font-medium">
                <li className=''>Home</li>
                <li>About Us</li>
                <li>Programmes</li>
                <li>Gallery</li>
                <li>Feed</li>
                <li>Contact</li>
            </ul>
            
            <Link href="#">
                <button className="font-semibold bg-amber-100 px-4 py-2 hover:bg-amber-300 focus:outline-2 focus:outline-offset-2 rounded-3xl text-1xl">Become a Volunteer</button>
            </Link>
        </nav>
    </>
  );
}
