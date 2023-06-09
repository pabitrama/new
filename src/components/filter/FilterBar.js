/** @format */

// import Filter from "./Filter";

const FilterBar = ({ filter, filterState, setFilter }) => {
  return (
    <div className="filterBar">
      <ul>
        {filter.map((e, index) => {
          let color = "";
          let backgroundColor = "";
          if (e === filterState) {
            color = "#2873f0";
            backgroundColor = "white";
          }
          return (
            <li
              className="filterBarList"
              onClick={() => {
                setFilter(e);
              }}
              style={{ backgroundColor: backgroundColor }}
              key={index}>
              <h4 style={{ color: color, fontWeight:"700", fontSize:"1.5rem",fontFamily:"sans serief" }} className="filterBarSelect">
                {e.charAt(0).toUpperCase() + e.slice(1)}
              </h4>
            </li>
          );
        })}
       
      </ul> 

    </div>
  );
};

export default FilterBar;
