import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est qui
            similique velit culpa nihil dolor. Dignissimos, eos sit similique
            rem soluta sapiente ducimus provident ullam hic, placeat obcaecati
            incidunt delectus.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo
          dolorem temporibus. Obcaecati possimus repudiandae, ullam enim
          perferendis eaque delectus non quasi exercitationem aspernatur ea
          numquam blanditiis voluptate, eligendi aperiam!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
