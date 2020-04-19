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
          headerName: "Cover Image",
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
      isRowSelectable: function (e) {
        return e.gridApi.getSelectedNodes().length < 3 ? true : false;
      },
      onSelectionChanged: function (e) {
        console.log(e);
        let { isRowSelectable } = this;
        e.api.getSelectedNodes().length < 3
          ? (isRowSelectable = true)
          : (isRowSelectable = false);
      },
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
          rowSelection={"multiple"}
          rowMultiSelectWithClick={true}
          onSelectionChanged={this.state.onSelectionChanged}
          isRowSelectable={this.state.isRowSelectable}
        ></AgGridReact>
      </div>
    );
  }
}

export default Products;
