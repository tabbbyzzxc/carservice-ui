import {getClientsList} from "./Service";
import {useEffect, useState} from "react";
import {Client} from "./Model";


const ClientsList: React.FC = () => {
    const [listClients, setListClients] = useState<Client[]>([]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const result = await getClientsList();
                setListClients(result);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataFromApi();
    }, []); // The empty dependency array ensures that this effect runs once on mount


    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                {listClients.map((item, index) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default ClientsList
