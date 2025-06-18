import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/innovation">Innovation</Link>
        <Link href="/providers">Providers</Link>
        <Link href="/search">Search</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar

