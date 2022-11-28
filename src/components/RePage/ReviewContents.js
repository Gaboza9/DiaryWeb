import Calendar from './Calendar'
import StarRating from './StarRating'
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';

function ReviewContents(){

    return(
      <>
    <Container>
        <div className="body_review" class="mt-5">
            <Table bordered>

            <thead>
                    <tr>
                    <th class="text-center">제목</th>
                    <th colspan = {2}><input type="text" style={{border: 0}} class="align-middle"
                    placeholder="제목을 입력하세요"></input></th>
                      <th class="text-center">작가</th>
                      <th colspan = {2}><input type="text" style={{border: 0}} class="align-middle"
                      placeholder="이름을 입력하세요"></input></th>
                      </tr>

                    <tr>
                    <th class="text-center align-middle">날짜</th>
                    <td colspan = {2}><Calendar /></td>
                    <th class="text-center align-middle">별점</th>
                    <td colspan = {2} class="align-middle"><StarRating /></td>
                    </tr>
                </thead>
            </Table>

            <Table bordered>
                <tbody>
                  <tr>
                    <td> </td>
                    <td colspan = {2}><textarea type="text" style={{border: 0}}
                    placeholder="한줄평을 입력하세요"></textarea></td>
                  </tr>
                </tbody>
            </Table>
        </div>
        
        </Container>
    </>
    );
}

export default ReviewContents;