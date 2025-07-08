import { useEffect, useState } from "react";
import CreateCustomer from "./CreateCustomer";
import DeleteCustomer from "./DeleteCustomer";
import { useNavigate } from "react-router-dom";

const ListCustomer = () => {
  const [customers, setCustomers] = useState([
    {
      id: 0,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      birthday: "",
      email: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const loadCustomers = () => {
    setLoading(true);
    fetch("https://server.aptech.io/online-shop/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleOnCreated = () => {
    loadCustomers();
  };

  const handleOnDeleted = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (!confirmDelete) return;
    loadCustomers();
  };
  // const handleOnUpdated = () => {
  //   loadCustomers();
  // };

  const handleEdit = (id: number) => {
    const selectedCustomer = customers.find((c) => c.id === id);
    if (!selectedCustomer) return;
    navigate(`/update-customer/${id}`, {
      state: { customer: selectedCustomer },
    });
  };

  return (
    <>
      <CreateCustomer onCreated={handleOnCreated} />
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && (
        <p className="text-center text-red-500">Error loading customers!</p>
      )}
      <div className="container mx-auto p-4 mb-4 shadow rounded ">
        {customers.length > 0 ? (
          <table className="border-separate border border-gray-400  table-auto w-full ">
            <thead>
              <tr className="hover:bg-gray-100">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Phone Number</th>
                <th className="border border-gray-300 p-2">Address</th>
                <th className="border border-gray-300 p-2">Birthday</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="border border-gray-300 p-2">{customer.id}</td>
                  <td className="border border-gray-300 p-2">
                    {customer.firstName} {customer.lastName}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.phoneNumber}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.address}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.birthday}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {customer.email}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                      onClick={() => handleEdit(customer.id)}
                    >
                      Edit
                    </button>
                    <DeleteCustomer
                      id={customer.id}
                      onDeleted={handleOnDeleted}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No customers found</p>
        )}
      </div>
    </>
  );
};
export default ListCustomer;
