type Props = {
  onDeleted: () => void;
  id: number;
};

const DeleteCustomer = ({ onDeleted, id }: Props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://server.aptech.io/online-shop/customers/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete customer");
      }

      onDeleted();
      alert("Customer deleted successfully!");
    } catch (error) {
      console.error("Error deleting customer:", error);
      alert("Failed to delete customer.");
    }
  };

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-red-600"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeleteCustomer;
