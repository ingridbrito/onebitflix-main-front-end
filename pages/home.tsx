import Footer from "@/src/components/common/footer"
import HeaderAuth from "@/src/components/common/headerAuth"
import FavoriteCourses from "@/src/components/homeAuth/favoriteCategory"
import FeaturedSection from "@/src/components/homeAuth/featuredSection"
import NewestCategory from "@/src/components/homeAuth/newestCategory"
import Head from "next/head"
import { useEffect } from "react"

1
const HomeAuth = function () {
    return (
        <>
            <Head>
                <title> Onebitflix - Home </title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <FeaturedSection />
                <NewestCategory />
                <FavoriteCourses />
                <br/>
                <Footer />
            </main>
        </>
    )
}
export default HomeAuth