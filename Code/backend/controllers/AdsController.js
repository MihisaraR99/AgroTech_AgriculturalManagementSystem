const Ads = require("../models/AdvertismentModel");


 const addAds = (req, res)=>{

  const {type,town,AgentRef,heading,description,sizeOfArea,priceRate,availability,contactName,email,phone} = req.body;
  

  const newAd = new Ads({

      type,
      town,
      AgentRef,
      heading,
      description,
      sizeOfArea,
      priceRate,
      availability,  
      contactName,
      email,
      phone,
  
  });

   newAd.save().then((createdAds)=>{
      res.json(createdAds);
  }).catch((err)=>{
      console.log(error);
  });
};

const getAds = async (req, res) => {

  try{
    const ads = await Ads.find();
    res.json(ads)

  }catch(error){
    res.status(400).json(error);
  }
}

const updateAds = async (res,req) => {
  const adID = req.params.id;
  try{
    const ad = await Ads.findById(adID);

    if(!ad){
       return res.status(404).json("There is no Ad");
    }

    const {type,town,AgentRef,heading,description,sizeOfArea,priceRate,availability,contactName,email,phone} = req.body;
    const ads = await Ads.findByIdAndUpdate(adID,{type,town,AgentRef,heading,description,sizeOfArea,priceRate,availability,contactName,email,phone});

    res.status(200).json(ads);
  }
  catch(error){
    res.status(400).json(error.message);
  }
  
}

const removeAds = async (req,res) => {
  const adID = req.params.id;

  try{
    const ad = await Ads.findById(adID);
    if(!ad){
      return res.status(404).json("There is no Ad to remove");
    }

    const removedAds = await Ads.findByIdAndDelete(adID);
    res.status(200).json(removedAds)
  }catch(error){
    res.status(400).json(error.message);


  }
}
module.exports = {
  addAds,
  getAds,
  updateAds,
  removeAds,
}