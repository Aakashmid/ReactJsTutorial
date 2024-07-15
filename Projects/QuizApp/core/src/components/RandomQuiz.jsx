import { useParams } from "react-router-dom"
import CollectData from "../api/ConnectApi"
import Header from "./framework/header";
import Footer from "./framework/footer";
import { useEffect, useState } from "react";
import { Checkbox, Container, FormControlLabel, RadioGroup, Typography ,Button} from "@mui/material";

export default function RandomQuiz() {
  const {topic}=useParams()
  
  const ApiUrl='http://127.0.0.1:8000/r/'+topic;
  const [dataState]=CollectData(ApiUrl);
  const a=dataState.data.flatMap((q)=>q.answer)  // flatMap return the list  of value specify in its function // for example in this case it return list of q.answer 
  const aLength=a.length

  const [answer,setAnswer]=useState({})

  const handleSelection=(e)=>{
    setAnswer({...answer,[e.target.value]:e.target.checked}) 
  }


  const SetInitialAnswers=()=>{
      let z =a.flatMap((obj)=> obj.id)
      var object ={}
      for (let i = 0; i < aLength; i++) {
        object[z[i]]=false
      }
      return object 
  }

  useEffect(()=>{
    if (Object.keys(answer).length === 0) {
      setAnswer(SetInitialAnswers())
    }
  },[answer])

  console.log(answer)

  const checkAnswer=()=>{
    // console.log(answer)
  }
  return (
    <>
    <Header/>
    <Container component="main" maxWidth="xs">
    <div className="paper">
      {dataState.data.map(({title,answer},i)=>(
        <div className="" key={i}>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          {answer.map(({answer_text,id})=>(
            <RadioGroup key={id}>
              <FormControlLabel control={<Checkbox value={id} color="primary" onChange={handleSelection} />} label={answer_text}  />
            </RadioGroup>
          ))}
          <Button type="submit" fullWidth variant="contained" color="primary" className="submitBtn" onClick={checkAnswer}>
            Submit
          </Button>
        </div>
      ))}
       
      
    </div>
    </Container>
    <Footer/>
    </>
  )
}
