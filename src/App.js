import React from "react";
import "./styles.css";

export default function App() {
  const name = "true";
  const value = 1;
  const value2 = 2;
  return (
    <div className="App">
      {1 + 1 === 3 ? (
        <h1>삼항 연산자 'True' 일때</h1>
      ) : (
        <h1>전역 연산자 'False' 일때</h1>
      )}
      <h2>
        삼항 연산자
        {1 + 1 === 3 ? "'내부-True'" : "'내부-False'"}
      </h2>
      {name === "true" && <h3>AND 연산자로 'True' 때 이 문장 나타남</h3>}
      {(function () {
        if (value === 1) {
          return (
            <p>
              리턴 함수에 IIFE(즉시 실행 함수 표현) 로 실행하는 방식,
              스위치문으로 여러 옵션을 나타낼 때 활용하기 좋음
            </p>
          );
        } else {
          return <p>없다</p>;
        }
      })()}
      {(() => {
        if (value2 === 2) {
          return <p>화살표 함수로 표현해보기</p>;
        } else {
          return <p>없다</p>;
        }
      })()}
    </div>
  );
}
