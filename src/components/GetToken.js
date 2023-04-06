import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/styles/frontend";

const LipaToken=()=>{
    const [token, setToken]=useState("")
    
    const handleToken=()=>{
        const consumerKey = process.env.CONSUMER_KEY;
        const consumerSecret = process.env.CONSUMER_SECRET;
        
        const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Basic ${auth}`,
        };
        
        const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
        
        axios.post(url, null, { headers })
          .then(response => {
            const accessToken = response.data.access_token;
            setToken(accessToken)
          })
          .catch(error => {
            console.error(error);
          });
        
      }

    return <Button onClick={handleToken}>Generate Token</Button>
}
