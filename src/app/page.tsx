import styles from './page.module.css'

import UseStateForm from '../components/UseStateForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>React Form Best Practice</h1>
      <UseStateForm />
    </main>
  )
}
