import Counter from "@/components/Counter";
import Greeting from "@/components/Greeting";
import User from "@/components/User";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>🧪 Tutorial de Testes — Next.js + Jest + RTL</h1>
        <div className={styles.components}>
          <section className={styles.section}>
            <Greeting name="Visitante" />
          </section>
          <section className={styles.section}>
            <Counter />
          </section>
          <section className={styles.section}>
            <User />
          </section>
        </div>
      </main>
    </div>
  );
}
