import "../styles/globals.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:url" content="https://bellshade.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bellshade - Learn with Our Community"
        />
        <meta
          property="og:description"
          content="Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/reacto11mecha/bellshade.github.io/gh-pages/og_img.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Bellshade - Learn with Our Community</title>

        <meta
          name="description"
          content="Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bellshade - Learn with Our Community"
        />
        <meta
          property="og:description"
          content="Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
        />
        <meta
          property="og:image"
          content="https://cdn.statically.io/img/media.discordapp.net/w=800/attachments/891222600422936616/892682527720996884/unknown.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="856" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* CSS Slick Carousel */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* End CSS Slick Carousel */}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
