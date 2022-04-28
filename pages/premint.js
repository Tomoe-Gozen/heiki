const Premint = () => {
  return <div className="p-5">Redirecting to Premint...</div>
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `https://www.premint.xyz/heiki-wl-registration`,
      permanent: true
    }
  }
}

export default Premint
