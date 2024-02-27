
import React, {FormEvent, useEffect, useState} from "react";
import {AppOptions} from "../../AppOptions";
import Search from "../Common/Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import {deleteSpec, editSpec, getSpecsList, postSpec} from "./Service";
import {EditSpecialization, NewSpecialization, Specialization} from "./Model";
import EditSpecModal from "./EditSpecModal";
import NewSpecModal from "./NewSpecModal";
import DeleteSpecModal from "./DeleteSpecModal";



const SpecsList: React.FC = () => {
    const [specsList, setSpecsList] = useState<Specialization[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchValue, setSearchValue] = useState("");


    useEffect(() => {
        loadPage(0);
    }, []); // The empty dependency array ensures that this effect runs once on mount


    const loadPage = (index: number, search: string = "") => {
        setCurrentIndex(index);
        setSearchValue(search);
        const fetchDataFromApi = async () => {
            try {
                const result = await getSpecsList(index * AppOptions.tableRowsCount, AppOptions.tableRowsCount, search);
                setSpecsList(result.specializations);
                setTotalCount(result.total);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }

    const handleAddSpec = async(newSpec: NewSpecialization) => {
        await postSpec(newSpec);
        loadPage(currentIndex, searchValue);
    }

    const handleEditSpec = async ( id: number, editedSpec: EditSpecialization) => {
        await editSpec(id, editedSpec);
        loadPage(currentIndex, searchValue);
    }

    const handleDeleteSpec = async (specId: number) => {
        await deleteSpec(specId);
        /*if((totalCount)/ AppOptions.tableRowsCount < currentIndex){
            setCurrentIndex(currentIndex-1);
        }*/
        loadPage(currentIndex);
    }


    return (
        <div className="container">
            <Search onSearchChange={loadPage} />
            <NewSpecModal onSpecAdd={handleAddSpec}/>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Hours</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {specsList.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.hours}</td>
                            <td>
                                <EditSpecModal specId={item.id} onSpecEdit={handleEditSpec}/>
                            </td>
                            <td>
                                <DeleteSpecModal spec={item} handleDeleteSpec={handleDeleteSpec}/>
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

export default SpecsList;
