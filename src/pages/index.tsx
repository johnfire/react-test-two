import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import TitleComponent from "@/components/TitleComponent";
import UserLoginButton from "@/components/UserLoginButton";
import CreateAccountButton from "@/components/CreateAccount";
import { GetStaticPropsContext } from "next";
import { useTranslations, useFormatter } from "next-intl";
import LanguageSelector from "@/components/LangaugeSelector";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log("Home27:");
  const t = useTranslations("front_page");
  const format = useFormatter();
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  console.log("here is the current language:", currentLanguage);
  return (
    <>
      <Head>
        <title>Euro Artist websites </title>
        <meta
          name="description"
          content="website for generating custom art websites"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <UserLoginButton />
          <CreateAccountButton />
          <LanguageSelector
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
          />
        </div>
        <div>
          <TitleComponent />
        </div>
        <div> {t("footer")}</div>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}
