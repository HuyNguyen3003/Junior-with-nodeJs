const { createClient } = require('redis');
const client = createClient();

const addDelayEventOrder =async (id) =>{
    //await client.connect()


    await client.SETEX(id,10,'Cancel id order')

 





  // await client.quit()
  


}

module.exports={
    addDelayEventOrder
}