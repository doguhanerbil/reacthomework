import axios from "axios"
async function getData(id) {
    try {
        const {data : users} = await axios("https://jsonplaceholder.typicode.com/users/" +id)
        const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts/" +id)

        console.log("USER : ", users)
        console.log("POST : ", posts)
    }
    catch(e) {
        console.log(e)
    }
}


export default getData;