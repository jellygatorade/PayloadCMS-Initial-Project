import React, { useEffect, useState } from "react";
//import { Props } from 'payload/components/views/Cell';
//import './styles.scss';

const baseUrl = process.env.PAYLOAD_PUBLIC_SERVER;

const CustomCellBasic = (props) => {
  const { field, colIndex, collection, cellData, rowData } = props;
  const [item, setItem] = useState();

  if (!cellData) return null;

  useEffect(() => {
    fetch(`http://${baseUrl}/api/${collection.slug}/${rowData.id}/?depth=1`)
      .then((data) => data.json())
      .then((object) => {
        setItem(object);
        //console.log(object);
      });
  }, []);

  return <div className={``}>This is a custom cell</div>;
};

export default CustomCellBasic;
