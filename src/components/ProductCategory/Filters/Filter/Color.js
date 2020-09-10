import React from 'react';

function Color() {
  var values = [1, 2, 3, 4, 5, 6, 7, 8]
  var options = values.map(function(value){
    return <option value={value}>fushia</option>
  })
  var lists = values.map(function(value){
    return <li className="option " data-value={value} data-display-text>fushia</li>
  })
  return (
    <div className="col-md-4 col-lg-3">
      <select className="colour" id="filterColor" name="style">
        { options }
      </select>
      <div className="dropdown-select-color wide colour" tabIndex={0}>
        <span className="current">Couleur (3)</span>
        <div className="list">
          <ul>
            { lists }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Color;
