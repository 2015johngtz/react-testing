// Imports
import React from "react";
import "./Navigation.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import useTab from "@mui/base/useTab";

const pages = ["About", "Portfolio", "Hire Me"];

// Function that renders nav links and calls setCurrentPage allowing state to be changed
function Navigation({ currentPage, setCurrentPage, handleCloseNavMenu }) {
  return (
    <ul className="nav nav-tabs">
      {pages.map((page) => (
        <li key={page} className="nav-item">
          <a
            id="nav-link"
            href={`#${page.toLowerCase().replace(/\s/g, '-')}`} // Use page names as IDs
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "nav-link active" : "nav-link"}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>

    // Below is an in progress new navbar -> the code below gives functionality to the nav links/buttons

    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     display: { xs: "none", md: "flex" },
    //     justifyContent: { md: "end" },
    //   }}
    // >
    //   {pages.map((page) => (
    //     <Button
    //       key={page}
    //       onClick={() => {
    //         setCurrentPage(page);
    //         handleCloseNavMenu();
    //       }}
    //       sx={{ my: 2, color: "#EBDFCC", display: "block" }}
    //     >
    //       {page}
    //     </Button>
    //   ))}
    // </Box>
  );
}

// Export
export default Navigation;
