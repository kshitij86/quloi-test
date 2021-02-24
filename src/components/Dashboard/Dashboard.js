import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { useTable } from 'react-table'


function Dashboard() {

    const data = useMemo(
        () => [
            {
              description: 'Hello',
              name: 'World',
            },
            {
              description: 'react-table',
              name: 'rocks',
            },
            {
              description: 'whatever',
              name: 'you want',
            },
          ],
          []
        )
      
        const columns = useMemo(
          () => [
            {
              Header: 'Description',
              accessor: 'description', // accessor is the "key" in the data
            },
            {
              Header: 'Name',
              accessor: 'name',
            },
          ],
          []
        )
        
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({ columns, data })
    

        const { userType } = useParams();

        return (
        
        <Box style={{padding: "20px"}}>
            <Typography variant="h5">
              Welcome, { userType }
            </Typography>
        
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px',
                      background: 'white',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
  </Box>
          );
}

export default Dashboard;