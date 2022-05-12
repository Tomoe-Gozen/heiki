export default function Faction() {
  const factions = [
    {
      id: 1,
      title: 'Manpower',
      src: '/images/factions/faction-1.png',
      description: (
        <>
          <p>
            With the timelines broken, many of these hungry forces enter the
            portal in 1035 and became rebellious, caused a massive destruction
            with the desire to take control. Choosing manpower means that you
            are true villain and love the dark sides of humanity, isn’t opposed
            to watch villager suffers, or even being the one to cause them pain.
            (dark red icon image symbol of power and greed)
          </p>
        </>
      )
    },
    {
      id: 2,
      title: 'Heiki Clan',
      src: '/images/factions/faction-2.png',
      description: (
        <p>
          You are the protector and wear your strength like an armour. Even when
          there is no peace or equality in this country, you fight like a beast
          to protect innocent beings. Even with the hatred, and bloodshed
          spreading all over the country, you believe that the day will come
          when people truly understand one another. Protecting and restoring the
          peace while finding the timekeeper is your mission.
        </p>
      )
    },
    {
      id: 3,
      title: 'Traitor',
      src: '/images/factions/faction-3.png',
      description: (
        <p>
          You are members of{' '}
          <strong className="text-tomoe">Shuten-dōji (酒呑童子)</strong>, you
          lost your way and turned to dark path to survive. When everything that
          you know and love is taken away so harshly, you become darkness
          itself, so consumed by hatred that you believe power and force could
          achieve anything.
        </p>
      )
    },
    {
      id: 4,
      title: 'Timekeeper',
      src: '/images/factions/faction-4.png',
      description: (
        <p>
          The timekeeper is reborn, the reincarnation from previous power and
          ruler. You don’t know your identity, but you have great power to
          manipulate temporal energy and the key to fix the timeline, destined
          to prevent any future counterpart.
        </p>
      )
    }
  ]

  return (
    <>
      <div className="rn-service-area rn-section-gapTop anchor" id="factions">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--50">
              <h3
                className="title"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Factions
              </h3>
            </div>
          </div>
          <div className="row g-5">
            {factions.map((r) => (
              <div key={r.id} className="col-lg-6 col-12">
                <div
                  data-sal="slide-up"
                  data-sal-delay="150"
                  data-sal-duration="800"
                  className="rn-service-one color-shape-7"
                  style={{ paddingTop: '20px' }}
                >
                  <div className="inner d-flex flex-column flex-md-row align-items-center">
                    <div className="faction-img">
                      <img src={r.src} className="w-100 h-100" alt="" />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a
                          href="https://discord.gg/heikinft"
                          className="font-tomoe text-lg"
                        >
                          {r.title}
                        </a>
                      </h4>
                      {r.description}
                    </div>
                  </div>
                  <a
                    className="over-link"
                    href="https://discord.gg/heikinft"
                  ></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
