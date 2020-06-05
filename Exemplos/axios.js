import axios from 'axios';

class Api{
    static async getUser(username){
        const response = await axios.get('URL github/${username}');

        console.log(response);
    }
}

Api.getUser('usuario');