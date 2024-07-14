import { useParams } from "react-router-dom"
import CollectData from "../api/ConnectApi"
import Header from "./framework/header";
import Footer from "./framework/footer";
import { useEffect } from "react";

export default function RandomQuiz() {
  const {topic}=useParams()
  // console.log(topic)
  const ApiUrl='http://127.0.0.1:8000/r/'+topic;
  const [dataState]=CollectData(ApiUrl);
  // console.log(dataState) 
  useEffect(()=>{
    console.log('hello')
  },[])
  return (
    <>
    <Header/>

    <Footer/>
    </>
  )
}
