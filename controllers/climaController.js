const { response } = require('express');
const axios = require('axios');

const locationClima = async(req,res = response) =>{
  try {
    const ipAddress = req.ip;
    await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.IPAPI}&ip_address=${ipAddress}`).then((hol)=>{
      if(hol?.data?.city){
        const {ip_address,city,region,postal_code,country,country_code,continent,continent_code,longitude,latitude,timezone} = hol.data;
        const form ={ip_address,city,region,postal_code,country,country_code,continent,continent_code,longitude,latitude,timezone};      
        return res.status(200).json(form);
      }else{
        return res.status(400).json({msg:'Error en la peticion'});
      }
    }).catch((err)=>{
      console.log(err);
      return res.status(400).json({msg:'Error en la peticion'});
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({msg:'Error en la peticion'});
  }
};

const currentClima = async(req,res = response) =>{
  try {
    const city = req?.params?.city;
    if(city && city !== undefined){
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.CLIMA}&units=metric`).then((hol)=>{
        if(hol?.data?.name){
          const {dt,cod,base,clouds,...data} = hol.data;
          const form ={ fecha: new Date(dt * 1000),...data};
          return res.status(200).json(form);
        }else{
          return res.status(400).json({msg:'Error en la peticion'});
        }
      }).catch((err)=>{
        console.log(err);
        return res.status(400).json({msg:'Error en la peticion'});
      });
    }else{
      const ipAddress = req.ip;
      await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.IPAPI}&ip_address=${ipAddress}`).then(async(hol)=>{
        if(hol?.data?.city){
          const {data} = hol;
          await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${data?.latitude}&lon=${data?.longitude}&appid=${process.env.CLIMA}&units=metric`).then((cli)=>{
            if(cli?.data?.name){
              const {dt,cod,base,...data} = cli.data;
              const form ={ fecha: dt * 1000,...data};
              return res.status(200).json(form);
            }else{
              return res.status(400).json({msg:'Error en la peticion'});
            }
          }).catch((err)=>{
            console.log(err);
            return res.status(400).json({msg:'Error en la peticion'});
          });
        }else{
          return res.status(400).json({msg:'Error en la peticion'});
        }
      }).catch((err)=>{
        console.log(err);
        return res.status(400).json({msg:'Error en la peticion'});
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Error en la peticion'});
  }
};

const forecastClima = async(req,res = response) =>{
  try {
    const city = req?.params?.city;
    if(city && city !== undefined){
      await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.CLIMA}&units=metric`).then((hol)=>{
        if(hol?.data?.city?.name){
          const {cod,message,cnt,...data} = hol.data;
          return res.status(200).json(data);
        }else{
          return res.status(400).json({msg:'Error en la peticion'});
        }
      }).catch((err)=>{
        console.log(err);
        return res.status(400).json({msg:'Error en la peticion'});
      });
    }else{
      const ipAddress = req.ip;
      await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.IPAPI}&ip_address=${ipAddress}`).then(async(hol)=>{
        if(hol?.data?.city){
          const {data} = hol;
          await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${data?.latitude}&lon=${data?.longitude}&appid=${process.env.CLIMA}&units=metric`).then((cli)=>{
            if(cli?.data?.city?.name){
              const {cod,message,cnt,...data} = cli.data;
              return res.status(200).json(data);
            }else{
              return res.status(400).json({msg:'Error en la peticion'});
            }
          });
        }else{
          return res.status(400).json({msg:'Error en la peticion'});
        }
      }).catch((err)=>{
        console.log(err);
        return res.status(400).json({msg:'Error en la peticion'});
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg:'Error en la peticion'});
  }
};

module.exports = {
  locationClima,
  currentClima,
  forecastClima
};