import { buildConfig } from "payload/config";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Artworks from "./collections/Artworks";
import Polls from "./collections/Polls";

import CustomIcon from "./components/graphics/CustomIcon";
import CustomLogo from "./components/graphics/CustomLogo";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
    meta: {
      favicon: "./assets/ncma-circular-logomark-orange.svg",
    },
    components: {
      graphics: {
        Icon: CustomIcon,
        Logo: CustomLogo,
      },
    },
    // webpack: (config) => {
    // 	// Do something with the default Webpack config here
    // 	return config;
    // }
  },
  collections: [Artworks, Polls, Media, Users],
});
