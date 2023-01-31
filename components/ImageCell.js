import React, { useEffect, useState } from "react";

import { useListRelationships } from "/node_modules/payload/dist/admin/components/views/collections/List/RelationshipProvider";

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

  if (!cellData) return null;

  const [fetchItem, setFetchItem] = useState(); // using fetch

  useEffect(() => {
    fetch(`${baseUrl}/api/${collection.slug}/${rowData.id}/?depth=1`)
      .then((data) => data.json())
      .then((object) => setFetchItem(object));
  }, []);

  return (
    <>
      {fetchItem?.image?.sizes?.thumbnail?.url && (
        <img
          src={fetchItem.image.sizes.thumbnail.url}
          style={imageStyle}
          // Setting height and widith this way increases height of the parent row
          height={size}
          width={size}
        ></img>
      )}
    </>
  );

  // Using the RelationshipProvider instead as per this thread
  // https://discordapp.com/channels/967097582721572934/1042513404390285392

  // const { getRelationships, documents } = useListRelationships();

  // useEffect(() => {
  //   getRelationships([
  //     {
  //       value: cellData,
  //       relationTo: field.relationTo,
  //     },
  //   ]);
  // }, [getRelationships]);

  // return (
  //   <>
  //     {documents?.[field.relationTo]?.[cellData]?.sizes?.thumbnail?.url && (
  //       <img
  //         src={documents[field.relationTo][cellData].sizes.thumbnail.url}
  //         style={imageStyle}
  //         // Setting height and widith this way increases height of the parent row
  //         height={size}
  //         width={size}
  //       ></img>
  //     )}
  //   </>
  // );
};

export default ImageCell;
