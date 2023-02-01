import React, { useState, useEffect } from "react";
import { useFormFields } from "payload/components/forms";

import classes from "./ThumbnailListener.module.css";

const baseUrl = process.env.PAYLOAD_PUBLIC_SERVER_URL;

const ThumbnailListener = (props) => {
  // value key holds current value of fields[props.label]
  const { value } = useFormFields(([fields, dispatch]) => fields[props.label]);

  const [fetchItem, setFetchItem] = useState();

  useEffect(() => {
    value &&
      fetch(`${baseUrl}/api/${value.relationTo}/${value.value}/?depth=1`)
        .then((data) => data.json())
        .then((object) => setFetchItem(object));
  }, [value]);

  return (
    <>
      {fetchItem?.image?.sizes?.thumbnail?.url && (
        <div className={classes["parent"]}>
          <div className={classes["div"]}>
            <img
              src={fetchItem.image.sizes.thumbnail.url}
              className={classes["thumbnail"]}
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default ThumbnailListener;
