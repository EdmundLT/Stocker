import React, { useState, useEffect } from "react";
import axios from "axios";
const News = () => {
  const [newsList, setNews] = useState([]);
  function Top3(data){
    let temp = [];
    for (var i=0;i<3;i++){
      temp.push(data[i])
    }
    setNews(temp)
  }
  async function getNews() {
    await axios
      .get("http://localhost:8000/news/db/demo")
      .then(function (response) {
        const data = response.data.result;
        Top3(data);
        return data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  }
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="rounded-lg p-4 justify-center text-center shadow-xl bg-[#DEF2F1]">
      <p className="text-2xl font-Roboto pb-2">News</p>

      {newsList.map((news) => {
        return (
          <div className="pb-4 font-Roboto">
              <p className="text-left text-lg">{news.title}</p>
              <p className="pt-2 text-sm text-left">{news.content.substring(0,50)+ '...'}</p>
              <p className='text-xs pt-2 text-left'>Symbol: {news.symbols.toString().substring(0,20)}</p>
              <div className="pt-2">
              <a href={news.link} className='font-Roboto text-center p-2 border-2 border-solid border-[#3AAFA9] rounded-lg text-xs text-[#17252A] cursor-pointer hover:bg-[#2B7A78] shadow-lg'>Read more..</a>
              </div>
          </div>
        );
      })}


    </div>
  );
};

export default News;
