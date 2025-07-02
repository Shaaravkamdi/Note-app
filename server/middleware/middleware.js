// import jwt from 'jsonwebtoken'
// import User from "../models/User.js"

// const middleware = async (req, res, next) => {
//     try{
// const token = req.headers.authorization.split(' ')[1]

// if(!token) {
//     return res.status(401).json({success: false, message: "Unauthorized"})
// }

// const decoded = jwt.verify(token, "secretKeyofnoteapp123@#");
// if(!decoded) {
//     return res.status(401).json({success: false, message: "wrong token"})

// }
// const user = await User.findById({_id: decoded.id})

// if(!user) {
//     return res.status(404).json({success: false, message: "no user"})
// }

// const newUser = {name: user.name, id: user._id}
// req.user = newUser
// next()

//     }catch(error){
//     return res.status(500).json({success: false, message: "please login"})

//     }
// }

// export default middleware


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
