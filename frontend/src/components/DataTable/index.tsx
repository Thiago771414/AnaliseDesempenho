function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>23/04/2021</td>
                        <td>Fábia Deallem</td>
                        <td>04</td>
                        <td>01</td>
                        <td>9017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;