export default function Head() {
  // Fallback tagline
  const title = " Hapusin - Free Character Remover";
  const subtitle =
    "Remove Unwanted Characters from your text. Easily clean up your text by removing unwanted characters and symbols. Improve readability and formatting. Try Hapusin now!";

  return (
    <>
      <title>Hapusin</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={subtitle} />
      <meta name="theme-color" content="#000000" />
      <meta name="title" content={title} />
      <meta
        name="keywords"
        content="Hapusin, character remover, text cleaner, text formatting, text cleaner, text editor, text tool, text utility, text processing, text manipulation"
      />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content="all" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hapusin.vercel.app" />
      <meta
        property="og:image"
        content="https://hapusin.vercel.app/img/hapusin.png"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={subtitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hapusin.vercel.app" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={subtitle} />
      <meta
        property="twitter:image"
        content="https://hapusin.vercel.app/img/hapusin.png"
      />
    </>
  );
}
