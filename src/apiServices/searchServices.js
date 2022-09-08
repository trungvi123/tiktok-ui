import axios from 'axios';



export const searchApi = async (q,type='less') => {
    try {
        const respon = await axios.get('https://tiktok.fullstack.edu.vn/api/users/search', {
            params: {
                q,
                type,
            },
        })
        return respon.data.data
    } catch (error) {
      console.log("error");
    }
}
