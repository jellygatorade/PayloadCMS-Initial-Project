import React, { useEffect, useState } from "react";

// Following Discord thread
// Populate Data In Cell Component
// https://discordapp.com/channels/967097582721572934/1041362545501548624/1041362545501548624

// Custom component to replace Upload field Cell component for List views
//
// I'm not sure what actually is being replaced with this code because the component for this in the Payload repo appears blank:
// https://github.com/payloadcms/payload/blob/master/src/admin/components/views/collections/List/Cell/field-types/Upload/index.tsx

const baseUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL;

const imageStyle1 = { borderRadius: "100%" };
const imageStyle2 = { borderRadius: "100%", boxShadow: "0px 0px 1px black" };
const imageStyle = { borderRadius: "5%" };
const size = "50";

const ImageCell = (props) => {
  const { field, colIndex, collection, cellData, rowData } = props;
  const [item, setItem] = useState();

  if (!cellData) return null;

  useEffect(() => {
    fetch(`${baseUrl}/api/${collection.slug}/${rowData.id}/?depth=1`)
      .then((data) => data.json())
      .then((object) => setItem(object));
  }, []);

  return (
    <>
      {item?.image?.sizes?.thumbnail?.url && (
        <img
          src={item.image.sizes.thumbnail.url}
          style={imageStyle}
          // Setting height and widith this way increases height of the parent row
          height={size}
          width={size}
        ></img>
      )}
    </>
  );
};

export default ImageCell;
