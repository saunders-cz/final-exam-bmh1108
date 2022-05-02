import { React } from "react";
import { Container } from "@mui/material";
import { CategoryList } from "../modules/category/CategoryList.js";

export const MenuPage = () => {
    return (
        <Container>
            <CategoryList />
        </Container>
    )
}