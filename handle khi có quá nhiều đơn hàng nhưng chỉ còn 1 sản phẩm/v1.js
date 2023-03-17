const express = require('express')
const app = express()
const { createClient } = require('redis');
const client = createClient({
    url: 'redis://127.0.0.1:6379'
});





app.get('/order', async(req,res)=>{

    await client.connect()

    let slTonkho = 10

    let keyname = 'iphone13'

    let slmua = 1

    let getKey = await client.exists(keyname)

    if(getKey===0){
        await client.set(keyname,0)
    }


    let slbanra = await client.get(keyname)

    console.log('so luong ban ra truoc khi mua la===',slbanra)

  
    //slbanra = client.incrBy(slbanra,slmua) nếu thay xuong dưới sẽ bị sai
    if (+slbanra + slmua > slTonkho){
        console.log('het hang')
       await client.quit()
        return res.json({
            msg: 'Da het hang',
        })
    }

    await client.incrBy(keyname,slmua)

    slbanra = await client.get(keyname)

   await console.log('so luong ban ra sau khi mua la===', slbanra)

     




   

    












    client.quit()
    return res.json({
        status : 'success',
        msg:'ok',
        time: new Date().getTime()
    })
})





app.listen(3000,()=>{
    console.log(`app running at 3000`)
})
