"use client";

import { useState } from "react";
import styles from "./Shods.module.css";
import { Suspense } from "react";
export default function Page() {
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [apartmentNumber, setApartmentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [order, setOrder] = useState("");
  const [choose, setChoose] = useState("");
  const [choose2, setChoose2] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };
  const handleHomeNumber = (e) => {
    setApartmentNumber(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleOrder = (e) => {
    setOrder(e.target.value);
  };
  const handleChoose = (e) => {
    setChoose(e.target.value);
  };
  const handleChoose2 = (e) => {
    setChoose2(e.target.value);
  };

  const handleSubmit = async () => {
    if (phoneNumber.length === 11) {
      const apiEndpoint =
        "https://api.telegram.org/bot6596840857:AAHTCeO2wIV7fK0K9J_80v1e2_ght1qa6jk/sendMessage";

      const chatId = -1002013269485;

      const message = `الاسم: ${userName}\nالعنوان: ${address}\nالدور: ${floor}\nرقم الشقه: ${apartmentNumber}\nرقم الهاتف: ${phoneNumber}\nهل نرسل باقي الطلبات: ${choose}\nهل نرسل البديل: ${choose2}\nالطلب: ${order}`;

      try {
        const response = await fetch(
          `${apiEndpoint}?chat_id=${chatId}&text=${encodeURIComponent(
            message
          )}`,
          {
            method: "POST",
          }
        );

        if (response.ok) {

          alert("Order Sended", "Your order has been successfully sent!");
        } else {

          alert(
            "Error",
            "There was an error sending your order. Please try again."
          );
        }
      } catch (error) {
        alert(
          "Network Error",
          "Please check your internet connection and try again."
        );
      }
    } else {
      alert("تحقق من رقم الهاتف");
    }
  };

  return (
    <Suspense fallback={<h1>loading...</h1>}>
    <div className={styles.parent}>
      <form className={styles.form}>
        <p className={styles.title}>Order...</p>
        <p dir="rtl" className={styles.message}>
           212شارع الفتح امام محطه ترام شدس
        </p>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            onChange={handleUserNameChange}
          />
          <span>الاسم</span>
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            onChange={handleAddressChange}
          />
          <span>العنوان</span>
        </label>

        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            onChange={handleFloorChange}
          />
          <span>الدور</span>
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            onChange={handleHomeNumber}
          />
          <span>رقم الشقه او الوصف</span>
        </label>

        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            onChange={handlePhoneNumber}
          />
          <span>رقم الهاتف</span>
        </label>

        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            onChange={handleOrder}
          />
          <span>طلبك</span>
        </label>
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=" اجب به (نعم)او (لا)"
            required=""
            onChange={handleChoose}
          />
          <span>
            في حال عدم توفر صنف معين من الطلبات الخاصه بك هل نرسل باقي الطلبات
          </span>
        </label>

        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=" اجب به (نعم)او (لا)"
            required=""
            onChange={handleChoose2}
          />
          <span>
            في حال عدم توفر منتج من المنتجات التي قمت باختيارها هل نرسل بديل
            بنفس الماده الفعاله
          </span>
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          className={styles.submit}
        >
          Submit
        </button>
      </form>
    </div>
  </Suspense>
  );
}
