import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Comment() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Text>
        <textarea placeholder='한줄평을 적어주세요.'/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Comment;