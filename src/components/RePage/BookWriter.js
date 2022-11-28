import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BookWriter() {
    return (
      <>
      <InputGroup className="mb-2">
          <InputGroup.Text id="writer">
            작가
          </InputGroup.Text>
          <input placeholder="이름을 입력하세요."></input>
        </InputGroup>
      </>
  
    );
  }
  
  export default BookWriter;