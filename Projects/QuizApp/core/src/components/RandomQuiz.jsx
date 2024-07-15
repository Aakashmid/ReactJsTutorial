import { Link, useParams } from "react-router-dom"
import CollectData from "../api/ConnectApi"
import Header from "./framework/header";
import Footer from "./framework/footer";
import { useEffect, useState } from "react";
import { Checkbox, Container, FormControlLabel, RadioGroup, Typography, Button, Alert, AlertTitle } from "@mui/material";

export default function RandomQuiz() {
  const { topic } = useParams()

  const ApiUrl = 'http://127.0.0.1:8000/r/' + topic;
  const [dataState] = CollectData(ApiUrl);
  const a = dataState.data.flatMap((q) => q.answer)  // flatMap return the list  of value specify in its function // for example in this case it return list of q.answer 
  const aLength = a.length

  const [answer, setAnswer] = useState({})
  const [answer_check, setAnswerCheck] = useState()

  useEffect(() => {
    var initialAnswerStatus = {}
    for (let i = 0; i < aLength; i++) {
      initialAnswerStatus[a[i].id] = false
    }
    setAnswer(initialAnswerStatus)
  }, [dataState])


  const handleSelection = (e) => {
    setAnswer({ ...answer, [e.target.value]: e.target.checked })
  }


  const checkAnswer = () => {

    const isAnswerEqual = (a, b) => {
      return (
        Array.isArray(a) && Array(b) && a.length === b.length && a.every((value, index) => value === b[index])
      )
    }

    // a.every((value,index)=> value === b[index])  // it return true if value is equal to b[index] for all index else return false

    let RightAnswer = {}
    for (let i = 0; i < aLength; i++) {
      RightAnswer[a[i].id] = a[i].is_right
    }

    if (isAnswerEqual(Object.values(answer), Object.values(RightAnswer))) {  // Object.values(obj)
      setAnswerCheck(true)
    }
    else {
      setAnswerCheck(false)
    }
    // console.log(RightAnswer)
    // console.log(answer)
  }

  const refresPage = () => {
    window.location.reload()
  }

  function Result() {
    if (answer_check === true) {
      return (
        <Alert severity="success">
          <AlertTitle>
            Correct Answer
          </AlertTitle>
          <Link hrefLang="#" variant='body2' onClick={refresPage}>
            {"Next Question"}
          </Link>
        </Alert>
      );
    } else if (answer_check === false) {
      return (
        <Alert severity="error">
          <AlertTitle>
            Wrong Answer
          </AlertTitle>

        </Alert>
      );
    }
  }
  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <div className="paper" style={{marginTop:40,marginBottom:10}}>
          {dataState.data.map(({ title, answer }, i) => (
            <div className="" key={i} >
              <Typography component="h1" variant="h5">
                {title}
              </Typography>
              {answer.map(({ answer_text, id }) => (
                <RadioGroup key={id}>
                  <FormControlLabel control={<Checkbox value={id} color="primary" onChange={handleSelection} />} label={answer_text} />
                </RadioGroup>
              ))}
              <Button type="submit" fullWidth variant="contained" color="primary" className="submitBtn" onClick={checkAnswer}>
                Submit
              </Button>
            </div>
          ))}
        </div>
        <Result/>
      </Container>
      <Footer />
    </>
  )
}
