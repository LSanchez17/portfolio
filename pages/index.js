import dynamic from 'next/dynamic'
import Projects from '../pages/projects'
import Contact from '../pages/contact'
import About from '../pages/about'
import HomePage from '../pages/home';
import { useState } from 'react'

// const Particles = dynamic(
//   //dynamic sideloads the npm packages that require window access
//   //by negativ the server side rendering, we get access to the window
//   //while still being "NEXT"
//     () => import('particles-bg'),
//     {
//       ssr: false
//     }
// )

export default function Home() {
  const [showing, setShowing] = useState(null);

  const defaultComponent = () => {
    setShowing(null);
  }

  const showContact = () => {
    setShowing(<Contact projects={showProjects} about={showAbout} reset={defaultComponent} />);
  }

  const showAbout = () => {
    setShowing(<About projects={showProjects} contacts={showContact} reset={defaultComponent} />);
  }
  
  const showProjects = () => {
    setShowing(<Projects contacts={showContact} about={showAbout} reset={defaultComponent} />);
  }

  return (
    <div className='w-screen h-screen bg-gradient-to-b from-purple-500 via-blue-500 to-green-400 bg-opacity-50'>
      {!showing ? <HomePage projects={showProjects} contacts={showContact} about={showAbout} /> : showing}
    </div>
  )
}
