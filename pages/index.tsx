import Head from "next/head";
import HeaderNoAuth from "@/src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/src/components/homeNoAuth/presentationSection";
import CardSection from "@/src/components/homeNoAuth/cardSection";
import styles from "../styles/homeNoAuth.module.scss"
import SlideSection from "@/src/components/homeNoAuth/slideSection";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@/src/services/courseService";
import { ReactNode } from "react";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = ({course}: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil." />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
        <HeaderNoAuth />
        <PresentationSection />
        </div>
        <CardSection />
        <SlideSection newestCourses={course}/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourse();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24, //1 dia
  };
};

export default HomeNoAuth;

//estrutura padrão do projeto