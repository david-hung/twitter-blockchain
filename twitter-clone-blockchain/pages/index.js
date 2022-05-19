import Sidebar from '../components/SideBar'
import Feed from '../components/Home/Feed'

const style = {
  wrapper: `flex justify-center h-screen w-scren select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar />
        <Feed />
        <h2>Widget </h2>
      </div>
    </div>
  )
}

export default Home
