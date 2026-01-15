import React, { useState } from 'react'

export default function UseState09() {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState(null);

    const comments = [
        {author: "홍길동", title: "배송 빨라요"},
        {author: "김길동", title: "배송 느려요"},
        {author: "이길동", title: "아자스"},
        {author: "박길동", title: "배송 꼼꼼해요"},
        {author: "최길동", title: "생각보다 크기가 작아요"},
    ];

    const searchCommentClick = (e) => {
        let found = null;
        // 1. for
        for (let i=0;i<comments.length;i++) {
            let comment = comments[i];
            let name = comment.name;
            if (name === author) {
                setComment(found);
            }
        }

        // 2.find: 1개
        // 순회하면서 rueutn값이 true인 요소를 리턴
        found = comments.find((comment) => {
            return comment.author === author
        });

        setComment(found);

        // 3. filter: 여러개
        found = comments.filter((comment) => {
            return comment.author === author
        });

        setComment(found.length > 0 ? found[0] : null);
    };

  return (<div>
        <h1>리뷰 검색(작성자)</h1>
        <input 
            type="text" 
            value={author} 
            placeholder="작성자 이름 입력"
            onChange={(e) => setAuthor((e.target.value))}
        />
        <button onClick={searchCommentClick}>검색</button>
        {/* 검색 매칭 결과가 있으면 title을 표시 */}
        {/* 없으면 "해당 작성자의 댓글을 찾을 수 없습니다." */}
        <h2>
        {
            !!comment ? comment.title : "해당 작성자의 글을 찾을 수 없습니다."
        }
        </h2>
  </div>);
}
