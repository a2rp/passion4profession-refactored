import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { routeConfig, fallbackRoute } from "./lib/routeConfig";
import BlogHeroImage from "./components/blogHeroImage";

const PageLoader = () => {
    return (
        <Box
            sx={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1.5,
            }}
        >
            <CircularProgress size={34} thickness={4} />
            <Typography variant="body2">Loading topic...</Typography>
        </Box>
    );
};

const AppRoutes = () => {
    const location = useLocation();
    const normalizedPath = location.pathname.replace(/\/+$/, "") || "/";
    const archiveRoute = routeConfig.find(
        (route) =>
            route.path === normalizedPath && route.path.startsWith("/archive/"),
    );
    const heroSlug = archiveRoute?.path.slice("/archive/".length);

    return (
        <>
            {heroSlug ? <BlogHeroImage slug={heroSlug} /> : null}

            <Suspense key={location.pathname} fallback={<PageLoader />}>
                <Routes>
                    {routeConfig.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}

                    <Route
                        path={fallbackRoute.path}
                        element={fallbackRoute.element}
                    />
                </Routes>
            </Suspense>
        </>
    );
};

export default AppRoutes;
