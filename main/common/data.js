//This Class is For storing all data that is used
class DataClass{
    constructor()
    {
        // change email_id to 1234
        this.email_id =1221;

        this.name = "TestName";
        this.lastName = "TestLastName";
        this.email;
        this.password = "TestPassword123!";
        this.number = "994411231";
    }
    async get_base_url()
    {
        return this.baseUrl;
    }
    async get_name()
    {
        return this.name;
    }
    async get_last_name()
    {
        return this.lastName;
    }
    async get_email()
    {
        this.email_id++;
        this.email = "TestRame"+this.email_id+"@gmail.com";
        return this.email;
    }
    async get_password()
    {
        return this.password;
    }
    async get_number()
    {
        return this.number;
    }
}

module.exports = new DataClass();