import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Disc, X, Circle, Menu } from "react-feather";
import classnames from "classnames";
import Lgimage from "../../../../../src/assets/img/Asset 12Icon.svg";
import Smimage from "../../../../../src/assets/img/Uapp_fav.png";
class SidebarHeader extends Component {
  render() {
    let {
      toggleSidebarMenu,
      activeTheme,
      collapsed,
      toggle,
      sidebarVisibility,
      menuShadow,
    } = this.props;
    return (
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row d-flex">
          <li className="nav-item mr-auto">
            <NavLink to="/" className="navbar-brand">
              <div className="brand-logo">
                {/* <h2 className="brand-text mb-0">Z-DESK</h2> */}

                <div className="hide-min-678">
                  <img src={Lgimage} />
                </div>
                <div className="show-max-678">
                  <img src={Smimage} />
                </div>
              </div>
            </NavLink>
          </li>
          <li className="nav-item nav-toggle">
            <div className="nav-link modern-nav-toggle">
              {collapsed === false ? (
                <Menu
                  onClick={() => {
                    toggleSidebarMenu(true);
                    toggle();
                  }}
                  className={classnames(
                    "toggle-icon icon-x d-none d-xl-block font-medium-4 1 text-uapp"
                    // {
                    //   "text-primary": activeTheme === "primary",
                    //   "text-success": activeTheme === "success",
                    //   "text-danger": activeTheme === "danger",
                    //   "text-info": activeTheme === "info",
                    //   "text-warning": activeTheme === "warning",
                    //   "text-dark": activeTheme === "dark",
                    //   "":activeTheme === "text-uapp",
                    // }
                  )}
                  size={20}
                  data-tour="toggle-icon"
                />
              ) : (
                <Menu
                  onClick={() => {
                    toggleSidebarMenu(false);
                    toggle();
                  }}
                  className={classnames(
                    "toggle-icon icon-x d-none d-xl-block font-medium-4 2 text-uapp"
                    // {
                    //   "text-primary": activeTheme === "primary",
                    //   "text-success": activeTheme === "success",
                    //   "text-danger": activeTheme === "danger",
                    //   "text-info": activeTheme === "info",
                    //   "text-warning": activeTheme === "warning",
                    //   "text-dark": activeTheme === "dark"
                    // }
                  )}
                  size={20}
                />
              )}
              <Menu
                onClick={sidebarVisibility}
                className={classnames(
                  "toggle-icon icon-x d-block d-xl-none font-medium-4 3 text-uapp"
                  // {
                  //   "text-primary": activeTheme === "primary",
                  //   "text-success": activeTheme === "success",
                  //   "text-danger": activeTheme === "danger",
                  //   "text-info": activeTheme === "info",
                  //   "text-warning": activeTheme === "warning",
                  //   "text-dark": activeTheme === "dark"
                  // }
                )}
                size={20}
              />
            </div>
          </li>
        </ul>
        <div
          className={classnames("shadow-bottom", {
            "d-none": menuShadow === false,
          })}
        />
      </div>
    );
  }
}

export default SidebarHeader;