export const register = (req, res)=>{
    const obj= req.body;
    console.log(obj);

    res.status(200).json({
        success: true,
        message: "account created successfully"
    });
};

export const login = (req, res)=>{
    // const {email, password} = res.body;
    const data = res.body;
    // console.log(email, password);
    console.log(data);
    
    res.status(200).json({
        success: true,
        message: "login successfull"
    })
};