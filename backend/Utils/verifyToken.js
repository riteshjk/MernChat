import jwt from "jsonwebtoken";

export const verifyToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    res.cookie("jwt", token, {      
        httpOnly: true,  // prevent xss attack cross-site scripting
        sameSite: "strict",
        secure: true,
        maxAge: 15 * 24 * 60 * 60 * 1000    //MS(milli seconds)
    });

}