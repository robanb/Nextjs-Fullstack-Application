import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image
        src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
        fill={true}
        alt=""
        className={styles.img}
      />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}> Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>
          {" "}
          Handicrafting award winning digital experiences
        </h2>
      </div>
    </div>
    <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Who Are We?</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          officia obcaecati asperiores tempore adipisci ratione placeat atque
          <br />
          <br />
          voluptates quasi? Odit quaerat provident fugiat quas molestiae
          quasised mollitia est voluptatibus.Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Delectus officia obcaecati asperiores
          tempore adipisci ratione placeat atque voluptates quasi? Odit quaerat
          provident fugiat quas molestiae quasi sed mollitia est voluptatibus.
        </p>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>What we Do?</h1>

        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi in
          praesentium hic? Quo minima dicta quos ab dolores deleniti, quia modi.
          Creative Illustrations
          <br />
          <br />- Dynamic Web Apps
          <br />
          <br />- Fast and Handy
          <br />
          <br />- Mobile Apps
        </p>
        <Button url="/contact" text="Contact" />
      </div>
    </div>
  </div>
);

export default About;
