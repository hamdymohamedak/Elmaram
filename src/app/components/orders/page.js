"use client";
import Link from "next/link";
import styles from "./order.module.css";
import { Suspense } from "react";
export default function Page() {
  return (
    <div className={styles.parent}>
      <div className={styles.form}>
        Branches (الفروع)
        <Suspense fallback={<h1>loading...</h1>}>
          <Link href={"/components/orders/Shods"}>Shods(شدس)</Link>
        </Suspense>
        <Suspense fallback={<h1>loading...</h1>}>
          <Link href={"/components/orders/CampShezar"}>
            CampShezar(كامب شيزار)
          </Link>
        </Suspense>
        <Suspense fallback={<h1>loading...</h1>}>
          <Link href={"/components/orders/Smouha"}>Smouha(سموحه)</Link>
        </Suspense>
        <Suspense fallback={<h1>loading...</h1>}>
          <Link href={"/components/orders/Victoria"}>Victoria(فيكتوريا)</Link>
        </Suspense>
      </div>
    </div>
  );
}
