import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
    res.cookie("jwt", token, {
        httpOnly: true, //prevent access from javascript
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        sameSite: "strict", // CSRF attack prevention
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
}