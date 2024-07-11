const userTypeDef=`#graphql
type User{
    _id:ID! //required
    username:String!
    name:String!
    password:String!
    profilePicture:Stringgender:String!
    gender:String!

}

type Query{
    users:[User!] #Return array of users
    authUser:User
    user(userId!): User
}

type mutation{
    signUp(input:SignUpInput!):User
    login(input:LoginInput!):User
    logout:LogoutResponse
}
input SignUpInput{
    username:String!
    name:String!
    password:String!
    gender:String!
}

input LoginInput{
    username:String!
    password:String!
    
}
type LogoutResponse{
    message:String
    
}
`
export default userTypeDef;