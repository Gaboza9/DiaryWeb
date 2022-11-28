import Calendar from './RePage/Calendar'
import StarRating from './RePage/StarRating'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ImageUpload from './Menu/ImageUpload';
import KjwLeft from './kjwLeft';
import KjwRight from './kjwRight';

function ReviewContents(props){

  const body ={
    display:"flex",
    flexDirection:"row",
    width:"100%"
  }
  const secLeft={
    width:"100px"
  }
  const secRight={
    width:"100px"
  }
  const secCenter={
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"column"
  }

  const submitButton={
    width:"100%",
    height:"100%",
    flexDirection:"column"
  }

  return(
    <>
    <Container>
      <div style={body}>
        <section className="secLeft">
                    <KjwLeft />
                </section>

        <section style={secCenter}>
          <div className="body_review" class="mt-5 mx-5">
        
          {
            <Table bordered>
              <thead>
                <tr>
                  <th class="text-center align-middle">제목</th>
                  <td width="60%" ><textarea   rows="1" class="form-control" height="500px" type="text" style={{border: 0}}
                  placeholder="제목을 입력하세요"></textarea></td>
                  <th class="text-center align-middle">날짜</th>
                  <td width="20%" class="align-top"><Calendar /></td>
                </tr>

                <tr>
                  <th class="text-center align-middle">{props.type}</th>
                  <td width="60%"><textarea   rows="1" class="form-control" height="500px" type="text" style={{border: 0}}
                  placeholder="이름을 입력하세요"></textarea></td>
                  <th className="text-center align-middle">별점</th>
                  <td width="20%" class="text-center align-middle"><StarRating /></td>
                </tr>
              </thead>
            </Table>
          }

          {
            <Table bordered>
              <tbody>
                <tr height="400px">
                  <td width="40%">
                    <ImageUpload />
                  </td>
                    
                  <td colspan = {2}><textarea   rows="22" class="form-control" height="500px" type="text" style={{border: 0}}
                  placeholder="한줄평을 입력하세요"></textarea>
                  </td>
                </tr>
              </tbody>
            </Table>
          }
          </div>

          <div class="d-md-flex justify-content-md-end">
          <button class="btn btn-secondary me-md-5 mb-3" type="button">작성하기</button></div>
          

        </section>
        

        <section className="secRight">
                    <KjwRight />
                </section>
      </div>

    </Container>
  </>
  );
}

export default ReviewContents;