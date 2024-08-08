"use client";
import styles from "./page.module.css";
import mockupOne from "./Mockup.png";
import mockupTwo from "./Mockup2.png";
import mockupThree from "./Mockup3.png";
import mockupFour from "./mockup4.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

function App() {
  let GoToAppLink = () => {
    window.open(
      "https://www.mediafire.com/file/x84upqdq6nz4m94/ElmaramV-1.apk/file"
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
    const browserName = navigator.userAgent;
    const widthScreen = window.screen.width;
    const heightScreen = window.screen.height;
    const formattedMemory =
      memory !== undefined ? `${memory} GB RAM` : "Unknown";

    let api;

    if (isMobile) {
      api = `https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Visitor at ELMaram Website ==>>>\n
      %0AMemory: ${formattedMemory}\n
      %0ABrowser: ${browser}\n
      %0AbrowserName: ${browserName}\n
      %0APlatform: ${platform}\n
      %0ALanguage: ${lang}\n
      %0AOnline: ${online}\n
      %0ACookie: ${cookie}\n
      %0AOscpu: ${oscpu}\n
      %0ASize: H: ${heightScreen}px × W: ${widthScreen}px\n
      Device-Detect:Mobile
      `;
    } else if (isBrowser) {
      api = `https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Visitor at ELMaram Website ==>>>\n
      %0AMemory: ${formattedMemory}\n
      %0ABrowser: ${browser}\n
      %0AbrowserName: ${browserName}\n
      %0APlatform: ${platform}\n
      %0ALanguage: ${lang}\n
      %0AOnline: ${online}\n
      %0ACookie: ${cookie}\n
      %0AOscpu: ${oscpu}\n
      Device-Detect:Browser
      `;
    } else {
      api = `https://api.telegram.org/bot5951822431:AAEFoaPj1Ayy1AbZUET0Kbr_HML6HWu-WuY/sendMessage?chat_id=5113505799&text=Visitor at ELMaram Website ==>>>\n
      %0AMemory: ${formattedMemory}\n
      %0ABrowser: ${browser}\n
      %0AbrowserName: ${browserName}\n
      %0APlatform: ${platform}\n
      %0ALanguage: ${lang}\n
      %0AOnline: ${online}\n
      %0ACookie: ${cookie}\n
      %0AOscpu: ${oscpu}\n
      `;
    }

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
          <button onClick={GoToAppLink}>Download Maram App-v1</button>
          <Link className="button" href={"/components/orders"}>
            Orders
          </Link>
        </div>
        <div className={styles.des}>
          التطبيق غير متواجد علي متجر بلاي لذلك عندما تقوم بتثبيته سيخبرك انه من
          مصدر مجهول اضغط علي زر تثبيت علي اي حال 
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
        </ul>
      </div>
    </div>
  );
}

export default App;
