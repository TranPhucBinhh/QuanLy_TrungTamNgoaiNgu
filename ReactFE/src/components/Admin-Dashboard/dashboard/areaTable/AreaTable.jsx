import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to import axios
import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Id ",
  "Tên Khóa Học",
  "Giá",
  "Action",
];

const AreaTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ieltsweb.onrender.com/api/Course");
        setTableData(response.data); // Assuming the API returns an array of objects
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((dataItem) => (
              <tr key={dataItem.id}>
                 <td>{dataItem.id}</td>
                <td>{dataItem.courseName}</td>
                <td>${dataItem.price.toFixed(2)}</td>
                <td className="dt-cell-action">
                  <AreaTableAction />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
