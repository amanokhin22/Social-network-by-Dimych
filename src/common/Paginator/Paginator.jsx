import React from "react";
import styles from './Paginator.module.css';


const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div> {pages.map(p => {
        return <span className={props.currentPage === p && styles.selectedPage}
                     onClick={() => {
                         props.onPageChanged(p);
                     }}>{p}</span>
    })}
    </div>

}

export default Paginator

// import React, {useState} from "react";
// import  styles from './Paginator.module.css';
//
//
// const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
//     const pagesCount = Math.ceil(totalItemsCount / pageSize);
//     const pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }
//
//     let portionCount = Math.ceil(pagesCount / portionSize); //сколько порций получится исходя из нами выставленного значения portionSize
//     let [portionNumber, setPortionNumber] = useState(1); //хук у которого со старта portionNumber = 1, а setPortionNumber его меняет
//     let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //формула что бы получить левую границу
//     let rightPortionPageNumber = portionNumber * portionSize;//формула что бы получить правую границу
//
//
//     return <div className={styles.paginator}>
//         {portionNumber > 1 &&  //если portionNumber больше одного, показывать кнопку в лево
//             <button onClick={() => {
//                 setPortionNumber(portionNumber - 1)
//             }}>PREV</button> //установи номер порции (portionNumber) при нажатии -1
//         }
//
//         {pages
//             .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//             .map((p) => {
//                 return <span className={({
//                     [styles.selectedPage]: currentPage === p
//                 }, styles.pageNumber)}
//                              key={p}
//
//                              onClick={(e) => {
//                                  onPageChanged(p)
//                              }}>  {p}</span> //при нажатии на кнопку установи текущую страницу
//             })}
//         {portionCount > portionNumber && //показывать кнопку только если количество порций больше чем количество текущей порции
//             <button onClick={() => {
//                 setPortionNumber(portionNumber + 1)
//             }}>NEXT</button> //установи номер порции (portionNumber) при нажатии +1
//         }
//
//     </div>
// }
// export default Paginator


