import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): React.ReactNode {
  return (
    <Layout
      title="Home"
      description="An adventurer’s handbook to Unreal Engine"
    >
      <main className={styles.hero}>
        <img src="img/unreal-engine-logo.svg" className={styles.glow} />
        <div className={styles.heroInner}>
          <h1 className={styles.title}>Unreal Chronicle</h1>
          <p className={styles.subtitle}>
            An Adventurer’s Handbook to Unreal Engine
          </p>
          <p className={styles.tagline}>
            Forge worlds. Master the arcane scripts. Chronicle your legacy.
          </p>
          <div className={styles.buttons}>
            <a className={styles.button} href="/docs/introduction">
              Start Your Journey
            </a>
            <a className={styles.buttonSecondary} href="/blog">
              Browse the Chronicle
            </a>
          </div>
        </div>
      </main>
      <small className={styles.footer}>
        Yes, this page is very empty and also semi-broken in light mode. I'll
        fix it and add more content to this homepage...eventually...
        <em>probably</em> ™ :)
      </small>
    </Layout>
  );
}
