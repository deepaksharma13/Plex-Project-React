import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
function Question() {
  return (
    <div className="askQuesWrap">
      <div className="col-12 shadow-box  pb-0 rounded-bottom-0 mx-0 mb-0 ">
        <div className="row py-2">
          <div className="col-sm-6 col-9 QuestionAsk">
            <p className="para text-white ">Have a question about Tyres?</p>
            <p className="mt-2 text-white mb-2">
              Get an answer in 24 hours from our experts.
            </p>
            <div className="col-12">
              <div className="row">
                <div className="col-sm-8">
                
                  <div className="d-none question_thank">
                    <p className="mb-0 text-white">
                      Thankyou for asking question, we will review and provide
                      you an expert answer.
                    </p>
                  </div>
                </div>
                <div className="col-auto px-0"></div>
              </div>
            </div>
            <div className="col-12">
              <Form>
                <input type="hidden" />
                <div className="row align-items-center d-flex">
                  <div className="col-sm-10 col-12">
                    <InputGroup size="sm" className="mb-3">
                      <Form.Control
                      className="p-3"
                        aria-label="Small"
                        placeholder="Ask or search your question"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </InputGroup>
                  </div>
                  <div className="col-sm-auto px-0 col-12 mt-1 mt-sm-0 text-sm-start text-center">
                    <Button className="btn theme-btn py-2 my-0 border-0 d-none">
                      Ask
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="col-sm-4 col-3 px-sm-0 d-flex align-items-center ml-auto justify-content-sm-end">
            <span className="question-banner">
              <img
                className="img-fluid lazy"
                width="70"
                height="70"
                data-original="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&amp;tr=q-60"
                src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&amp;tr=q-60"
                alt="Have a Question"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
