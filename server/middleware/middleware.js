import jwt from 'jsonwebtoken';
import User from "../models/User.js";

const verifyToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretKeyofnoteapp123@#");

        const user = await User.findById(decoded.id).select("name _id");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        req.user = { id: user._id, name: user.name };
        next();
    } catch (error) {
        console.error("Token verification error:", error.message);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default verifyToken;
