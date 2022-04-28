const Premint = () => {
  return <div className="p-5">Redirecting to Premint...</div>
}

export async function getServerSideProps(context) {
  const slug = context.query.slug
  if (slug) {
    return {
      redirect: {
        destination: `https://www.premint.xyz/heiki-x-${slug}`,
        permanent: true
      }
    }
  }

  return {
    props: {}
  }
}

export default Premint
