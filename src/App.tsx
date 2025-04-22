import { useState } from 'react'
import './App.css'

function App() {
  const M = 4;
  const [col, setCol] = useState(Array(M*M).fill(0))


  function clickHandler(i:number){
    const newcol = col.slice();
    newcol[i] = 1-newcol[i];
    if (i-M >= 0){
      newcol[i-M] = 1-newcol[i-M];
    }
    if (i+M < M*M){
      newcol[i+M] = 1-newcol[i+M];
    }
    if ((i%M+1) < M){
      newcol[i+1] = 1-newcol[i+1];
    }
    if ((i%M-1) >= 0){
      newcol[i-1] = 1-newcol[i-1];
    }
    setCol(()=>newcol);
  }

  const pal = ["green","white"];

  function Cell({i}:{i:number}){
    const x = 100*(i%M);
    const y = 100*Math.floor(i/M);
    return(
      <g onClick={()=>clickHandler(i)}>
        <rect width={100} height={100} 
        x={x} y={y}
        stroke="black" fill={pal[col[i]]}
        >      
        </rect>
        <text fill="red" x={x+50} y={y+50}>{i+1}</text>
      </g>
    )
  }

  function Board(){
    const cells = [];
    for (let i=0; i<M*M; i++){
      cells.push(<Cell i={i} key={"cell"+i}></Cell>);
    }
    return(
      <>
        <rect width={100*M} height={100*M} fill="green">
        </rect>
        {cells}
      </>
    )

  }

  return (
    <>
      <div>
        <h1>My first react project</h1>
        <svg width={800} height={800}>
          <Board></Board>
        </svg>
      </div>
    </>
  )
}

export default App
