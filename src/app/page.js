"use client";
import styles from "./page.module.css";
import mockupOne from "./Mockup.png";
import mockupTwo from "./Mockup2.png";
import mockupThree from "./Mockup3.png";
import mockupFour from "./mockup4.png";
import Image from "next/image";
import Link from "next/link";
function App() {
  let GoToAppLink = () => {
    window.open(
      "https://www.mediafire.com/file/is20umuoxclw2hz/Elmaram.apk/file"
    );
  };
  return (
    <div className={styles.App}>
      <div className={styles.context}>
        <div id={styles.title} className={styles.title}>
          AlMaram Pharmacies
          <h2 className={styles.titleChild}>
            Created by: <span>Askander</span>
          </h2>
        </div>
        <div className={styles.btns}>
          <button onClick={GoToAppLink}>Download Maram App</button>
          <Link className="button" href={"/components/orders"}>Orders</Link>
        </div>
        <div className={styles.des}>
          التطبيق غير متواجد علي متجر بلاي لذلك عندما تقوم بتثبيته سيخبرك انه من
          مصدر مجهول اضغط علي زر تثبيت علي اي حال التطبيق
        </div>
        <div className={styles.mockupsCards}>
          <Image src={mockupOne} />
          <Image src={mockupTwo} />
          <Image src={mockupThree} />
          <Image src={mockupFour} />
        </div>
      </div>

      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
