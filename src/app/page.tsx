import styles from './page.module.css'

import UseStateForm from '../components/UseStateForm'
import UseRefForm from '../components/UseRefForm'
import HookForm from '../components/HookForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>React Form Best Practice</h1>
      <HookForm />
    </main>
  )
}
