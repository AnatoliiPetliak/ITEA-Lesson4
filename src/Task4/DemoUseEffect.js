/*
    
    1. Используя хук UseEffect - написать три компонента, каждый из которых будет получать
    данные из одного из следующих эндпоинтов и поместить их вывод на страницу в три отдельных столбика
    друг возле друга.
    
    https://jsonplaceholder.typicode.com/posts
    https://jsonplaceholder.typicode.com/comments
    https://jsonplaceholder.typicode.com/albums
    https://jsonplaceholder.typicode.com/todos
    https://jsonplaceholder.typicode.com/photos
    
    2. Вынести хуки в отдельные функции и реиспользовать во всех компонентах одну и ту же логику.

*/
import React, { useEffect, useState } from "react";

const DemoUseEffect = ({ url, listTittle, list }) => {
  const [data, setArr] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArr(data));
  }, []);

  return (
    <>
      <h3> {listTittle} </h3>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item[list]}</li>
        ))}
      </ol>
    </>
  );
};

export default DemoUseEffect;
