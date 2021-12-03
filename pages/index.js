import Head from 'next/head'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import {signData} from '../constants/signData'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>My Zodiac</title>
        <link rel="icon" href="/rodeo.png" />
      </Head>

      <Navbar />
      <div className="flex flex-wrap justify-center">
        {
          signData.map(data => (
            <Card key={data.id} name={data.name} params={data.params} image={data.image} birthday={data.birth_day} />
          ))
        }
      </div>
    </div>
  )
}
