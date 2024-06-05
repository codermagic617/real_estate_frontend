import { listData } from '../../lib/dummydata';
import React from "react";
import Filter from "../../components/Filter/Filter";
import Map from '../../components/Map/Map';
import Card from "../../components/Card/Card";
import "../../routes/ListPage/listpage.scss";


const ListPage = () => {
  const data = listData;
  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter />
        {data.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
    <div className="mapContainer">
      <Map items={data} />
    </div>
  </div>
};

export default ListPage;
