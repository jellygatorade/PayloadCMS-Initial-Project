import React, { useEffect, useState } from "react";
//import { Props } from 'payload/components/views/Cell';
//import './styles.scss';

// Custom component to replace Relationship field Cell component for List views
// This is the original component in the Payload repo being replaced
// https://github.com/payloadcms/payload/blob/master/src/admin/components/views/collections/List/Cell/field-types/Relationship/index.tsx

const baseUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL;

const parentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "1rem",
};

const textStyle = {
  // maxWidth: "100px",
  // textOverflow: "ellipsis",
};

const imageStyle = { borderRadius: "5%" };

const ImageTitleCell = (props) => {
  const { field, colIndex, collection, cellData, rowData } = props;
  const [item, setItem] = useState();

  //console.log(field);
  //console.log(rowData);
  //console.log(cellData);

  if (!cellData) return null;

  useEffect(() => {
    fetch(
      `${baseUrl}/api/${cellData.relationTo}/${cellData.value}/?depth=1` // cellData contains relation in this case
    )
      .then((data) => data.json())
      .then((object) => {
        setItem(object);
        // console.log(object);
      });
  }, []);

  return (
    <div style={parentStyle}>
      {item?.image?.sizes?.thumbnail?.url && (
        <img
          src={item.image.sizes.thumbnail.url}
          style={imageStyle}
          // Setting height and width this way increases height of the parent row
          height="50"
          width="50"
        ></img>
      )}
      {item?.artworkTitle && <span style={textStyle}>{item.artworkTitle}</span>}
    </div>
  );
};

export default ImageTitleCell;
