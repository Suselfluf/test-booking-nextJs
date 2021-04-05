import NavPanel from "./navPanel";
import Head from "next/head";
import 'jquery'


export default function Home() {
  return (
      <>
      <Head>
        <title>Homepage</title>
          <meta name='keywords' content='next, javascript, next, and another keywords '/>
      </Head>
      <NavPanel></NavPanel>
      </>
  )
}
