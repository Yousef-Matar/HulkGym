export class User {
    public Username: string;
    public Email: string;
    public Gender: string
    constructor(name: string, address: string, sex: string) {
        this.Username = name;
        this.Email = address;
        this.Gender = sex;
    }
}