import Gallery from "react-photo-gallery";

function MyGallery() {
  const photos = [
    {
      src: "trinded-full-1.png",
      width: 4,
      height: 3,
    },
    {
      src: "trinded-1.png",
      width: 4,
      height: 3,
    },
    {
      src: "trinded-2.png",
      width: 1,
      height: 1,
    },
    {
      src: "trinded-3.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-4.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-5.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-6.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-7.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-8.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-9.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-10.png",
      width: 3,
      height: 4,
    },
    {
      src: "trinded-full-2.png",
      width: 4,
      height: 3,
    },
    {
      src: "trinded-full-3.png",
      width: 4,
      height: 3,
    },
    {
      src: "trinded-full-4.png",
      width: 4,
      height: 3,
    },
    {
      src: "trinded-full-5.png",
      width: 4,
      height: 3,
    },
    {
      src: "trinded-full-6.png",
      width: 4,
      height: 3,
    },
  ];
  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}

export default MyGallery;
