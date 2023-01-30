import CustomCellBasic from "../components/CustomCellBasic";

const Polls = {
  slug: "polls",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "pollTitle",
    description: "Lorem ipsum",
    defaultColumns: [
      "pollTitle",
      "round",
      "competitorOne",
      "competitorTwo",
      "status",
    ],
    //group: "Main",
  },
  fields: [
    {
      name: "pollTitle",
      type: "text",
    },
    {
      name: "round",
      type: "select",
      options: [
        {
          label: "First Round",
          value: "first_round",
        },
        {
          label: "Second Round",
          value: "second_round",
        },
        {
          label: "Sweet 16 - Third Round",
          value: "sweet_16",
        },
        {
          label: "Elite 8 - Quarterfinals",
          value: "elite_8",
        },
        {
          label: "Final 4 - Semifinals",
          value: "final_4",
        },
        {
          label: "Championship - Final",
          value: "championship",
        },
      ],
    },
    {
      name: "status",
      type: "radio",
      options: [
        {
          label: "Hidden",
          value: "hidden",
        },
        {
          label: "Staged",
          value: "staged",
        },
        {
          label: "Open",
          value: "open",
        },
        {
          label: "Closed",
          value: "closed",
        },
      ],
      admin: {
        layout: "vertical",
      },
    },
    {
      name: "competitorOne",
      type: "relationship",
      relationTo: ["artworks"],
      admin: {
        components: {
          Cell: CustomCellBasic,
        },
      },
    },
    {
      name: "competitorTwo",
      type: "relationship",
      relationTo: ["artworks"],
    },
  ],
};

export default Polls;
