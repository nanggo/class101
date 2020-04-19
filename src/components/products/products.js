import React, { Component } from "react";
import { productItems } from "../data/productItems";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "ID",
          field: "id",
          hide: true
        },
        {
          headerName: "Title",
          field: "title",
          sortable: true,
          filter: true,
          checkboxSelection: true
        },
        {
          headerName: "CoverImage",
          field: "coverImage",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Price",
          field: "price",
          sortable: true,
          filter: true,
        },
        {
          headerName: "Score",
          field: "score",
          hide: true
        },
      ],
      rowData: productItems.sort((a, b) => a.score - b.score),
    };
  }
  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "600px",
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          pagination={true}
          paginationPageSize={5}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true}
        ></AgGridReact>
      </div>
    );
  }
}

export default Products;
