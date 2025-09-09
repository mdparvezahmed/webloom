export const isAuthenticated = (req, res, next) => {
    console.log("middleware called");
    next();
};