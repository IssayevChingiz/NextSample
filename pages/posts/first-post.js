import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      <>
        <Head>
          <title>First project's head</title>
        </Head>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </>
    </Layout>
  );
}
