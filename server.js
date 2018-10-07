// COnfiguration to fire up a local server

const bS=require('browser-sync');

const reactS=bS.create('LocalServer');

if(bS.has('LocalServer')){

    let config={
        ui:false,
        server:true,
        port:9227,
        serveStatic:['./assests'],
        https:false,
        files:['./assests/css/*.css','./assests/js/*.js','./assests/icons/*.css']
    }
    
    /* Starts the Server */

    bS.init(config,()=>{
        console.log('Let\'s talk in the clouds...')
    });


}else{
    console.error('Error while creating server');
}