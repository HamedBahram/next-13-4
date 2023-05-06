import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-slate-800'>
      <nav className='container'>
        <ul className='flex items-center justify-center gap-12 text-sm font-light uppercase tracking-widest text-slate-200'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/todos'>Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
