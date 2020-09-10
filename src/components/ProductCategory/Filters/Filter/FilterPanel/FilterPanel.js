import React from 'react';
import closeImg from "../../../../../assets/images/close.png"
import backImg from "../../../../../assets/images/back.png"

function FilterPanel() {
  return (
    <section id="filterPanel" className>
      <div className="filter-inner">
        <div className="title-panel-close flexbox alignItemCenter">
          <div className="close-btn">
            <button onclick="closeFilter()"><img src={closeImg} alt="Close" /></button>
          </div>
          <div className="title-panel">
            <h2><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Filter</font></font></h2>
          </div>
        </div>
        <div className="filter-inner-data">
          <div className="filter-lists">
            <ul>
              <li><button id="filterstylebtn" onclick="openFilterStyle()"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Style</font></font></button></li>
              <li><button id="filterLongueurbtn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Length</font></font></button></li>
              <li><button id="filterCouleurbtn" onclick="openFilterColor()"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Color</font></font></button></li>
              <li><button id="filterTaillebtn" onclick="openFilterTaille()"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cut</font></font></button></li>
              <li><button id="filterSilhouettebtn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Silhouette</font></font></button></li>
              <li><button id="filterprixbtn" onclick="openFilterPrix()"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Price range</font></font></button></li>
            </ul>
          </div>
          <div className="filter-lists-inner" id="styleFilter">
            <div className="filterActiveTitle flexbox alignItemCenter">
              <button onclick="styleFilterCls()"><img src={backImg} alt="" /></button>
              <h4><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Style</font></font></h4>
            </div>
            <ul>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bohemian (34)</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bohemian (34)</font></font></button></li>
              <li><button className="checkedFilter"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bohemian (34)</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bohemian (34)</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bohemian (34)</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Bohemian (34)</font></font></button></li>
            </ul>
          </div>
          <div className="filter-lists-inner" id="colourFilter">
            <div className="filterActiveTitle flexbox alignItemCenter">
              <button onclick="colourFilterCls()"><img src="images/back.png" alt="" /></button>
              <h4><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Color</font></font></h4>
              <button className="resrt-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Reset</font></font></button>
            </div>
            <ul>
              <li><button className="selectedFilterColor"><span className="fushia" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>fuchsia</font></font></button></li>
              <li><button><span className="turquoise" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>turquoise</font></font></button></li>
              <li><button><span className="rose" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>pink</font></font></button></li>
              <li><button><span className="fushia" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>fuchsia</font></font></button></li>
              <li><button><span className="turquoise" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>turquoise</font></font></button></li>
              <li><button><span className="rose" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>pink</font></font></button></li>
              <li><button><span className="fushia" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>fuchsia</font></font></button></li>
              <li><button><span className="turquoise" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>turquoise</font></font></button></li>
              <li><button><span className="rose" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>pink</font></font></button></li>
              <li><button><span className="fushia" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>fuchsia</font></font></button></li>
              <li><button><span className="turquoise" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>turquoise</font></font></button></li>
              <li><button><span className="rose" /><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>pink</font></font></button></li>
            </ul>
          </div>
          <div className="filter-lists-inner" id="tailleFilter">
            <div className="filterActiveTitle flexbox alignItemCenter">
              <button onclick="tailleFilterCls()"><img src={backImg} alt="" /></button>
              <h4><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Cut</font></font></h4>
              <button className="resrt-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Reset</font></font></button>
            </div>
            <ul>
              <li><button className="selectedFiltertaille"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>34</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>36</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>38</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>38</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>34</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>36</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>38</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>38</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>34</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>36</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>38</font></font></button></li>
              <li><button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>38</font></font></button></li>
            </ul>
          </div>
          <div className="filter-lists-inner" id="PrixFilter">
            <div className="filterActiveTitle flexbox alignItemCenter">
              <button onclick="PrixFilterCls()"><img src={backImg} alt="" /></button>
              <h4><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Price</font></font></h4>
              <button className="resrt-btn"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Reset</font></font></button>
            </div>
            <div className="price-range-slider">
              <p className="range-value">
                <input type="text" id="amount" readOnly />
              </p>
              <div id="slider-range" className="range-bar ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '0%', width: '100%'}} />
                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '0%'}} /><span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '100%'}} />
              </div>
            </div>
          </div>
        </div>
        <div className="filter-save-btn">
          <button><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>SEE ARTICLES</font></font></button>
        </div>
      </div>
    </section>
  );
}

export default FilterPanel;
