import Link from 'next/link'

export default function TheMenu({ isMobile = false, toggleActive = () => {} }) {
  return (
    <>
      <li>
        <Link href="/#about">
          <a onClick={isMobile && toggleActive}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/#roadmap">
          <a onClick={isMobile && toggleActive}>Roadmap</a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a onClick={isMobile && toggleActive}>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/#faq">
          <a onClick={isMobile && toggleActive}>FAQ</a>
        </Link>
      </li>
      <li>
        <Link href="/#mint">
          <a onClick={isMobile && toggleActive}>Mint</a>
        </Link>
      </li>
    </>
  )
}
