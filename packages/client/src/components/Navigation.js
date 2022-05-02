import { MenuItem, MenuList } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledItem = styled(MenuItem)`
  display: inline-block;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.3rem;
  /* color: blue; */
  padding-right: 1rem;
  &.active {
    color: black;
  }
`;

export const Navigation = () => {
  return (
    <nav>
      <MenuList>
        <StyledItem>
          <Link to="/">Home</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/menu">Menu</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/order">Order</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/register">Register</Link>
        </StyledItem>
        <StyledItem>
          <Link to="/manage">Manage</Link>
        </StyledItem>
      </MenuList>
    </nav>
  );
};