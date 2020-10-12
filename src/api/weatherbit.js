import axios from 'axios';

export default axios.create({
  baseURL: 'https://weatherbit-v1-mashape.p.rapidapi.com/',
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    //incase all free reques used up use other key or alternative api
    //"x-rapidapi-key": "0564442367mshfd949f0391218bcp144db3jsn0272b6fc96d8",
    "x-rapidapi-key": "062b65dd17msh999ccc0d69fea3fp1c5473jsna78d136cc3b0",
    "useQueryString": true
  },
});