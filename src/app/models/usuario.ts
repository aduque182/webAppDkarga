export class Usuario{
    constructor(
public email:String,
public displayName:String,
public password:string,
public imagen:string,
public rol:string

    ){

    }
}


/*
email: {type: String, unique: true, lowercase:true},
displayName: String,
password: {type:String, select:false},
signupDate: {type: Date, default: Date.now()},
lastLogin: Date*/