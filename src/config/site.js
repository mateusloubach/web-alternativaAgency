export function constructMetadata({
  title = "Alternativa Agency ",
  description = "Alternativa Agency is an open-source website.",
  image = "/alternativalogo.png",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@mcesarloubach",
    },
    icons,
    metadataBase: new URL("https://mateusloubachv2.vercel.app/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
