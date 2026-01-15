export class LoginUser {
    public userName: string;
    public userPassword: string;
    public userRole: string;
 
    constructor(uname: string, pwd: string, role: string) {
        this.userName = uname;
        this.userPassword = pwd;
        this.userRole = role;
    }
}