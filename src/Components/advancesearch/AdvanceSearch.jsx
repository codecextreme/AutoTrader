import React from "react";
import "./AdvanceSearch.css";

const AdvanceSearch = () => {
  return (
    <>
    <div class="toggles3">
          <button class="toggle-btn active3">Search 12,506 Trailers</button>
          <button class="toggle-btn3">Advanced Search</button>
        </div>
    <div class="search-box3">
      <div class="top-bar3">
        <div></div>
        
        <div class="checkboxes3">
          <label>
            <input type="checkbox"  /> New
          </label>
          <label>
            <input type="checkbox" /> Used
          </label>
        </div>
      </div>

      <div class="bottom-bar3">
        <select>
          <option>Any Type</option>
        </select>
        <select>
          <option>Any Make</option>
        </select>
        <select>
          <option>Max. Price</option>
        </select>
        <input type="text" placeholder="Postal code - Required"/>
        <button class="search-btn3">Search</button>
      </div>
    </div>
    </>
  );
  
};


export default AdvanceSearch;
