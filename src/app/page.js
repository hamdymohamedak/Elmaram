"use client";
import styles from "./page.module.css";
import mockupOne from "./Mockup.png";
import mockupTwo from "./Mockup2.png";
import mockupThree from "./Mockup3.png";
import mockupFour from "./mockup4.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function App() {
  let GoToAppLink = () => {
    window.open(
      "https://www.mediafire.com/file/is20umuoxclw2hz/Elmaram.apk/file"
    );
  };

  useEffect(() => {
    const memory = navigator.deviceMemory;
    const browser = navigator.appCodeName;
    const platform = navigator.platform;
    const lang = navigator.language;
    const online = navigator.onLine;
    const cookie = navigator.cookieEnabled;
    const oscpu = navigator.oscpu;
  
    const formattedMemory =
      memory !== undefined ? `${memory} GB RAM` : "Unknown";
    const api = `https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Visitor at ELMaram Website ==>>>\n
      Memory: ${formattedMemory}\n
      Browser: ${browser}\n
      Platform: ${platform}\n
      Language: ${lang}\n
      Online: ${online}\n
      Cookie: ${cookie}\n
      Oscpu: ${oscpu}\n`;
  
    const sendTelegramMessage = async () => {
      try {
        const response = await fetch(api, {
          method: "POST",
        });
  
        if (!response.ok) {
          throw new Error("Failed to send message to Telegram.");
        }
      } catch (error) {
        console.error("Error sending message to Telegram:", error);
      }
    };
  
    sendTelegramMessage();
  }, []);
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
          <Link className="button" href={"/components/orders"}>
            Orders
          </Link>
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
