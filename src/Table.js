import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid black;
  width: 60%;
  background-color: #03a9fc;
  margin-top: 20px;
`;

Table.Head = styled.thead`
  background-color: red;
 
`;
Table.Th = styled.th`
  border: 1px solid black;
  padding: 6px;
`;
Table.Body = styled.tbody`
  border: 1px solid black;
`;
Table.Tr = styled.tr`
  border: 1px solid black;
`;
Table.Td = styled.td`
  border: 1px solid black;
`;

Table.btn = styled.button`
  padding: 5px;
  background-color: green;
  margin: 2px 8px;
  border-radius: 5px;
`;

Table.Input = styled.input`
  background-color: #eee;
  border-radius: 5px;
  margin: 0 10px;
  padding: 6px;
`;

Table.Select = styled.select`
  background-color: #eee;
  border-radius: 5px;
  padding: 6px;
`;