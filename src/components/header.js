import React from 'react';
import logoImg from "../assets/images/logo.png"
import searchImg from "../assets/images/search.png"
import downChevImg from "../assets/images/down-chev.png"
import heartImg from "../assets/images/heart.png"
import searchWhiteImg from "../assets/images/search-white.png"
import userImg from "../assets/images/user.png"
import cartImg from "../assets/images/cart.png"
import arrowExpandImg from "../assets/images/arrow-expand.png"
import heartRedImg from "../assets/images/heart-red.png"
import userBlueImg from "../assets/images/user-blue.png"
import settingsImg from "../assets/images/settings.png"
import instagramImg from "../assets/images/instagram.png"
import facebookImg from "../assets/images/facebook.png"
import tiktokImg from "../assets/images/tiktok.png"

function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="container">
          <a href="index.html" title="Discount">RÉDUCTION -30% SUR TOUT LE SITE CODE : ANAE30 <span className="hide-mobile">
              OFFRE DISPONIBLE JUSQU’AU
              10.05/2020</span></a>
        </div>
      </div>
      <div className="navbar-anae flexbox">
        <div className="toggleBtn">
          <button type="button" className="closebtn" onClick={openNav()}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="logo"><a href="index.html" title="Anae"><img src={logoImg} alt="Anae" /></a></div>
        <div className="searchbar">
          <input type="text" placeholder="Rechercher..." />
          <button><img src={searchImg} alt="Search" />
          </button>
        </div>
        <nav className="flexbox">
          <ul className="flexbox">
            <li className="dropdown-custom">
              <a href="Inspirations.html" title="Nouveautés">
                <span>Nouveautés</span>
              </a>
              <img src={downChevImg} alt="dropdown arrow" />
              <ul>
                <li><a href="index.html" title="Vêtements">Vêtements</a></li>
                <li><a href="index.html" title="Accessoires">Accessoires</a></li>
                <li><a href="index.html" title="Chaussures">Chaussures</a></li>
              </ul>
            </li>
            <li className="dropdown-custom">
              <a href="Recherche_Produit.html" title="Produits">
                <span>Produits</span>
              </a>
              <img src={downChevImg} alt="dropdown arrow" />
              <ul>
                <li><a href="Recherche_Produit.html" title="Vêtements">Vêtements</a></li>
                <li><a href="Recherche_Produit.html" title="Accessoires">Accessoires</a></li>
                <li><a href="Recherche_Produit.html" title="Chaussures">Chaussures</a></li>
              </ul>
            </li>
            <li><a href="Fabrication.html" title="Fabrication"><span>Fabrication</span></a></li>
            <li><a href="Inspirations.html" title="Blog"><span>Blog</span></a></li>
            <li><a href="espace-egerie-mobile.html" title="Nos égéries"><span>Nos égéries</span></a></li>
          </ul>
          <ul className="flexbox">
            <li><a href="login.html" title="Whishlist"><img src={heartImg} alt="Heart" /></a></li>
            <li className="mobile-block"><a href="index.html" title="search"><img src={searchWhiteImg} alt="search" /></a></li>
            <li><a href="mon-compte-acceuil.html" title="User"><img src={userImg} alt="User" /></a></li>
            <li><a href="panier.html" title="Cart"><img src={cartImg} alt="Cart" /></a></li>
          </ul>
        </nav>
      </div>
      {/*Mobile Nav HTML*/}
      <div className="mobile-nav" id="mobileNav">
        <div className="mobile-nav-inner">
          <div className="close-btn">
            <button onClick={closeNav()}><img src={cartImg} alt="Close" /></button>
          </div>
          <div className="search-box">
            <div className="searchbar">
              <input type="text" placeholder="Rechercher..." />
              <button><img src={searchImg} alt="Search" /></button>
            </div>
          </div>
          <ul className="flexbox flexColumn">
            <li className="dropdown-custom">
              <a href="Inspirations.html" title="Nouveautés">
                <span>Nouveautés</span>
              </a>
              <img src={arrowExpandImg} alt="dropdown arrow" />
              <ul>
                <li><a href="index.html" title="Vêtements">Vêtements</a></li>
                <li><a href="index.html" title="Accessoires">Accessoires</a></li>
                <li><a href="index.html" title="Chaussures">Chaussures</a></li>
              </ul>
            </li>
            <li className="dropdown-custom">
              <a href="Recherche_Produit.html" title="Produits">
                <span>Produits</span>
              </a>
              <img src={arrowExpandImg} alt="dropdown arrow" />
              <ul>
                <li><a href="Recherche_Produit.html" title="Vêtements">Vêtements</a></li>
                <li><a href="Recherche_Produit.html" title="Accessoires">Accessoires</a></li>
                <li><a href="Recherche_Produit.html" title="Chaussures">Chaussures</a></li>
              </ul>
            </li>
            <li><a href="Fabrication.html" title="Fabrication"><span>Fabrication</span></a></li>
            <li><a href="Inspirations.html" title="Blog"><span>Blog</span></a></li>
            <li><a href="espace-egerie-mobile.html" title="Nos égéries"><span>Nos égéries</span></a></li>
          </ul>
          <ul className="flexbox flexColumn nav-2">
            <li><a href="login.html" title="Mes favoris" className="whish"><img src={heartRedImg} alt="whislist" /><span>Mes favoris</span></a></li>
            <li><a href="mon-compte-acceuil.html" title="Mon compte" className="user"><img src={userBlueImg} alt="user" /><span>Mon
                  compte</span></a>
            </li>
            <li><a href="panier.html" title="Se déconnecter" className="setting"><img src={settingsImg} alt="settings" /><span>Se déconnecter</span></a></li>
          </ul>
          <div className="social-media">
            <p className="para2">Suivez-nous !</p>
            <ul className="flexbox">
              <li><a href="instagram.com" target="_blank" title="instagram"><img src={instagramImg} alt="instagram" /></a></li>
              <li><a href="facebook.com" target="_blank" title="facebook"><img src={facebookImg} alt="facebook" /></a></li>
              <li><a href="tiktok.com" target="_blank" title="tiktok"><img src={tiktokImg} alt="tiktok" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

function openNav() {
  // document.getElementById("mobileNav").style.width = "100%";
}
function closeNav() {
  // document.getElementById("mobileNav").style.width = "0";
}

export default Header
