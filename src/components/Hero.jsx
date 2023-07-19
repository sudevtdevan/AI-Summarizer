// eslint-disable-next-line no-unused-vars
import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
    <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
    <button type='button' onClick={() => window.open('https://www.instagram.com/_trikk_an_/ ')} className="black_btn" >
    Instagram</button>
    </nav>
        <h1 className='head_text'>
        Summazrize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>Sum It Up</span>

        </h1>
        <h2 className='desc'>Simplfy your reading with Sum It Up,an open source article summarizer that tarnsforms lengthy articles into clear and concise summaries</h2>
    </header>
  )
}

export default Hero