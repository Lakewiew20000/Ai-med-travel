import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div><Link href="/">AI Med Travel</Link></div>
      <div>
        <Link href="/search">Search</Link>
        <Link href="/innovation">Innovation</Link>
        <Link href="/providers">Providers</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
