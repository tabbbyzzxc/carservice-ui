import React, {useEffect, useState} from "react";
import {AppOptions} from "../../AppOptions";
import Search from "../Common/Search";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import {getEmployeesList} from "./Service";
import {Employee} from "./Model";
import EditEmployeeModal from "./EditEmployeeModal";



const EmployeesList: React.FC = () => {
    const [employeesList, setEmployeesList] = useState<Employee[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        loadPage(0);
    }, []); // The empty dependency array ensures that this effect runs once on mount


    const loadPage = (index: number, search: string = "") => {
        setCurrentIndex(index);
        const fetchDataFromApi = async () => {
            try {
                const result = await getEmployeesList(index * AppOptions.tableRowsCount, AppOptions.tableRowsCount, search);
                setEmployeesList(result.employees);
                setTotalCount(result.total);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }

    return (
        <div className="container">
            <Search onSearchChange={loadPage} />
            {/*<Link className="nav-link" to="/clients/new">
                <button type="button" className="btn btn-primary">New Client</button>
            </Link>*/}
            {/*<NewEmployeeModal/>*/}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.firstName + " " + item.lastName}</td>
                            <td>
                                {/*<Link to={`/clients/edit/${item.id}`}>
                                    <button type={"button"}>
                                        <FontAwesomeIcon icon={faPenSquare} />
                                    </button>
                                </Link>*/}
                                <EditEmployeeModal employeeId={item.id}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button type="button" disabled={currentIndex === 0} onClick={() => loadPage(currentIndex - 1)} className="page-link">Previous</button></li>
                    {Array.from({ length: Math.ceil(totalCount / AppOptions.tableRowsCount) }, (_, index) => (
                        <li key={index} className={currentIndex===index ? "page-item active" : "page-item"}>
                            <button type="button" onClick={() => loadPage(index)} className="page-link">{index + 1}</button>
                        </li>
                    ))}
                    <li className="page-item"><button type="button" disabled={currentIndex === Math.ceil(totalCount / AppOptions.tableRowsCount) - 1} onClick={() => loadPage(currentIndex + 1)} className="page-link">Next</button></li>
                </ul>
            </nav>
        </div>
    );
}

export default EmployeesList;
