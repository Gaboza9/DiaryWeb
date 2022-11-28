import ReviewContents from "../components/ReviewContents";
import '../fonts/font.css'

function BookReviewPage() {
  return (
    <>
      <h1 class="text-center mt-4" style={{fontFamily:'puradak'}}>책 리뷰 페이지</h1>
      <ReviewContents type="작가"/>
    </>
  );
}

export default BookReviewPage;