import React from 'react';

function Style() {
  var values = [1, 2, 3, 4, 5, 6, 7, 8]
  var options = values.map(function(value){
    return <option value={value}>Style</option>
  })
  var lists = values.map(function(value){
    return <li className="option " data-value={value} data-display-text>Style</li>
  })
  return (
    <div className="col-md-4 col-lg-3">
      <select id="filter" name="style">
        {options}
      </select>
      <div className="dropdown-select wide " tabIndex={0}>
        <span className="current">Style</span>
        <div className="list">
          <div className="dd-search"><input id="txtSearchValue" placeholder="Rechercher..." autoComplete="off" onkeyup="filter()" className="dd-searchbox" type="text" /></div>
          <ul>
            {lists}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Style;
