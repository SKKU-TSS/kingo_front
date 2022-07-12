import styled from "styled-components";
import SendItem from './SendItem'



const Table = styled.table`
  width: 100%;
  table-layout : fixed;
`;



const Th = styled.th`
  font-weight: 800;
  color: #4318ff;
  text-align: center;
  border-bottom: 2px solid #4318ff;
`;



const TransactionTable = ({type, transData}) => {
    
    return (
      <Table>
        <TransactionHead type = {type}/>
        <DisplayTable type = {type} transData = {transData}/>
      </Table>
    );
  };

const DisplayTable = ({type, transData}) =>{
  const displayedTable = [];
    for (let i = 0; i < transData.length; i++) {
      displayedTable.push(
          <SendItem transData={transData[i]} key={i} type = {type}/>
      );
    }
  return(<tbody>{displayedTable}</tbody>);
}

















  const TransactionHead = ({type}) =>{


    
    return(<thead>
      <tr>
        <Th>플랫폼</Th>
        <Th>시간</Th>
        {
            type !== "from" && (<Th>TO</Th>)
        }
        {
            type !== "to" && (<Th>FROM</Th>)
        }
        <Th>금액</Th>
        <Th>HASH</Th>
      </tr>
    </thead>)
  }

  export default TransactionTable;