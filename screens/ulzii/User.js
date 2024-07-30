
class User {
    constructor(Name="User", Age=20, Height=160, Weight=60) {
      this.Name = Name;
      this.Age = Age;
      this.Height = Height;
      this.Weight = Weight;
    }
    getUserInfo() {
      return `Name: ${this.Name}, Age: ${this.Age}, Weight: ${this.Weight}`;
    }
}

  export default User;