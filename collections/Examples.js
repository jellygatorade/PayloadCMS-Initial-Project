// Example Collection - For reference only, this must be added to payload.config.js to be used.
const Examples = {
  slug: "examples",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "someField",
      type: "text",
    },
  ],
};

export default Examples;
