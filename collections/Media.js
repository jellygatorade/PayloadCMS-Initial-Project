const Media = {
  slug: "media",
  admin: {
    useAsTitle: "title",
    //group: "Media",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "alt",
      type: "text",
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 150,
        height: 150,
        position: "centre",
      },
      {
        name: "small",
        width: 300,
        // By specifying `null` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: null,
        position: "centre",
      },
      {
        name: "medium",
        width: 768,
        height: null,
        position: "centre",
      },
      {
        name: "large",
        width: 1024,
        height: null,
        position: "centre",
      },
    ],
    adminThumbnail: "small",
  },
};
export default Media;
