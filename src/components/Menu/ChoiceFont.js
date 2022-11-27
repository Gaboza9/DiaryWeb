import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';

function ChoiceFont() {
    const checkedArr=[];

  return (
    <>
     <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Bold"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Italic"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
            />
          <Form.Check
            inline
            label="Underline"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
            />
           <Form.Check
            inline
            label="Line"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
            />
        </div>
      ))}
    </Form>
    </>
  )
}

export default ChoiceFont