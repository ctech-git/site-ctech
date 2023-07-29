export default function Home() {
  return <></>;
}

export async function getStaticProps({ locale }) {
  return {
    redirect: {
      destination: "/pt",
      permanent: false, // Defina como true se desejar que o redirecionamento seja permanente (código 301)
    },
  };
}
