import ImageCell from "../components/ImageCell";

const Artworks = {
  slug: "artworks",
  admin: {
    useAsTitle: "artworkTitle",
    description: "Lorem ipsum",
    defaultColumns: ["artworkTitle", "artist", "image"],
    //group: "Main",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "artworkTitle",
      type: "text",
      required: true,
    },
    {
      name: "artist",
      type: "text",
      required: true,
    },
    // {
    //   name: "image",
    //   type: "relationship",
    //   relationTo: ["media"],
    // },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        components: {
          Cell: ImageCell,
        },
      },
    },
  ],
};

export default Artworks;
