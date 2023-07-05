import React from 'react'
import { PaginationContainer } from './styles'

export const Pagination = ({totalContent,contentPerPage,setCurrentPage,currentPage}) => {
    if(totalContent.length> 0){
        let pages = []

        for(let i = 1; i <= Math.ceil(totalContent.length/contentPerPage); i++){
            pages.push(i)
        }
        return (
            <PaginationContainer>
                {pages.map((page,index)=>{
                    return <button key={index} onClick={() => setCurrentPage(page)} className={page===currentPage?"active":""}>{page}</button>
                })}
            </PaginationContainer>
        )
    }
    return(<PaginationContainer/>)
}
