import Users from "../models/UserSchema.js";

export const addUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in adding user", error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await Users.find(req.body);
    res.status(201).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in fetching users", error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(201).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in fetching user by ID", error: err.message });
  }
};

export const updateUser=async(req,res)=>
{
    try{
        const user =await Users.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({message:"Error in updating user",error:err.message});
    }
}

export const deleteUser=async(req,res)=>
{
    try{
        const user =await Users.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"User deleted successfully"}); 
    }

    catch(err){
        res.status(500).json({message:"Error in deleting user",error:err.message});
    }
}