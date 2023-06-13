import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => (
  <div className={styles.mainContainer}>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgageContainer}>
          <Image
            src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
    </Link>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgageContainer}>
          <Image
            src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
    </Link>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgageContainer}>
          <Image
            src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
    </Link>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgageContainer}>
          <Image
            src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
    </Link>
    <Link href="/blog/testId" className={styles.container}>
      <div className={styles.item}>
        <div className={styles.imgageContainer}>
          <Image
            src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={400}
            height={250}
            className={styles.imgage}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Blog;
