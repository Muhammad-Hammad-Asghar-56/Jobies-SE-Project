
import Users from "../models/userModel.js";



// Register function
export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    // Validation
    if (!firstName || !lastName || !email || !password) {
      throw new Error("All fields are required");
    }

    const userExist = await Users.findOne({ email });

    if (userExist) {
      throw new Error("Email Address already exists");
    }

    const user = await Users.create({
      firstName,
      lastName,
      email,
      password,
    });

    // Generate user token
    const token = await user.createJWT();

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accountType: user.accountType,
      },
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(400).json({ error: true, message: error.message });
  }
};

// Sign In function
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Validation
    if (!email || !password) {
      throw new Error("Please provide user credentials");
    }

    // Find user by email
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new Error("Invalid email or password");
    }

    user.password = undefined;

    // Generate user token
    const token = user.createJWT();

    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(401).json({ error: true, message: error.message });
  }
};













//  first it was like this


// import users from "../models/userModel.js";



// export const register = async (req, res, next) =>
//  {
//     const { fistName,lastName, email, password } = req.body;
//     // validate fields   
//     if (!fistName) {
//         next("FirstName is required");
//     }
//     if (!lastName) {
//         next("LastName is required");
//     }
//     if (!email) {
//         next("Email is required");
//     }
//     if (!password) {
//         next("Password is required");
//     }

//     // check for existing user
//     try {
//         const UserExist= await users.findOne({email});
//         if(UserExist){
//             next("Email ALready Exits");
//             return;
//         }
//         const user= await users.create(
//             {
//                 fistName,
//                 lastName,
//                 email,
//                 password
//             }
//         );
//         // user token








// // account created successfully by giving token
//         const token = user.createJWT();
//             res.status(201).send({
//             success: true,
//             message: 'Account created successfully',
//             user:{
//                 _id : user._id,
//                 fistName:user.fistName,
//                 lastName:user.lastName,
//                 email:user.email,
//                 accountType:user.accountType,
//                 // contact:user.contact,

//             },
//             token,
            
//         }
//         );

// // catch error
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({
//             // success: false,
//             message:error.message,
//         });
        
//     }


 
// };
// export const signIn = async (req, res, next) =>
//  {
//     const { email, password } = req.body;
//     // validate fields
//     try {
//         if(!email || !password){
//             next("Please enter all fields");
            
//             return;
//         }

//         //  find user by email
//         const user= await users.findOne({email}).select('+password');
//         if(!user){
//             next("Invalid Credentials");
//             return;
//         }

//         // check if password matches
//         // const ismatch= await users.comparePassword(password);
//         const IsMatch = await user.comparePassword(password);

//         if(!IsMatch){
//             next("Invalid Credentials");
//             return;
//         }

//         user.password=undefined;
//          const token = user.createJWT();
//          res.status(201).send({
//             success: true,
//             message: 'Login successfully',
//             user,
//             token,
//         }
//         );




        
        
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({
//             // success: false,
//             message:error.message,
//         });
//     }

 
// };
// export const logout = async (req, res, next) =>
//  {

 
// };


// export  const register = async   (req, res, next) => {
//   const { firstName, lastName, email, password } = req.body;

//   //validate fileds

//   if (!firstName) {
//     next("First Name is required");
//   }
//   if (!email) {
//     next("Email is required");
//   }
//   if (!lastName) {
//     next("Last Name is required");
//   }
//   if (!password) {
//     next("Password is required");
//   }

//   try {
//     const userExist = await Users.findOne({ email });

//     if (userExist) {
//       next("Email Address already exists");
//       return;
//     }

//     const user = await Users.create({
//       firstName,
//       lastName,
//       email,
//       password,
//     });

//     // user token
//     const token = await user.createJWT();

//     res.status(201).send({
//       success: true,
//       message: "Account created successfully",
//       user: {
//         _id: user._id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         accountType: user.accountType,
//       },
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     console.log(error.message);
//     console.log("register kerty hoa error arha ha ");
//     res.status(404).json({ message: error.message});
//   }
// };



// export const signIn = async (req, res, next) => {
//   const { email, password } = req.body;

//   try {
//     //validation
//     if (!email || !password) {
//       next("Please Provide AUser Credentials");
//       return;
//     }

//     // find user by email
//     const user = await Users.findOne({ email }).select("+password");

//     if (!user) {
//       next("Invalid email or password");
//       return;
//     }

//     // compare password
//     const isMatch = await user.comparePassword(password);

//     if (!isMatch) {
//       next("Invalid email or password");
//       return;
//     }

//     user.password = undefined;

//     const token = user.createJWT();

//     res.status(201).json({
//       success: true,
//       message: "Login successfully",
//       user,
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ message: error.message });
//   }
// };

