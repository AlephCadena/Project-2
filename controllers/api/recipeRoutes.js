const axios = require('axios');
const router = require('express').Router();
const url='https://themealdb.com/api/json/v1/1/random.php';



router.get('/', (req,res)=>{
    axios.get(url)
    .then(data => console.log(data.data))
});

module.exports = router;