import { Button } from "../components/Button";
import { Img } from "../components/Img";
import githubLogo from '../assets/img/github.png'
import { Input } from "../components/Input";
import { Repository } from "../components/Repository";
import { api } from "../services/api";
import {Container} from './styles'
import { useState,useEffect } from "react";
import { Pagination } from "../components/Pagination";

function App() {

  const [currentInputValue,setInputValue] = useState("")
  const [repositories,setRepositories] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [contentPerPage,setContentPerPage] = useState(5)
  const [currentContent,setCurrentContent] = useState([])

  function setPagination(){
    const lastIndexContent = currentPage * contentPerPage
    const firstIndexContent = lastIndexContent - contentPerPage
    setCurrentContent(repositories.slice(firstIndexContent,lastIndexContent))
  }

  useEffect(()=>{
    setPagination()
  },[repositories])

  useEffect(()=>{
    setPagination()
  },[currentPage])

  const handleSearch = async () =>{

    if (currentInputValue.length > 0){
      const {data} = await api.request(`/search/repositories?q=${currentInputValue}&per_page=60`)
      const {items} = data
      setInputValue("")
      setRepositories([])
      setCurrentPage(1)
      items.forEach((item)=>{
        if(item.id){
          const exist = repositories.find(repository => repository.id === item.id)
          if(!exist){
            setRepositories(prev => [...prev,item])
            return
          }
        }
      })
    }
  }

  return (
    <Container>
      <Img src={githubLogo} alt={"github"}/>
      <Input value={currentInputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
      <Button onClick={() => handleSearch()}/>
      {currentContent.map(repo => <Repository repository={repo}/>)}
      <Pagination totalContent={repositories.length > 0? repositories:[]} contentPerPage={contentPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
     
    </Container>
  );
}

export default App;
