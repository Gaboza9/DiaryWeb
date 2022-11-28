import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function BookTitle() {
    return (
      <>
        <br />
        <InputGroup className="mb-1">
          <InputGroup.Text id="booktitle">
            제목
          </InputGroup.Text>
          <input placeholder="제목을 입력하세요."></input>
        </InputGroup>
      </>
  
    );
  }
  
  export default BookTitle;