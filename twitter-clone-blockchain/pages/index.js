import Head from 'next/head'
import Image from 'next/image'

const style = {
  wrapper: `flex justify-center h-screen w-scren select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.content}>Sidebar</h2>
      <h2>Feed</h2>
      <h2>Widget </h2>
      <h2></h2>
    </div>
  )
}

export default Home
