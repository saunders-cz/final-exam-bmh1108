import { Badge, Icon, Popover, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "./CartContext";

const Wrapper = styled.div`
  padding: 1rem;
  cursor: pointer;
`;

export const CartStatus = () => {
  const { hasPastries, pastryCount } = useCart();
  const navigate = useNavigate();
  const handleClick = () => navigate("/cart");

  return (
    <Tooltip
      title={
        hasPastries ? `Click to see contents` : "You have no items in your cart"
      }
    >
      <Wrapper onClick={handleClick} hasPastries={hasPastries}>
        <Badge badgeContent={pastryCount} color="primary">
          <Icon>shopping_cart</Icon>
        </Badge>
      </Wrapper>
    </Tooltip>
  );
};