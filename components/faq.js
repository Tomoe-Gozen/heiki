import Link from 'next/link'
import { Disclosure, Transition } from '@headlessui/react'

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: 'Is there a release date?',
      answer:
        'Definitely! We plan to launch in the beginning of March (exact date TBA)',
      defaultOpen: true
    },
    {
      id: 2,
      question: 'Is there a Mint price?',
      answer: '0.08'
    },
    {
      id: 3,
      question: 'What blockchain is the project on?',
      answer: 'ETH'
    },
    {
      id: 4,
      question: 'How to get WL on the server?',
      answer:
        'Be active in the discord chat and spread love so we can see you ! We will also do some raffles.'
    },
    {
      id: 5,
      question: 'How many warriors there will be?',
      answer: '8000 NFTs including 8 1/1 art pieces.'
    },
    {
      id: 6,
      question: 'Can I lose the OG / WL role?',
      answer:
        'We are focusing on growing an organic community. Be yourself, be active, spread love and it should be alright.'
    },
    {
      id: 7,
      question: 'How will the mint go?',
      answer: 'Pre sale for OGs and WLs + Public sale.'
    }
  ]
  return (
    <div className="rn-support-area rn-section-gapTop anchor" id="faq">
      <div className="container mb--30">
        <div className="row">
          <div className="col-12">
            <h3
              className="title sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              FAQ
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-6">
          <div className="col-lg-6">
            <div className="rn-support-read">
              <div className="read-card">
                <h4>What is NFT?</h4>
                <div className="content">
                  <p>
                    Non-fungible token. That doesn’t make it any clearer. Right,
                    sorry. “Non-fungible” more or less means that it’s unique
                    and can’t be replaced with something else. For example, a
                    bitcoin is fungible — trade one for another bitcoin, and
                    you’ll have exactly the same thing. A one-of-a-kind trading
                    card, however, is non-fungible. If you traded it for a
                    different card, you’d have something completely different.
                  </p>
                </div>
              </div>
              <div className="read-card">
                <h4>How do NFTs work?</h4>
                <div className="content">
                  <p>
                    At a very high level, most NFTs are part of the Ethereum
                    blockchain. Ethereum is a cryptocurrency, like bitcoin or
                    dogecoin, but its blockchain also supports these NFTs, which
                    store extra information that makes them work differently
                    from, say, an ETH coin. It is worth noting that other
                    blockchains can implement their own versions of NFTs.
                  </p>
                </div>
              </div>
              <div className="read-card">
                <h4>So every NFT is unique?</h4>
                <div className="content">
                  <p>
                    In the boring, technical sense that every NFT is a unique
                    token on the blockchain. But while it could be like a van
                    Gogh, where there’s only one definitive actual version, it
                    could also be like a trading card, where there’s 50 or
                    hundreds of numbered copies of the same artwork.
                  </p>
                </div>
              </div>
              <Link href="/mint">
                <a className="btn btn-primary mr--15">Start minting</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="support-accordion">
              <div className="accordion">
                {faqs.map((f) => (
                  <Disclosure key={f.id} defaultOpen={f.defaultOpen ?? false}>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <Disclosure.Button className="accordion-button">
                          {f.question}
                          <i className="feather-chevron-up"></i>
                        </Disclosure.Button>
                      </h2>
                      <Disclosure.Panel as="div" className="accordion-collapse">
                        <div className="accordion-body">{f.answer}</div>
                      </Disclosure.Panel>
                    </div>
                  </Disclosure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
