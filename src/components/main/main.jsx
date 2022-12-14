import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

export default function Main({ authService }) {
  return (
    <section className={styles.all}>
      <Header authService={authService} />
      <section className={styles.contents}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        consequuntur, veritatis ad reiciendis ducimus officiis eligendi. Magnam
        soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi, non
        culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        dolorum eaque porro ratione nihil at repudiandae deleniti ducimus
        temporibus unde quasi praesentium, excepturi dolores recusandae labore
        eum numquam quae fugit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores nihil enim eius unde saepe earum, dicta ex,
        nesciunt amet debitis, animi sunt ab itaque. Dicta consectetur quod eos
        officia odit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Et ipsam porro alias saepe amet corrupti architecto illo tempora
        provident atque maiores quibusdam, id at possimus laudantium temporibus
        aut iste dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quis consequuntur, veritatis ad reiciendis ducimus officiis eligendi.
        Magnam soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi,
        non culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat dolorum eaque porro ratione nihil at repudiandae deleniti
        ducimus temporibus unde quasi praesentium, excepturi dolores recusandae
        labore eum numquam quae fugit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores nihil enim eius unde saepe earum, dicta ex,
        nesciunt amet debitis, animi sunt ab itaque. Dicta consectetur quod eos
        officia odit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Et ipsam porro alias saepe amet corrupti architecto illo tempora
        provident atque maiores quibusdam, id at possimus laudantium temporibus
        aut iste dicta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quis consequuntur, veritatis ad reiciendis ducimus officiis eligendi.
        Magnam soluta unde dicta, fuga iusto fugiat dolore maxime sunt id nisi,
        non culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellat dolorum eaque porro ratione nihil at repudiandae deleniti
        ducimus temporibus unde quasi praesentium, excepturi dolores recusandae
        labore eum numquam quae fugit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maiores nihil enim eius unde saepe earum, dicta ex,
        nesciunt amet debitis, animi sunt ab itaque. Dicta consectetur quod eos
        officia odit! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Et ipsam porro alias saepe amet corrupti architecto illo tempora
        provident atque maiores quibusdam, id at possimus laudantium temporibus
        aut iste dicta!
      </section>
      <Footer />
    </section>
  );
}
