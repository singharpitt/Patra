import { Request, Response, NextFunction } from "express";
import StatusCodes from "../../config/StatusCode";

const parameterValidation = (req: Request, res: Response, next: NextFunction): (Response | void)=>{
    const body = req.body;

    if(body.authorId){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Author ID can not be set by the user"
        });
    }

    if(Object.keys(body).length<=9 && Object.keys(body).length>=3){
       return next(); 
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Data recieved is not in the correct format"
    });
}

export default parameterValidation;