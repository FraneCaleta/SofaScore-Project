import Head from "next/head";

export default function ReusableHead({ title, description, keywords }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link
        rel="icon"
        href="https://www.sofascore.com/static/images/apple-icon-180x180.png"
      />
    </Head>
  );
}
