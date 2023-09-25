import Header from "../components/layout/Header";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Represents the Employees page component.
 * @component
 */
const Employees = () => {
  // We get the data from the redux state (array)
  const employeesList = useSelector((state) => state.employeesList);

  // We set up the datatable
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  // Search bar (not included in the datatable)
  const [search, setSearch] = useState("");

  /**
   * Handles the search input change event.
   * @param {Object} event - The change event object.
   */
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = employeesList
    .map((employee) => ({
      ...employee,
      department: employee.department, // Extract the department label
      state: employee.state, // Extract the state label
    }))
    .filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.department.toLowerCase().includes(search.toLowerCase()) ||
        employee.state.toLowerCase().includes(search.toLowerCase()) ||
        employee.street.toLowerCase().includes(search.toLowerCase()) ||
        employee.zipCode.toLowerCase().includes(search.toLowerCase()) ||
        employee.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
        employee.startDate.toLowerCase().includes(search.toLowerCase())
    );

  // Redirection
  const navigate = useNavigate();

  /**
   * Handles the navigation to the home page.
   */
  const HandleGoToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main>
        <div id="page-container">
          <div className="title-container">
            <h2 id="current-employee">Current Employees</h2>
          </div>
          <label id="search-bar" htmlFor="search">
            Search by Task :
            <input id="search" type="text" onChange={handleSearch} />
          </label>
          <DataTable columns={columns} data={filteredData} pagination />
          <section id="home-btn-section">
            <button className="btn redirect-btn" onClick={HandleGoToHome}>
              Home
            </button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Employees;
